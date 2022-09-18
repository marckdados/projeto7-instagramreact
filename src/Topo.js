export default function Topo() {
  return (
    <div className="topo">
      <div>
        <ion-icon name="logo-instagram"></ion-icon>
        <div className="barra"></div>
        <img src="../public/img/logo.png" alt="Logo Instagram" />
      </div>
      <div>
        <input className="pesquisa" type="text" placeholder="Pesquisa" />
      </div>
      <div>
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}
