const perfil = [
  {
    perfilNome: "LOUD",
    perfilImagem:
      "https://yt3.ggpht.com/hBufrTeLwDxrrZOjMsQEooQrne6pRAhdSFhOivYfq5gywsmpYmmRLK24YaDZKN3AdGNvX0Z0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    perfilNome: "ᵒᵖᵗⁱᶜ",
    perfilImagem:
      "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    perfilNome: "Valorant_BR",
    perfilImagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5xMm67Z2d_zVVE1rLIUkTW8JuCwXwanpHA&usqp=CAU",
  },
  {
    perfilNome: "Xarol",
    perfilImagem:
      "https://pbs.twimg.com/profile_images/1531053716610097152/qciLNe_X_400x400.jpg",
  },
  {
    perfilNome: "sacy_day",
    perfilImagem:
      "https://pbs.twimg.com/profile_images/1565285039939649537/xkePAvnM_400x400.jpg",
  },
];

function Sugestao(props) {
  return (
    <div className="outro">
      <div>
        <img src={props.perfilImagem} alt="" />
      </div>
      <div>
        <span>{props.perfilNome}</span>
        <p>Segue você</p>
      </div>
      <div className="div-seguir">
        <span className="seguir">Seguir</span>
      </div>
    </div>
  );
}

export default function Sugestoes() {
  return (
    <div className="outros-perfies">
      {perfil.map((p, index) => {
        return (
          <Sugestao
            key={index}
            perfilImagem={p.perfilImagem}
            perfilNome={p.perfilNome}
          />
        );
      })}
      <div className="outro">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
      </div>
      <div className="outro">
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
