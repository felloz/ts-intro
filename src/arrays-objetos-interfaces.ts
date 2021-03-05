

let superman: string = 'Hello, how are you';

let habilidades: (string | number)[] = ["Luis", 39];


interface EspecialistaDatos {
    nombre: string,
    apellido: string,
    edad: number,
    sexo: string,
    profesion: string,
    trabajos?: string[]
}

const especialista: EspecialistaDatos = {
    nombre: 'Luis',
    apellido: 'Serrano',
    edad: 39,
    sexo: 'M',
    profesion: 'Ingeniero'
}

especialista.trabajos =  ['Sunchannel', 'IPC', 'Comer perros']

console.table(especialista);