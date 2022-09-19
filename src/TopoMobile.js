import logoMobile from "./assets/logo.png";
export default function TopoMobile() {
  return (
    <div className="topo-mobile">
      <div className="div">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <div>
        <img src={logoMobile} alt="" />
      </div>
      <div>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
  );
}
