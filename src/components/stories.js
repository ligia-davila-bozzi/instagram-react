let elements = [
    {
        img: "atena2.jpeg",
        name: "atena"
    },
    {
        img: "eu.jpg",
        name: "jhonn.gomes.15"
    },
    {
        img: "mariana.jpg",
        name: "mariana.viegas.barros"
    },
    {
        img: "bea.jpg",
        name: "biaaranha9"
    },
    {
        img: "henrique.jpg",
        name: "henrique_sdias"
    },
    {
        img: "gois.jpg",
        name: "lucas.gois.41"
    },
    {
        img: "kairo.jpg",
        name: "silveirakairo"
    },
    {
        img: "atena2.jpeg",
        name: "atena"
    }
];

export default function Stories() {
    return (
        <div class="stories">
            {elements.map((element) => {
                return <Story src={`Imagens/${element.img}`} name={element.name} />
            })}    
      
            <ion-icon name="chevron-forward-circle" class="seta"></ion-icon>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <img src={props.src} class="imagem-story"/>
            <p class="weight-400 size-12">{props.name}</p>
            <img src="Imagens/stories_background.jpg" class="background" />
        </div>
    );
}