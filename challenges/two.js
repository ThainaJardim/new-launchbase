const usuario = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua : "Rua Guilherme Gembala",
        numero : 260
    }
};

console.log(`a empresa ${usuario.nome} está localizada em ${usuario.endereço.rua}, ${usuario.endereço.numero} `)

/* ------------------------------------------------------------------------------------------*/

const candidatos = [
    {
        nome: "Thainá",
        idade: 26,
        tecnologias :[
            {nome: "Java", especialidade: "webscraper"},
            {nome: "JS", especialidade: "WEB"}

        ]
    },

    {
        nome: "Matheus",
        idade: 21,
        tecnologias :[
            {nome: "Java", especialidade: "webscraper"},
            {nome: "JS", especialidade: "WEB"}

        ]
    }
]

console.log(`a usuária ${candidatos[0].nome} tem ${candidatos[0].idade} e usa a tecnologia ${candidatos[0].tecnologias[0].nome} e tem a especialidade ${candidatos[0].tecnologias[0].especialidade}`)