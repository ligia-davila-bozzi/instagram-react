import Stories from "./stories";
import Conteudos from "./conteudos"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="container">
                <div class="storieseconteudos">
                    <Stories />
                    <Conteudos />
                </div>
            </div>
        </div>
    );
}