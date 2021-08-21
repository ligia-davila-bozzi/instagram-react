export default function Curtidas(props) {
    
    return (
        <div class="curtidas">
            <div class="icones-curtida">
                <div class="icones-curtida-esquerda">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline" class="icones-curtida-direita"></ion-icon>
            </div>
            <div class="curtido-por">
                <img src="Imagens/eu.jpg" />
                <p>Curtido por </p>
                <p class="weight-500">Jhonnatan Gomes</p>
                <p> e </p>
                <p class="weight-500">Mariana Viegas</p>
            </div>
            <Comentarios  comments={props.comments}/>
        </div>
    );
}

function Comentarios(props) {
    return (
        <div class="comentarios">
            {props.comments.map((comment) => {
                return (
                    <div>
                        <Comentario profile={comment.profile} text={comment.text}/>
                        <br />
                    </div>
                )
            })}
        </div>
    );
}

function Comentario(props) {
    return (
        <div class="comentario">
            <div class="comentarioenome">
                <span class="weight-500">{props.profile}</span> 
                <span>{props.text}</span>
            </div>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    );
}