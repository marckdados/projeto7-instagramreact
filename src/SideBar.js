import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

const dados = {
  usuarioImagem:
    "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
  usuarioArroba: "usuario",
  usuarioNome: "loudcampea",
};

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="perfil-principal">
        <Usuario
          usuarioImagem={dados.usuarioImagem}
          usuarioArroba={dados.usuarioArroba}
          usuarioNome={dados.usuarioNome}
        />
        <div className="sugestao">
          <p>Sugestão para você</p>
          <span>Ver tudo</span>
        </div>
        <Sugestoes />
      </div>
    </div>
  );
}
