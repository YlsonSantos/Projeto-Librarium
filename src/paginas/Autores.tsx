import React, { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@radix-ui/react-dialog';
import "../estilos/Autores.css";
import '../estilos/Medias.css';

interface Autor {
  id: number;
  name: string;
  email?: string;
  foto?: string;
  nacionalidade?: string;
}

const Autores = () => {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nacionalidade, setNacionalidade] = useState<string>('');
  const [foto, setFoto] = useState<File | null>(null);
  const [busca, setBusca] = useState<string>('');
  const [editando, setEditando] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openVer, setOpenVer] = useState<boolean>(false);
  const [autorSelecionado, setAutorSelecionado] = useState<Autor | null>(null);

  useEffect(() => {
    const autoresSalvos = localStorage.getItem("autores");
    if (autoresSalvos) {
      setAutores(JSON.parse(autoresSalvos));
    }
  }, []);

  const adicionarAutor = () => {
    const novoAutor: Autor = {
      id: Date.now(),
      name,
      email,
      nacionalidade,
      foto: foto ? URL.createObjectURL(foto) : undefined,
    };

    const autoresAtualizados = [...autores, novoAutor];
    setAutores(autoresAtualizados);
    localStorage.setItem("autores", JSON.stringify(autoresAtualizados));

    resetForm();
    setOpenModal(false);
  };

  const editarAutor = (autor: Autor) => {
    setId(autor.id);
    setName(autor.name);
    setEmail(autor.email || '');
    setNacionalidade(autor.nacionalidade || '');
    setFoto(autor.foto ? new File([autor.foto], 'foto.jpg') : null);
    setEditando(true);
    setOpenModal(true);
  };

  const salvarEdicao = () => {
    const autoresAtualizados = autores.map(autor =>
      autor.id === id
        ? { ...autor, name, email, nacionalidade, foto: foto ? URL.createObjectURL(foto) : autor.foto }
        : autor
    );
    setAutores(autoresAtualizados);
    localStorage.setItem("autores", JSON.stringify(autoresAtualizados));

    resetForm();
    setOpenModal(false);
  };

  const excluirAutor = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este autor?')) {
      const autoresAtualizados = autores.filter(autor => autor.id !== id);
      setAutores(autoresAtualizados);
      localStorage.setItem("autores", JSON.stringify(autoresAtualizados));
    }
  };

  const autoresFiltrados = autores.filter(autor => autor.name.toLowerCase().includes(busca.toLowerCase()));

  const resetForm = () => {
    setId(0);
    setName('');
    setEmail('');
    setNacionalidade('');
    setFoto(null);
    setEditando(false);
  };

  // Função para exibir os detalhes do autor no modal
  const verDetalhesAutor = (autor: Autor) => {
    setAutorSelecionado(autor);
    setOpenVer(true);
  };

  return (
    <div className="container-autores">
      <div className="centralizar-autores">
        <h1>AUTORES</h1>
        <input
          type="text"
          placeholder="Buscar autor..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <div className="cards-autores">
          {autoresFiltrados.map((autor) => (
            <div className="card-autor" key={autor.id}>
              {autor.foto ? (
                <img src={autor.foto} alt="Foto do autor" />
              ) : (
                <div style={{ height: '200px', backgroundColor: '#ccc' }}></div>
              )}
              <h3>{autor.name}</h3>
              <p><strong>ID do Autor:</strong> {autor.id}</p>
              <p><strong>Nome:</strong> {autor.name}</p>
              {autor.email && <p><strong>Email:</strong> {autor.email}</p>}
              {autor.nacionalidade && <p><strong>Nacionalidade:</strong> {autor.nacionalidade}</p>}
              <div className="botao-container">
                <button className="editar-btn" onClick={() => editarAutor(autor)}>Editar</button>
                <button className="excluir-btn" onClick={() => excluirAutor(autor.id)}>Excluir</button>
                <button className="ver-btn" onClick={() => verDetalhesAutor(autor)}>Ver</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Adicionar/Editar Autor */}
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogTrigger asChild>
            <button className="adicionar-btn-container" onClick={() => {
              setEditando(false);
              resetForm();
              setOpenModal(true);
            }}>
              <span className="adicionar-texto">+</span>
            </button>
          </DialogTrigger>

          <DialogContent className="conteudo-modal">
            <DialogTitle>{editando ? "Editar Autor" : "Adicionar Autor"}</DialogTitle>
            <DialogDescription>{editando ? "Atualize os dados do autor:" : "Preencha os dados do autor:"}</DialogDescription>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                editando ? salvarEdicao() : adicionarAutor();
              }}
            >
              <div>
                <label>ID do Autor:</label>
                <input
                  type="number"
                  value={id}
                  onChange={(e) => setId(parseInt(e.target.value))}
                  required
                  disabled={editando}
                />
              </div>

              <div>
                <label>Nome do Autor:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>Email (opcional):</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>Nacionalidade (opcional):</label>
                <input
                  type="text"
                  value={nacionalidade}
                  onChange={(e) => setNacionalidade(e.target.value)}
                />
              </div>

              <div>
                <label>Foto (opcional):</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFoto(e.target.files ? e.target.files[0] : null)}
                />
              </div>

              <div className="botao-container">
                <DialogClose asChild>
                  <button className="voltar-btn">Fechar</button>
                </DialogClose>
                <button type="submit" className="adicionar-btn">{editando ? "Salvar" : "Adicionar"}</button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
{/* Modal de Detalhes do Autor */}
<Dialog open={openVer} onOpenChange={setOpenVer}>
  <DialogContent className="modal-ver">
    <DialogTitle>Detalhes do Autor</DialogTitle>
    {autorSelecionado && (
      <>
        <DialogDescription>
          <h3>{autorSelecionado.name}</h3>
        </DialogDescription>
        <div className="informacoes-autor">
          <p>
            <strong>ID:</strong> {autorSelecionado.id}
          </p>
          <p>
            <strong>Nome:</strong> {autorSelecionado.name}
          </p>
          {autorSelecionado.email && (
            <p>
              <strong>Email:</strong> {autorSelecionado.email}
            </p>
          )}
          {autorSelecionado.nacionalidade && (
            <p>
              <strong>Nacionalidade:</strong> {autorSelecionado.nacionalidade}
            </p>
          )}
        </div>
        <DialogClose asChild>
          <button className="voltar-btn">Fechar</button>
        </DialogClose>
      </>
    )}
  </DialogContent>
</Dialog>

      </div>
    </div>
  );
};

export default Autores;
