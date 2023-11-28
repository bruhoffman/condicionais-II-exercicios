function verificarDivisaoA() {
    const num = Number(prompt("Digite um número."));

    if (num % 2 === 0) {
        if (num % 3 === 0) {
            console.log(`Número ${num} é divisível por 2 ou por 3.`);
        } else {
            console.log(`Número ${num} somente é divisível por 2.`);
        }
    } else {
        if (num % 3 === 0) {
            if (num % 2 === 0) {
                console.log(`Número ${num} é divisível por 2 ou por 3`);
            } else {
                console.log(`Número ${num} somente é divisível por 3.`);
            }
        } else {
            console.log(`O número ${num} não é divível por 2 nem por 3.`);
        };
    };
}

//verificarDivisaoA();

function verificarDivisaoB() {
    const num = Number(prompt("Digite um número:"));
    if ((num % 2 === 0) || (num % 3 === 0)) {
        console.log(`Número ${num} é divisível por 2 ou por 3`);
    } else {
        console.log(`O número ${num} não é divisível por 2 ou por 3`);
    }
}

//verificarDivisaoB();

// Não sei se está de acordo com o enunciado.