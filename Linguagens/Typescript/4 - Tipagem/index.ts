const nick = 'Leonardo';
console.log(nick);

/** **/

const hobbies = ['Cook', 'Swin'];
console.log(hobbies[0]);

enum Days {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY'
}

console.log(Days);

const day: Days = Days.MONDAY;
console.log(day);


const employee: { sups: string[], baterPonto: (hour: number) => string } = {
    sups: ['a', 'b', 'c'],
    baterPonto: (hora) => {
        if(hora <= 8) return 'Ponto normal';
        return 'Fora do ponto';
    }
}

type Funcionario = {
    sups: string[],
    baterPonto(horas: number): string;
}

const employee2: Funcionario = {
    sups: ['a', 'b', 'c'],
    baterPonto: (hora) => {
        if(hora <= 8) return 'Ponto normal';
        return 'Fora do ponto';
    }
}

function falha(msg: string): never {
    while(true) {}
    throw new Error(msg);
}


type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}