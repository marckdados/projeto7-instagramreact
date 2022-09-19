import React from "react";

export default function Usuario(props) {
  const [nome, setNome] = React.useState(props.usuarioNome);
  const [imagem, setImagem] = React.useState(props.usuarioImagem);

  function mudarNome() {
    const nome = prompt("Qual seu nome ?");
    setNome(nome);
  }

  function mudarImagem() {
    const imagem = prompt("Qual url da imagem ?");
    setImagem(imagem);
  }

  return (
    <div className="perfil">
      <img onClick={mudarImagem} src={imagem} alt="" />
      <div>
        <span>{props.usuarioArroba}</span>
        <p>{nome}</p>
      </div>
      <ion-icon onClick={mudarNome} name="pencil-outline"></ion-icon>
    </div>
  );
}
