class personaje {
  constructor(nombre, vida, edad, ataque, defensa) {
    this.nombre = nombre;
    this.vida = vida;
    this.edad = edad;
    this.ataque = ataque;
    this.defensa = defensa;
  }
  get information() {
    return `La persona llamada ${this.nombre} tiene ${this.vida} de vida`;
  }
  set cambiarName(newName) {
    this.nombre = newName;
  }
}


class orcos extends personaje {
  constructor(nombre, vida, edad, ataque, defensa, raza) {
    super(nombre, vida, edad, ataque, defensa)
    this.raza = raza;
  }
}

let mago = new personaje("Felipe", "100%", 30, 150, 20);
let guerrero = new personaje("Arturo", "50%", 20, 250, 10);
let orco1 = new orcos("Pepe",1000,100,200,200,"OrcoLimon");


// console.log(mago.information);
// console.log(guerrero);
// guerrero.cambiarName = "Eduardo";
// console.log(guerrero);
