let people = [
    {
        name: "atena",
        img: "atena2.jpeg"
    },
    {
        name: "mariana.viegas.barros",
        img: "mariana.jpg"
    },
    {
        name: "loura.gomes",
        img: "mae.jpg"
    },
    {
        name: "biaaranha9",
        img: "bea.jpg"
    },
    {
        name: "henrique_sdias",
        img: "henrique.jpg"
    }
];

export default function BarraLateral() {
    return(
        <div class="barra-lateral">
            <div class="perfil">
                <img src="Imagens/eu.jpg" />
                <div class="nickname">
                    <p class="weight-500">jhonn.gomes.15</p>
                    <p class="nome">Jhonnatan Gomes</p>
                </div>
            </div>
            <div class="sugestoes">
                <div class="sugestoesevertudo">
                    <p class="weight-500 sugestoes-titulo">Sugestões para você</p>
                    <p class="weight-500 size-12">Ver tudo</p>
                </div>
                {people.map((person) => {
                    return <FotoNomeSegue img={person.img} name={person.name}/>
                })}
            </div>
            <p class="weight-400 informacoes">Sobre • Ajuda • Imprensa • API • Carreiras • 
                Privacidade • Termos • Localizações • Contas mais relevantes • 
                Hashtags • Idioma</p>

            <p class="weight-400 informacoes">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}

function FotoNomeSegue(props) {
    return(
        <div class="fotonomesegue">
            <div class="lado-esquerdonomesegue">
                <img src={`Imagens/${props.img}`} />
                <div class="nomesegue">
                    <p class="weight-500 size-14">{props.name}</p>
                    <p class="weight-400 size-12 cor_segue">Segue você</p>
                </div>
            </div>
            <p class="weight-500 size-12 blue seguir">Seguir</p>
        </div>
    );
}