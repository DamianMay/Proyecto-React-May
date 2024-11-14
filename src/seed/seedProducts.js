import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
    {
        id: 1,
        category: "Cafe",
        name: "Café Arabico 500gr",
        description: "Granos de café 100% Arabica de origen Colombia, con un sabor suave y aromático.",
        price: 25000,
        image: ["/Proyecto-React-May/img/cafe-arabico.webp"],
        stock: 8
    },
    {
        id: 2,
        category: "Cafe",
        name: "Café Italiano 500 gr",
        description: "Café Robusta de origen Vietnam, con un sabor fuerte y mucho cuerpo.",
        price: 23500,
        image: ["/Proyecto-React-May/img/cafe-italiano.webp"],
        stock: 8
    },
    {
        id: 3,
        category: "Cafe",
        name: "Café Blend Especial 250 gr",
        description: "Mezcla de granos de Arabica y Robusta, ideal para quienes buscan un equilibrio entre suavidad e intensidad.",
        price: 18499,
        image: ["/Proyecto-React-May/img/cafe-blend-especial.webp"],
        stock: 8
    },
    {
        id: 4,
        category: "Cafe",
        name: "Café Descafeinado 250 gr",
        description: "Café descafeinado de origen Brasil, conserva el sabor del café sin el contenido de cafeína.",
        price: 29899,
        image: ["/Proyecto-React-May/img/cafe-descafeinado.webp"],
        stock: 8
    },
    {
        id: 5,
        category: "Maquina-de-Cafe",
        name: "Cafetera Express Barista Pro",
        description: "Máquina de café automática con control de temperatura, ideal para preparar un espresso perfecto.",
        price: 245000,
        image: ["/Proyecto-React-May/img/cafetera-express-barista-pro.webp","/Proyecto-React-May/img/cafetera-express-barista-pro-1.webp"],
        stock: 8
    },
    {
        id: 6,
        category: "Maquina-de-Cafe",
        name: "Cafetera de Prensa Francesa",
        description: "Clásica prensa francesa de vidrio y acero inoxidable, perfecta para extraer todo el sabor del café.",
        price: 89900,
        image: ["/Proyecto-React-May/img/cafetera-de-prensa-francesa.webp","/Proyecto-React-May/img/cafetera-de-prensa-francesa-1.webp"],
        stock: 8
    },
    {
        id: 7,
        category: "Maquina-de-Cafe",
        name: "Cafetera Italiana Moka",
        description: "Cafetera Moka de aluminio, ideal para preparar un espresso al estilo tradicional italiano.",
        price: 110000,
        image: ["/Proyecto-React-May/img/cafetera-italiana-moka.webp","/Proyecto-React-May/img/cafetera-italiana-moka-1.webp"],
        stock: 8
    },
    {
        id: 8,
        category: "Maquina-de-Cafe",
        name: "Cafetera Goteo Automática",
        description: "Cafetra de goteo con capacidad de 1.5 litros, perfecta para preparar café para toda la familia.",
        price: 189900,
        image: ["/Proyecto-React-May/img/cafetera-goteo-automatica.webp","/Proyecto-React-May/img/cafetera-goteo-automatica-1.webp"],
        stock: 8
    },
    {
        id: 9,
        category: "Equipamientos",
        name: "Molinillo de Café Manual",
        description: "Molinillo manual de acero inoxidable, ideal para conservar el sabor de los granos de café.",
        price: 45000,
        image: ["/Proyecto-React-May/img/molinillo-de-cafe-manual.webp"],
        stock: 8
    },
    {
        id: 10,
        category: "Equipamientos",
        name: "Espumador de Leche",
        description: "Espumador de leche eléctrico, perfecto para preparar capuchinos y lattes.",
        price: 49990,
        image: ["/Proyecto-React-May/img/espumador-de-leche.webp"],
        stock: 8
    },
    {
        id: 11,
        category: "Equipamientos",
        name: "Jarra para Latte Art",
        description: "Jarra de acero inoxidable diseñada para crear latte art con precisión.",
        price: 36900,
        image: ["/Proyecto-React-May/img/jarra-para-latte-art.webp"],
        stock: 8
    },
    {
        id: 12,
        category: "Equipamientos",
        name: "Filtro de Café Reutilizable",
        description: "Filtro de acero inoxidable reutilizable, compatible con cafeteras de goteo estándar.",
        price: 17999,
        image: ["/Proyecto-React-May/img/filtro-de-cafe-reutilizable.webp"],
        stock: 8
    }
];


const seedProducts = () => {
    const productsRef = collection (db, "products")
    productos.map(( {id, ...dataProduct }) =>{
        addDoc(productsRef, dataProduct)
    })

    return
}

seedProducts()

