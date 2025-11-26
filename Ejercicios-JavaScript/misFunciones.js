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
