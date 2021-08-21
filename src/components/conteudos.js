import Curtidas from "./curtidas";

let elements = [
    {
        profileImg: "atena2.jpeg",
        profileName: "atena",
        postImg: "atena2.jpeg",
        comments: [
            {
                profile: "jhonn.gomes.15",
                text: "Esse coelho é muito bonito."
            },
            {
                profile: "mariana.viega.barros",
                text: "Que coelhinha linda."
            },
            {
                profile: "lucas.gois.41",
                text: "Que fofa."
            }
        ]
    }, 
    {
        profileImg: "mae.jpg",
        profileName: "loura.gomes",
        postImg: "mae.jpg",
        comments: [
            {
                profile: "jhonn.gomes.15",
                text: "Somos muito lindos."
            },
            {
                profile: "mariana.viegas.barros",
                text: "Que fofinhos."
            },
            {
                profile: "atena",
                text: "Olha a vovó."
            }
        ]
    },
    {
        profileImg: "atena2.jpeg",
        profileName: "atena",
        postImg: "atena2.jpeg",
        comments: [
            {
                profile: "biaaranha9",
                text: "Gostei desse urso."
            },
            {
                profile: "henrique_sdias",
                text: "Urso maneiro."
            },
            {
                profile: "silveirakairo",
                text: "Esse urso é da hora."
            }
        ]
    },
    {
        profileImg: "atena2.jpeg",
        profileName: "atena",
        postImg: "video",
        comments: [
            {
                profile: "biaaranha9",
                text: "Gostei desse urso."
            },
            {
                profile: "henrique_sdias",
                text: "Urso maneiro."
            },
            {
                profile: "silveirakairo",
                text: "Esse urso é da hora."
            }
        ]
    }
];

export default function Conteudos() {
    return (
        <div class="conteudos">
            {elements.map((element) => {
                return <Conteudo profileImg={element.profileImg} profileName={element.profileName} postImg={element.postImg} comments={element.comments}/>
            })}
        </div>
    );
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <div class="titulo-conteudo">
                <div class="fotoenome">
                    <img src={`Imagens/${props.profileImg}`} />
                    <p>{props.profileName}</p>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <CorpoConteudo postImg={props.postImg}/>
            <Curtidas comments={props.comments}/>
        </div>
    );
}

function CorpoConteudo(props) {
    if(props.postImg === "video"){
        return (
        <div class="corpo-conteudo">
            <video autoplay muted>
                <source src={`Videos/video.mp4`} type="video/mp4" />
                <source src={`Videos/video.ogv`} type="video/ogv" />
                Seu navegador não suporta este vídeo
            </video>
        </div>
        );
    }
    return (
    <div class="corpo-conteudo">
        <img src={`Imagens/${props.postImg}`} />
    </div>
    );
}