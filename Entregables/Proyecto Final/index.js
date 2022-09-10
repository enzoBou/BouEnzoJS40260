class Suplementos{
    constructor(id, nombre, precio, peso){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.peso = peso;
    }
}
const creatina = [
    new Suplementos (01, "Creatina Star Nutrition Monohidratada", 10800, "300grs"),
    new Suplementos (02, "Creatina Star Nutrition Monohidratada", 25600, "1000grs"),
    new Suplementos (03, "Creatina Xtrenght Micronizada", 10000, "250grs"),
    new Suplementos (04, "Creatina +Growth", 2490, "300grs"),
];
const proteina = [
    new Suplementos (01, "Proteina Star Nutrition", 5510, "907grs"),
    new Suplementos (02, "Proteina HTN Gold XT", 7000, "1015grs"),
    new Suplementos (03, "Proteina ENA Sport True Made", 5599, "930grs"),
    new Suplementos (04, "Proteina ENA Whey X-Pro", 7999, "907grs"),
];
const prework = [
    new Suplementos (01,"Pre Entreno Star Nutrition Pump V8", 3499, "285grs"),
    new Suplementos (02, "Pre Entreno Cellucor C4", 18499, "390grs"),
    new Suplementos (03, "Pre Entreno Pre War ENA", 3499, "400grs"),
];

class Ropa{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const remera = [
    new Ropa (01, "Remera Gris Logo Kohler Gym", 2499),
    new Ropa (02, "Remera Blanca Logo Kohler Gym", 2499),
    new Ropa (03, "Remera Negra Logo Kohler Gym", 2499),   
]
const campera = [
    new Ropa (01, "Campera Gris Logo Kohler Gym", 3499),
    new Ropa (02, "Campera Negra Logo Kohler Gym", 3499),
]
const pantalon = [
    new Ropa (01, "Pantalon Negro Adidas", 2999),
    new Ropa (02, "Pantalon Gris Adidas", 2999),
    new Ropa (02, "Pantalon Negro Nike", 3299),
    new Ropa (02, "Pantalon Gris Nike", 3299),
    new Ropa (02, "Pantalon Liso Negro Logo Kohler Gym", 2999),
] 

class Membresia{
    constructor(id, nombre, horario, precio, cupos){
        this.id = id;
        this.nombre = nombre;
        this.horario = horario;
        this.precio = precio;
        this.cupos = cupos;
    }
}

const membresias = [
    new Membresia (01, "Spinning", "20:00hs", 2000, 10),
    new Membresia (02, "Musculacion", "09:00 a 21:00hs", 2500, 200),
    new Membresia (03, "Funcional", "19:00hs", 2000, 20),
    new Membresia (04, "Jumping", "18:00hs", 2500, 10),
]
let membresiaFilter = membresias.find(item => item.nombre === nombre);
let pantalonFilter = pantalon.find(item => item.nombre === nombre);
let camperaFilter = campera.find(item => item.nombre === nombre);
let remeraFilter = remera.find(item => item.nombre === nombre);
let creatinaFilter = creatina.find(item => item.nombre === nombre);
let proteinaFilter = proteina.find(item => item.nombre === nombre);
let preworkFilter = prework.find(item => item.nombre === nombre);



