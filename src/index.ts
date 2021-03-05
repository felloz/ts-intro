/*
 *  The code here
 */

interface SuperHeroeData {
	
	setName: (data: string) => void;
	getName: () => string;
}

const prueba: SuperHeroeData = {
	
	setName(data) {
		return data;
	},	
	getName(): string  {
		return 'hola';
	}
}
 

class SuperHeroe implements SuperHeroeData {

	private _name;
	private _superPower;

	setName(data: string): void {
		this._name = data;
	}

	getName(): string {
		return this._name;
	}

	prueba(): string {
		return 'prueba';
	}
}

const luis = new SuperHeroe;

luis.setName('Luis');

console.log(luis.prueba());

 /*const superHeroe = {
	 name: '',
	 private superPower: '',
	 setName(name): void {
		 this.name = name;
	 }
}
 
superHeroe.setName('Luis');
superHeroe.superPower = 'Arrecheras';

console.table(superHeroe);*/