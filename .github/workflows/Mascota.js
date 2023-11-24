class Mascota {
    constructor(nombre, edad) {
      if (new.target === Mascota) {
        throw new Error('No puedes instanciar directamente la clase abstracta Mascota.');
      }
  
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Métodos abstractos
    hacerSonido() {
      throw new Error('El método hacerSonido debe ser implementado por las clases hijas.');
    }
  
    moverse() {
      throw new Error('El método moverse debe ser implementado por las clases hijas.');
    }
  
    obtenerInformacion() {
      return `${this.nombre} tiene ${this.edad} años.`;
    }
  }