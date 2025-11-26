/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
let convertirUnidades = (unidad, valor) => {
    let metro, pie, pulgada, yarda;

    console.log(valor);
    console.log(isNaN(valor))

    if(valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)) {
        alert("El valor ingresaod no es un numero valido")
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";
    } else {
        if(unidad=="unid_metro") {
            metro = valor
            pie = 3.28*metro
            pulgada = 39.37*metro
            yarda = 1.0936*metro
        } else if(unidad=="unid_pie") {
            pie = valor
            metro = 0.3048*pie
            pulgada = 12*pie
            yarda = 0.3333*pie
        } else if(unidad=="unid_pulgada") {
            pulgada = valor
            metro = 0.0254*pulgada
            pie = 0.0833*pulgada
            yarda = 0.0277*pulgada
        } else if(unidad=="unid_yarda") {
            yarda = valor
            metro = 0.9144*yarda
            pie = 3*yarda
            pulgada = 36*yarda
        }
    }

    document.getElementById("metro").value = Number(metro).toFixed(2)
    document.getElementById("pie").value = Math.round(pie*100)/100
    document.getElementById("pulgada").value = Number(pulgada).toFixed(2)
    document.getElementById("yarda").value = Number(yarda).toFixed(2)
}

/**
 * Permite convertir unidades entre grados y radianes.
 * @method convertirGR Convertir Unidaes
 * @param {String} id - Id de la unidad ingresada: grados o radianes
 * @param {Int} valor - valor numerico ingresado por le usuarios (puede ser con coma)
 */
let convertirGR = (id, value) => {
    let cantGrados, cantRadianes;
    if(id=="grados") {
        cantGrados = value;
        cantRadianes = cantGrados*Math.PI/180
        document.getElementById("radianes").value = cantRadianes
    } else {
        cantRadianes = value;
        cantGrados = cantRadianes*180/Math.PI
        document.getElementById("grados").value = cantGrados
    }
}

/**
 * Permite mostrar o oculatar un elemento div
 * @method mostrarOcultar Modificar css
 * @param {String} value - Valor del radio button seleccionado
 */
let mostrarOcultar = (value) => {
    const show = value == "val_mostrar" ? "block" : "none";  
    document.getElementsByName("unDiv")[0].style.display = show;
}


/* Operaciones matematicas */
let sumar = () => {
    console.log("sumar")
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;

    if(isNaN(sum1) || isNaN(sum2)) {
        alert("Una de las variables ingresadas no es un número")
        document.getElementById("totalS").value = ""
    } else {
        document.getElementById("totalS").value = Number(sum1) + Number(sum2)
    }
}

let restar = () => {
    console.log("restar")
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;

    if(isNaN(res1) || isNaN(res2)) {
        alert("Una de las variables ingresadas no es un número")
        document.getElementById("totalR").value = ""
    } else {
        document.getElementById("totalR").value = res1 - res2;
    }
}

let multiplicar = () => {
    console.log("multiplicar")
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;

    if(isNaN(mul1) || isNaN(mul2)) {
        alert("Una de las variables ingresadas no es un número")
        document.getElementById("totalM").value = ""
    } else {
        document.getElementById("totalM").value = mul1 * mul2;
    }
}

let dividir = () => {
    console.log("dividir")
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;

    if(isNaN(div1) || isNaN(div2)) {
        alert("Una de las variables ingresadas no es un número")
        document.getElementById("totalS").value = ""
    } else if(div2==0) {
        alert("El denominador no puede ser 0")
        document.getElementById("numd2").value = ""
    } else {
        document.getElementById("totalD").value = div1 / div2
    }
}