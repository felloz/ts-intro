/*
 *  The code here
 */
var prueba = {
    setName: function (data) {
        return data;
    },
    getName: function () {
        return 'hola';
    }
};
var SuperHeroe = /** @class */ (function () {
    function SuperHeroe() {
    }
    SuperHeroe.prototype.setName = function (data) {
        this._name = data;
    };
    SuperHeroe.prototype.getName = function () {
        return this._name;
    };
    SuperHeroe.prototype.prueba = function () {
        return 'prueba';
    };
    return SuperHeroe;
}());
var luis = new SuperHeroe;
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
