import React from "react";

import Superior from "./Superior";
const posts = [
  {
    usuarioImagem:
      "https://images.pexels.com/photos/13428312/pexels-photo-13428312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    usuarioNome: "anderson",
    imagemPost:
      "https://cdn.ome.lt/POrJ2S1KTmsyofc4GK_QRZyF7bk=/970x360/smart/uploads/conteudo/fotos/meme-aspas-loud-2.jpg",
    curtidoPor: "juniorsouza",
    imagemSeguidor:
      "https://images.pexels.com/photos/10954791/pexels-photo-10954791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    numeroCurtidas: 964,
  },
  {
    usuarioImagem:
      "https://images.pexels.com/photos/10083650/pexels-photo-10083650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    usuarioNome: "klauss",
    imagemPost: "https://pbs.twimg.com/media/FK8oDvlXMAMMoKl.jpg",
    curtidoPor: "zezinho",
    imagemSeguidor:
      "https://images.pexels.com/photos/11735730/pexels-photo-11735730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    numeroCurtidas: 300,
  },
  {
    usuarioImagem:
      "https://yt3.ggpht.com/hBufrTeLwDxrrZOjMsQEooQrne6pRAhdSFhOivYfq5gywsmpYmmRLK24YaDZKN3AdGNvX0Z0=s900-c-k-c0x00ffffff-no-rj",
    usuarioNome: "LOUD",
    imagemPost:
      "https://i.superesportes.com.br/9T6KMSA6glKyuzbgx8RuM2s-1XY=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2022/09/17/3976335/time-da-loud-finalista-do-valorant-champions-2022-composto-por-sacy-aspas-bzka-coach-saadhak-less-e-pancada_1_164228.jpg",
    curtidoPor: "optic",
    imagemSeguidor:
      "https://images.pexels.com/photos/11735730/pexels-photo-11735730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    numeroCurtidas: 126753,
  },
];
function Inferior(props) {
  const [salvo, setSalvo] = React.useState("bookmark-outline");

  function salvar() {
    salvo === "bookmark-outline"
      ? setSalvo("bookmark")
      : setSalvo("bookmark-outline");
  }

  function alterarNumeroCurtidas() {
    if (props.curtidas === props.numeroCurtidas) {
      props.setCurtidas(props.curtidas + 1);
      props.setCoracao("heart");
      props.setCor("md hydrated curtida");
    } else {
      props.setCurtidas(props.curtidas - 1);
      props.setCoracao("heart-outline");
      props.setCor("md hydrated");
    }
  }
  return (
    <div className="inferior">
      <div className="icones-inferior">
        <div>
          <ion-icon
            onClick={alterarNumeroCurtidas}
            name={props.coracao}
            class={props.cor}
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon onClick={salvar} name={salvo}></ion-icon>
        </div>
      </div>
      <div className="comentarios">
        <img src={props.imagemSeguidor} alt="Imagem Seguidor" />
        <span>
          Curtido por {props.curtidoPor} e outras {props.curtidas} pessoas
        </span>
      </div>
    </div>
  );
}

function Post(props) {
  const [curtidas, setCurtidas] = React.useState(props.numeroCurtidas);
  const [cor, setCor] = React.useState("md hydrated");
  const [coracao, setCoracao] = React.useState("heart-outline");

  function postImagem() {
    if (curtidas === props.numeroCurtidas) {
      setCurtidas(curtidas + 1);
      setCoracao("heart");
      setCor("md hydrated curtida");
    }
  }
  return (
    <div className="post">
      <Superior
        usuarioImagem={props.usuarioImagem}
        usuarioNome={props.usuarioNome}
      />
      <img
        className="foto-post"
        onClick={postImagem}
        src={props.imagemPost}
        alt="POST"
      />
      <Inferior
        curtidoPor={props.curtidoPor}
        imagemSeguidor={props.imagemSeguidor}
        numeroCurtidas={props.numeroCurtidas}
        curtidas={curtidas}
        setCurtidas={setCurtidas}
        cor={cor}
        setCor={setCor}
        coracao={coracao}
        setCoracao={setCoracao}
      />
    </div>
  );
}

export default function CaixaPosts() {
  return (
    <div className="caixa-posts">
      {posts.map((p, index) => (
        <Post
          key={index}
          usuarioImagem={p.usuarioImagem}
          usuarioNome={p.usuarioNome}
          imagemPost={p.imagemPost}
          imagemSeguidor={p.imagemSeguidor}
          curtidoPor={p.curtidoPor}
          numeroCurtidas={p.numeroCurtidas}
        />
      ))}
    </div>
  );
}
