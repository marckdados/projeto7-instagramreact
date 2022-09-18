import CaixaPosts from "./CaixaPosts";
import CaixaStories from "./CaixaStories";

export default function Esquerdo() {
  return (
    <div className="esquerdo">
      <CaixaStories />
      <CaixaPosts />
    </div>
  );
}
