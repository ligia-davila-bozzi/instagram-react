let elements = [
    {
        name: "paper-plane-outline",
        class: "mobile"
    },
    {
        name: "compass-outline",
        class: "desktop"
    },
    {
        name: "heart-outline",
        class: "desktop"
    },
    {
        name: "person-outline",
        class: "desktop"
    }
];

export default function Topo() {
    return (
        <div class="topo">
        
        <div class="icones-topo">
            <ion-icon name="logo-instagram" class="mobile logo"></ion-icon>
            <div class="separador-vertical desktop"></div>
            <img src="Imagens/logo.png" class="mobile" />

            <div class="pesquisar desktop">Pesquisar</div>
           
            
            <div class="icones-direita">
                {elements.map((element) => {
                    return <Icone name={element.name} class={element.class}/>
                })}
            </div>
           
        </div>
        

    </div>
    );
}

function Icone(props) {
    return (
        <ion-icon name={props.name} class={props.class}></ion-icon>
    );
}