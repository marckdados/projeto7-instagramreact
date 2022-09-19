const stories = [
  {
    imagem:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    nome: "dogue",
  },
  {
    imagem:
      "https://images.pexels.com/photos/797640/pexels-photo-797640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nome: "aba",
  },
  {
    imagem:
      "https://images.pexels.com/photos/8202456/pexels-photo-8202456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nome: "jack",
  },
  {
    imagem:
      "https://images.pexels.com/photos/9809406/pexels-photo-9809406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    nome: "sebastiao",
  },
  {
    imagem:
      "https://images.pexels.com/photos/5465335/pexels-photo-5465335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    nome: "pandora",
  },
  {
    imagem:
      "https://images.pexels.com/photos/3693208/pexels-photo-3693208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    nome: "jeremias",
  },
  {
    imagem:
      "https://images.pexels.com/photos/11556918/pexels-photo-11556918.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    nome: "chris",
  },
];

function Stories(props) {
  console.log(props.nome);
  return (
    <div className="lugarzinho">
      <img className="foto-stores" src={props.imagem} alt={props.nome} />
      <div className="nome-stories">{props.nome}</div>
    </div>
  );
}

export default function CaixaStories() {
  return (
    <div className="caixa-stories">
      {stories.map((s, index) => (
        <Stories key={index} imagem={s.imagem} nome={s.nome} />
      ))}
      <ion-icon class="botao-stores" name="chevron-forward-circle"></ion-icon>
    </div>
  );
}
