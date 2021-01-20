// Criar um programa que calcula a média 

const alunosDaTurmaA = [
{
    nome: "Thainá",
    nota: 10
},
{
    nome: "Tita",
    nota: 5.6
},
{
    nome: "Bete",
    nota: 9.9
}

]

const alunosDaTurmaB = [
    {
        nome: "Diele",
        nota: 8
    },
    {
        nome: "Thiago",
        nota: 4
    },
    {
        nome: "Diego",
        nota: 5
    }
    
    ]

    function calculaMedia(alunos){
        return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
    }


    const media1 = calculaMedia(alunosDaTurmaA)
    const media2 = calculaMedia(alunosDaTurmaB)

    function enviaMensagem(media, turma){
        if(media > 6 ){
            console.log(`A media da ${turma} é de ${media}, foi aprovada`)
        } else{
            console.log(`A media da ${turma} é de ${media}, foi reprovada`)

        }
    }

    const enviaMensagemTurmaA = enviaMensagem(media1)
    const enviaMensagemTurmaB = enviaMensagem(media2)

    