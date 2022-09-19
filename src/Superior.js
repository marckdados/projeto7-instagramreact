export default function Superior(props) {
  return (
    <div className="superior">
      <div>
        <img src={props.usuarioImagem} alt="Imagem Perfil Usuario" />
        <span>{props.usuarioNome}</span>
      </div>
      <div className="more">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
