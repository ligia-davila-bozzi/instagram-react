import Stories from "./stories";
import Conteudos from "./conteudos"
import BarraLateral from "./barralateral";
import BarraMobile from "./barramobile";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="container">
                <div class="storieseconteudos">
                    <Stories />
                    <Conteudos />
                </div>
            </div>
            <BarraLateral />
            <BarraMobile />
        </div>
    );
}