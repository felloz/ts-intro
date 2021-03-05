
function multiplicar(numero1: number, numero2:number):number {
	return numero1 * numero2;
}

interface PersonajeLOR {
	name: string,
	pv: number,
	mostrarHp: ()=> void;
}


function curar(personaje: PersonajeLOR, curacion:number): void {
	
	personaje.pv += curacion;
}	

const personaje: PersonajeLOR = {
	name: 'Artos',
	pv: 500,
	mostrarHp(): number {
	return this.pv;
	}
}

curar(personaje, 50)

console.log(personaje.mostrarHp());