class Perro extends Mascota {
    constructor(nombre, edad, raza) {
      super(nombre, edad);
      this.raza = raza;
    }
  
    hacerSonido() {
      return '¡Guau!';
    }
  
    moverse() {
      return 'Corriendo por el patio.';
    }
  }