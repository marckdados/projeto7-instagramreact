import Esquerdo from "./Esquerdo";
import Direito from "./Direito";
import Bottom from "./Bottom";
export default function Corpo() {
  return (
    <div className="conteudo">
      <Esquerdo />
      <Direito />
      <Bottom />
    </div>
  );
}
