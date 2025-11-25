const productos = [
    {
        nombre: "Cabezal Sparring",
        description: "Cabezal de Sparring.",
        categoria: "Protectores",
        marca: "Gran Marc",
        talle: ["1", "2", "3"],
        precio: 35000,
        web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
        imagen: "cabezal-cerrado.webp",
    },
    {
        nombre: "Dobok Dan",
        description: "Bobok aprobado para torneos internacionales.",
        categoria: "Dobok",
        marca: "Daedo",
        talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
        precio: 115000,
        web: "https://www.daedo.com/products/taitf-10813",
        imagen: "dobok.webp",
    },
    {
        nombre: "Escudo de Potencia",
        description: "Escudo de potencia para entrenamientos.",
        categoria: "Entrenamiento",
        marca: "Gran Marc",
        talle: ["s/talle"],
        precio: 51700,
        web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
        imagen: "escudo-potencia.webp",
    },
    {
        nombre: "Par de focos redondos",
        description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
        categoria: "Entrenamiento",
        marca: "Gran Marc",
        talle: ["s/talle"],
        precio: 15000,
        web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
        imagen: "foco-con-dedos.webp",
    },
    {
        nombre: "Guantes 10 onzas",
        description:
        "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
        categoria: "Protectores",
        marca: "Daedo",
        talle: ["s/talle"],
        precio: 35000,
        web: "https://www.daedo.com/products/pritf-2020",
        imagen: "protectores-manos.webp",
    },
    {
        nombre: "Protectores Pie",
        description: "Protectores de Pie habilitados para torneos internacionales",
        categoria: "Protectores",
        marca: "Daedo",
        talle: ["XXS", "XS", "S", "M", "L", "XL"],
        precio: 35000,
        web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
        imagen: "protectores-pie.webp",
    },
];

let mostrarDetalles = (id) => {
    document.getElementById("detalles").style.display = "block";
    document.getElementById("detalles__titulo").innerText = productos[id].nombre;
    document.getElementById("detalles__descripcion").innerText = productos[id].description;
    document.getElementById("detalles__precio").innerText = `$${productos[id].precio}`;
}

let cerrarModal = () => {
    document.getElementById("detalles").style.display = "none";
}

let mostrarCatalogo = (prod = productos) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `
        <div>
            <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" />
            <h3>${prod.nombre}</h3>
            <p>${formatPrice(prod.precio)}</p>
            <button type="button" onclick="mostrarDetalles(${id})">Ver Detalles</button>
            <button type="button" onclick="agregarCarrito(${id})">Agregar al carrito</button>
        </div>
        `;
    })

    document.getElementById("lista-productos").innerHTML = contenido;
}

let agregarCarrito = (id) => {
    let listCarrito;
    const listaInicial = JSON.parse(localStorage.getItem("carrito"));

    if(listaInicial==null) {
        listCarrito = [];
    } else {
        listCarrito = listaInicial;
    }

    listCarrito.push(id);
    localStorage.setItem("carrito", JSON.stringify(listCarrito));
} 

let mostrarListaCarrito = () => {
    let contenido = "";
    let total = 0;

    const carrito = JSON.parse(localStorage.getItem("carrito"))

    if(carrito!=null) {
        const listProd = []
        const listCant = []

        carrito.forEach((num) => {
            if(!listProd.includes(num)) {
                listProd.push(num)
                listCant.push(1)
            } else {
                const index = listProd.indexOf(num)
                listCant[index] += 1
            }
        })

        listProd.forEach((num, id) => {
            contenido += `
            <div>
                <h3>${productos[num].nombre}</h3>
                <p>${formatPrice(productos[num].precio*listCant[id])}</p>
                <p>Cantidad: ${listCant[id]}</p>
                <button type="button" onclick="eliminarProducto(${id})">Eliminar producto</button>
            </div>
            `;
            total += productos[num].precio*listCant[id]
        })

        contenido += `<button type=button onclick="vaciarCarrito()"> Vaciar carrito</button>`
        contenido += `<p>Total: ${formatPrice(total)}</p>`

        document.getElementById("carrito").innerHTML = contenido;
    }
}

let vaciarCarrito = () => {
    localStorage.removeItem("carrito")
    window.location.reload()
}

let eliminarProducto = (id) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")); 

    carrito.splice(id, 1);
    
    if(carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    } else {
        localStorage.removeItem("carrito")
    }

    window.location.reload()
}

let filtrarProducto = () => {
    //Mejor y optimizar esta funcion (4 funciones) - mas atomicas

    let searchWord = document.getElementById("search").value;
    let min = document.getElementById("price-min").value;
    let max = document.getElementById("price-max").value;
    let prot = document.getElementById("protectores").checked;
    let entr = document.getElementById("entrenamiento").checked;
    let dob = document.getElementById("dobok").checked;
    let marca = document.getElementById("marca").value;

    let newLista = productos;

    if(searchWord) {
        newLista = newLista.filter(
            (prod) => 
                prod.nombre.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()) ||
                prod.description.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        );
    }
    
    if(min) {
        newLista = newLista.filter((prod) => prod.precio >= Number(min))
    }
    if(max) {
        newLista = newLista.filter((prod) => prod.precio <= Number(min))
    }

    let category = []
    prot ? category.push("Protectores") : ""
    entr ? category.push("Entrenamiento") : ""
    dob ? category.push("Dobok") : ""

    if(category.length > 0) {
        newLista = newLista.filter(
            (prod) =>
                category.includes(prod.categoria)
        )
    }

    if (marca != "Todas") {
        newLista = newLista.filter(
            (prod) => prod.marca.toLowerCase().trim() == marca.toLowerCase().trim()
        );
    }

    mostrarCatalogo(newLista)
}

let formatPrice = (price) => {
    const numberFormat = new Intl.NumberFormat("es-AR", {
        currency: "ARS",
        style: "currency"
    })
    return numberFormat.format(price)
}

let countProds = () => {
    const carrito = localStorage.getItem("carrito")
    
    if (carrito != null > 0) {
        let showNumber = document.getElementById("cant-prod").innerText = JSON.parse(carrito).length;
    }
}

let orderCatalog = (order) => {
    //Optimizar la funcion
    let newOrder;

    switch(order) {
        case "menor": newOrder = productos.sort((a,b) => a.precio - b.precio); break;
        case "mayor": newOrder = productos.sort((a,b) => b.precio - a.precio); break;
        case "a-z": newOrder = productos.sort((a,b) => a.nombre.localeCompare(b.nombre)); break;
        case "z-a": newOrder = productos.sort((a,b) => b.nombre.localeCompare(a.nombre)); break;
        default: newOrder = productos.sort((a,b) => a.precio - b.precio); break;
    }

    mostrarCatalogo(newOrder)
}