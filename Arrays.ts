//arrays e manipulação

let notas: number [] = [6,7.5,8,5];

//forEach
//realiza a iteração
notas.forEach(n => console.log('Nota', n));

// map
let notasAjustadas = notas.map(n => n = 0.5);

//filter // filtra os valores

let aprovados = notas.filter(n => n >= 6);

// push e pop
notas.push(10);//adiciona no array
notas.pop();//remove o elemento do final do array