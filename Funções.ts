// === funções ===
 

// função tradicional
function saudacao(nome: string): string{
    return `ola, ${nome}`
}
console.log(saudacao('Antonio'))

//Arrow function

const soma = (x: number, y:number): number => x + y;
console.log('soma', soma(2,3))

//Função de valor padrao

function mensagem(texto: string = 'Bem vindo!'){
    console.log(texto);
}

//função com parametro opincional

function apresentar(nome?: string){
    if (nome){
        console.log(`Ola, ${nome}`)
    }else{
        console.log('Ola visitante')
    }
}