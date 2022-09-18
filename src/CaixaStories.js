const stories = [
  {
    imagem: "../public/img/dog.svg",
    nome: "dogue",
  },
];

function Stories(props) {
  console.log(props.nome);
  return (
    <div>
      <img className="foto-stores" src={props.imagem} alt={props.nome} />
      <span>{props.nome}</span>
    </div>
  );
}

export default function CaixaStories() {
  return (
    <div className="caixa-stories">
      {stories.map((s) => {
        <Stories imagem={s.imagem} nome={s.nome} />;
      })}
      <ion-icon
        className="botao-stores"
        name="chevron-forward-circle"
      ></ion-icon>
    </div>
  );
}
