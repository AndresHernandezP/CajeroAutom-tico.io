let saldoMali = 200
let saldoGera = 290
let saldoMaui = 77
let saldoJonathan = 115
let saldoAmador = 340
let saldoGustavo = 620


const maliCorrecta = 1919
const geraCorrecta = 8273
const mauiCorrecta = 9832
const jonathanCorrecta = 2819
const amadorCorrecta = 3451
const gustavoCorrecta = 7731

/* Funciones para elegir al usuario */
function apretarBoton() {
    document.getElementById("cuentas").innerHTML = document.getElementById("buenDia").innerHTML
}

function displayMali() {
    document.getElementById("contraseñaMali").style.display = "flex";
}

function displayGera() {
    document.getElementById("contraseñaGera").style.display = "flex";
}

function displayMaui() {
    document.getElementById("contraseñaMaui").style.display = "flex";
}

function displayJonathan() {
    document.getElementById("contraseñaJonathan").style.display = "flex";
}

function displayAmador() {
    document.getElementById("contraseñaAmador").style.display = "flex";
}

function displayGustavo() {
    document.getElementById("contraseñaGustavo").style.display = "flex";
}



/* Funciones para validar las contraseñas */


function validarContraseñaMali() {
    let maliInput = document.getElementById("maliInput").value;
    if (maliCorrecta == maliInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaMali").innerHTML = document.getElementById("movimientosMali").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayMali2() {
            document.getElementById("contraseñaMali2").style.display = "flex";
        }
        displayMali2
        document.getElementById("contraseñaMali").innerHTML = document.getElementById("contraseñaMali2").innerHTML
        function dosOportunidades() {
            document.getElementById("dosOportunidades").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("dosOportunidades").innerHTML
    }
}




function validarContraseñaGera() {
    let geraInput = document.getElementById("geraInput").value;
    if (geraCorrecta == geraInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaGera").innerHTML = document.getElementById("movimientosGera").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayGera2() {
            document.getElementById("contraseñaGera2").style.display = "flex";
        }
        displayGera2
        document.getElementById("contraseñaGera").innerHTML = document.getElementById("contraseñaGera2").innerHTML
        function dosOportunidades() {
            document.getElementById("dosOportunidades").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("dosOportunidades").innerHTML
    }
}



function validarContraseñaMaui() {
    let mauiInput = document.getElementById("mauiInput").value;
    if (mauiCorrecta == mauiInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaMaui").innerHTML = document.getElementById("movimientosMaui").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayMaui2() {
            document.getElementById("contraseñaMaui2").style.display = "flex";
        }
        displayMaui2
        document.getElementById("contraseñaMaui").innerHTML = document.getElementById("contraseñaMaui2").innerHTML
        function dosOportunidades() {
            document.getElementById("dosOportunidades").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("dosOportunidades").innerHTML
    }
}





function validarContraseñaJonathan() {
    let jonathanInput = document.getElementById("jonathanInput").value
    if (jonathanCorrecta == jonathanInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("movimientosJonathan").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayJonathan2() {
            document.getElementById("contraseñaJonathan2").style.display = "flex";
        }
        displayJonathan2
        document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("contraseñaJonathan2").innerHTML
        function dosOportunidades() {
            document.getElementById("dosOportunidades").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("dosOportunidades").innerHTML
    }
}

function validarContraseñaAmador() {
    let amadorInput = document.getElementById("amadorInput").value
    if (amadorCorrecta == amadorInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaAmador").innerHTML = document.getElementById("movimientosAmador").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayAmador2() {
            document.getElementById("contraseñaAmador2").style.display = "flex";
        }
        displayAmador2
        document.getElementById("contraseñaAmador").innerHTML = document.getElementById("contraseñaAmador2").innerHTML
        function dosOportunidades() {
            document.getElementById("dosOportunidades").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("dosOportunidades").innerHTML
    }
}


function validarContraseñaGustavo() {
    let gustavoInput = document.getElementById("gustavoInput").value
    if (gustavoCorrecta == gustavoInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("movimientosGustavo").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayGustavo2() {
            document.getElementById("contraseñaGustavo2").style.display = "flex";
        }
        displayGustavo2
        document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("contraseñaGustavo2").innerHTML
        function dosOportunidades() {
            document.getElementById("dosOportunidades").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("dosOportunidades").innerHTML
    }
}

/* unciones para la validacion de la segunda contraseña */


function validarContraseñaMali2() {
    let maliInput = document.getElementById("maliInput2").value;
    if (maliCorrecta == maliInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaMali").innerHTML = document.getElementById("movimientosMali").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayMali3() {
            document.getElementById("contraseñaMali3").style.display = "flex";
        }
        displayMali3
        document.getElementById("contraseñaMali").innerHTML = document.getElementById("contraseñaMali3").innerHTML
        function unaOportunidad() {
            document.getElementById("unaOportunidad").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("unaOportunidad").innerHTML
    }
}


function validarContraseñaGera2() {
    let geraInput = document.getElementById("geraInput2").value;
    if (geraCorrecta == geraInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaGera").innerHTML = document.getElementById("movimientosGera").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayGera3() {
            document.getElementById("contraseñaGera3").style.display = "flex";
        }
        displayGera3
        document.getElementById("contraseñaGera").innerHTML = document.getElementById("contraseñaGera3").innerHTML
        function unaOportunidad() {
            document.getElementById("unaOportunidad").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("unaOportunidad").innerHTML
    }
}


function validarContraseñaMaui2() {
    let mauiInput = document.getElementById("mauiInput2").value;
    if (mauiCorrecta == mauiInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaMaui").innerHTML = document.getElementById("movimientosMaui").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayMaui3() {
            document.getElementById("contraseñaMaui3").style.display = "flex";
        }
        displayMaui3
        document.getElementById("contraseñaMaui").innerHTML = document.getElementById("contraseñaMaui3").innerHTML
        function unaOportunidad() {
            document.getElementById("unaOportunidad").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("unaOportunidad").innerHTML
    }
}


function validarContraseñaJonathan2() {
    let jonathanInput = document.getElementById("jonathanInput2").value
    if (jonathanCorrecta == jonathanInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("movimientosJonathan").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayJonathan3() {
            document.getElementById("contraseñaJonathan3").style.display = "flex";
        }
        displayJonathan3
        document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("contraseñaJonathan3").innerHTML
        function unaOportunidad() {
            document.getElementById("unaOportunidad").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("unaOportunidad").innerHTML
    }
}


function validarContraseñaAmador2() {
    let amadorInput = document.getElementById("amadorInput2").value
    if (amadorCorrecta == amadorInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaAmador").innerHTML = document.getElementById("movimientosAmador").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayAmador3() {
            document.getElementById("contraseñaAmador3").style.display = "flex";
        }
        displayAmador3
        document.getElementById("contraseñaAmador").innerHTML = document.getElementById("contraseñaAmador3").innerHTML
        function unaOportunidad() {
            document.getElementById("unaOportunidad").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("unaOportunidad").innerHTML
    }
}

function validarContraseñaGustavo2() {
    let gustavoInput = document.getElementById("gustavoInput2").value
    if (gustavoCorrecta == gustavoInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("movimientosGustavo").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta intente de nuevo")
        function displayGustavo3() {
            document.getElementById("contraseñaGustavo3").style.display = "flex";
        }
        displayGustavo3
        document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("contraseñaGustavo3").innerHTML
        function unaOportunidad() {
            document.getElementById("unaOportunidad").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("unaOportunidad").innerHTML
    }
}


/* Funciones para validar la tercer pagina de contraseñas */

function validarContraseñaMali3() {
    let maliInput = document.getElementById("maliInput3").value;
    if (maliCorrecta == maliInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaMali").innerHTML = document.getElementById("movimientosMali").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("contraseña incorrecta")
        function demasiadosIntentos() {
            document.getElementById("demasiadosIntentos").innerHTML.style.display = "flex";
            document.getElementById("contacte").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("demasiadosIntentos").innerHTML
        document.getElementById("contraseñaMali").innerHTML = document.getElementById("contacte").innerHTML
    }

}




function validarContraseñaGera3() {
    let geraInput = document.getElementById("geraInput3").value;
    if (geraCorrecta == geraInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaGera").innerHTML = document.getElementById("movimientosGera").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta")
        function demasiadosIntentos() {
            document.getElementById("demasiadosIntentos").innerHTML.style.display = "flex";
            document.getElementById("contacte").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("demasiadosIntentos").innerHTML
        document.getElementById("contraseñaGera").innerHTML = document.getElementById("contacte").innerHTML
    }
}


function validarContraseñaMaui3() {
    let mauiInput = document.getElementById("mauiInput3").value;
    if (mauiCorrecta == mauiInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaMaui").innerHTML = document.getElementById("movimientosMaui").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("Contraseña incorrecta")
        function demasiadosIntentos() {
            document.getElementById("demasiadosIntentos").innerHTML.style.display = "flex";
            document.getElementById("contacte").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("demasiadosIntentos").innerHTML
        document.getElementById("contraseñaMaui").innerHTML = document.getElementById("contacte").innerHTML
    }
}





function validarContraseñaJonathan3() {
    let jonathanInput = document.getElementById("jonathanInput3").value
    if (jonathanCorrecta == jonathanInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("movimientosJonathan").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("contraseña incorrecta")
        function demasiadosIntentos() {
            document.getElementById("demasiadosIntentos").innerHTML.style.display = "flex";
            document.getElementById("contacte").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("demasiadosIntentos").innerHTML
        document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("contacte").innerHTML
    }
}



function validarContraseñaAmador3() {
    let amadorInput = document.getElementById("amadorInput3").value
    if (amadorCorrecta == amadorInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaAmador").innerHTML = document.getElementById("movimientosAmador").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("contraeña incorrecta ")
        function demasiadosIntentos() {
            document.getElementById("demasiadosIntentos").innerHTML.style.display = "flex";
            document.getElementById("contacte").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("demasiadosIntentos").innerHTML
        document.getElementById("contraseñaAmador").innerHTML = document.getElementById("contacte").innerHTML
    }
}


function validarContraseñaGustavo3() {
    let gustavoInput = document.getElementById("gustavoInput3").value
    if (gustavoCorrecta == gustavoInput) {
        function displayMovimientos() {
            document.getElementById("movimientos").style.display = "flex";
            document.getElementById("queDesea").innerHTML.style.display = "flex";
        }
        displayMovimientos
        document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("movimientosGustavo").innerHTML
        document.getElementById("cuentas").innerHTML = document.getElementById("queDesea").innerHTML
    }
    else {
        alert("contraeña incorrecta")
        function demasiadosIntentos() {
            document.getElementById("demasiadosIntentos").innerHTML.style.display = "flex";
            document.getElementById("contacte").innerHTML.style.display = "flex";
        }
        document.getElementById("cuentas").innerHTML = document.getElementById("demasiadosIntentos").innerHTML
        document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("contacte").innerHTML
    }
}



/* funciones para el boton de regreso */

function regresoMali() {
    document.getElementById("contraseñaMali").innerHTML = document.getElementById("movimientosMali").innerHTML
}

function regresoGera() {
    document.getElementById("contraseñaGera").innerHTML = document.getElementById("movimientosGera").innerHTML
}
function regresoMaui() {
    document.getElementById("contraseñaMaui").innerHTML = document.getElementById("movimientosMaui").innerHTML
}
function regresoJonathan() {
    document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("movimientosJonathan").innerHTML
}
function regresoAmador() {
    document.getElementById("contraseñaAmador").innerHTML = document.getElementById("movimientosAmador").innerHTML
}
function regresoGustavo() {
    document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("movimientosGustavo").innerHTML
}


/* funciones para validar las consultas */

function consultarSaldoMali() {
    document.getElementById("contraseñaMali").innerHTML = document.getElementById("botonRegresoMali").innerHTML
    document.getElementById("contraseñaMali").innerHTML += `<div style="font-size: 40px; width:100%; color: white"> Su saldo total es de ${saldoMali} pesos </div> `
    document.getElementById("cuentas").innerHTML = ""
}

function consultarSaldoGera() {
    document.getElementById("contraseñaGera").innerHTML = document.getElementById("botonRegresoGera").innerHTML
    document.getElementById("contraseñaGera").innerHTML += `<div style="font-size: 40px; width:100%; color: white"> Su saldo total es de ${saldoGera} pesos </div> `
    document.getElementById("cuentas").innerHTML = ""
}

function consultarSaldoMaui() {
    document.getElementById("contraseñaMaui").innerHTML = document.getElementById("botonRegresoMaui").innerHTML
    document.getElementById("contraseñaMaui").innerHTML += `<div style="font-size: 40px; width:100%; color: white"> Su saldo total es de ${saldoMaui} pesos </div> `
    document.getElementById("cuentas").innerHTML = ""
}

function consultarSaldoJonathan() {
    document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("botonRegresoJonathan").innerHTML
    document.getElementById("contraseñaJonathan").innerHTML += `<div style="font-size: 40px; width:100%; color: white"> Su saldo total es de ${saldoJonathan} pesos </div> `
    document.getElementById("cuentas").innerHTML = ""
}

function consultarSaldoAmador() {
    document.getElementById("contraseñaAmador").innerHTML = document.getElementById("botonRegresoAmador").innerHTML
    document.getElementById("contraseñaAmador").innerHTML += `<div style="font-size: 40px; width:100%; color: white"> Su saldo total es de ${saldoAmador} pesos </div> `
    document.getElementById("cuentas").innerHTML = ""
}

function consultarSaldoGustavo() {
    document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("botonRegresoGustavo").innerHTML
    document.getElementById("contraseñaGustavo").innerHTML += `<div style="font-size: 40px; width:100%; color: white"> Su saldo total es de ${saldoGustavo} pesos </div> `
    document.getElementById("cuentas").innerHTML = ""
}


/* funciones para el boton de retiros */

function retirarMontoMali() {
    document.getElementById("contraseñaMali").innerHTML = document.getElementById("retirosMali").innerHTML
}

function retirarMali() {
    let retiroMali = document.getElementById("retiroMali").value
    console.log(retiroMali)
    console.log(saldoMali)
    if (retiroMali > (saldoMali - 10)) {
        alert("no cuenta con el saldo suficiente")
    }
    else {
        saldoMali -= retiroMali
        alert(`se han retirado ${retiroMali} pesos de tu saldo`)
    }
}

function retirarMontoGera() {
    document.getElementById("contraseñaGera").innerHTML = document.getElementById("retirosGera").innerHTML
}

function retirarGera() {
    let retiroGera = document.getElementById("retiroGera").value
    if (retiroGera > (saldoGera - 10)) {
        alert("no cuenta con el saldo suficiente")
    }
    else {
        saldoGera -= retiroGera
        alert(`se han retirado ${retiroGera} pesos de tu saldo`)
    }
}

function retirarMontoMaui() {
    document.getElementById("contraseñaMaui").innerHTML = document.getElementById("retirosMaui").innerHTML
}

function retirarMaui() {
    let retiroMaui = document.getElementById("retiroMaui").value
    if (retiroMaui > (saldoMaui - 10)) {
        alert("no cuenta con el saldo suficiente")
    }
    else {
        saldoMaui -= retiroMaui
        alert(`se han retirado ${retiroMaui} pesos de tu saldo`)
    }
}


function retirarMontoJonathan() {
    document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("retirosJonathan").innerHTML
}

function retirarJonathan() {
    let retiroJonathan = document.getElementById("retiroJonathan").value
    if (retirosJonathan > (saldoJonathan - 10)) {
        alert("no cuenta con el saldo suficiente")
    }
    else {
        saldoJonathan -= retiroJonathan
        alert(`se han retirado ${retiroJonathan} pesos de tu saldo`)
    }
}



function retirarMontoAmador() {
    document.getElementById("contraseñaAmador").innerHTML = document.getElementById("retirosAmador").innerHTML
}

function retirarAmador() {
    let retiroAmador = document.getElementById("retiroAmador").value
    if (retiroAmador > (saldoAmador - 10)) {
        alert("no cuenta con el saldo suficiente")
    }
    else {
        saldoAmador -= retiroAmador
        alert(`se han retirado ${retiroAmador} pesos de tu saldo`)
    }
}


function retirarMontoGustavo() {
    document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("retirosGustavo").innerHTML
}

function retirarGustavo() {
    let retiroGustavo = document.getElementById("retiroGustavo").value
    if (retiroGustavo > (saldoGustavo - 10)) {
        alert("no cuenta con el saldo suficiente")
    }
    else {
        saldoGustavo -= retiroGustavo
        alert(`se han retirado ${retiroGustavo}pesos de tu saldo`)
    }
}






/* funciones para ingresar saldo */





function ingresarMontoMali() {
    document.getElementById("contraseñaMali").innerHTML = document.getElementById("ingresosMali").innerHTML
}

function ingresarMali() {
    let ingresoMali = document.getElementById("ingresoMali").value
    console.log(ingresoMali)
    console.log(saldoMali)
    console.log(typeof(ingresoMali))
    if ((Number(ingresoMali) + Number(saldoMali))>990 ){
        alert("no puede ingresar tanto")
    }
    else {
        saldoMali += Number(ingresoMali)
        alert(`se han añadido ${ingresoMali} pesos de tu saldo`)
    }
}

function ingresarMontoGera() {
    document.getElementById("contraseñaGera").innerHTML = document.getElementById("ingresosGera").innerHTML
}

function ingresarGera() {
    let ingresoGera = document.getElementById("ingresoGera").value
    if ((Number(ingresoGera) + Number(saldoGera))>990 ){
        alert("no puede ingresar tanto")
    }
    else {
        saldoGera += Number(ingresoGera)
        alert(`se han añadido ${ingresoGera} pesos de tu saldo`)
    }
}


function ingresarMontoMaui() {
    document.getElementById("contraseñaMaui").innerHTML = document.getElementById("ingresosMaui").innerHTML
}

function ingresarMaui() {
    let ingresoMaui = document.getElementById("ingresoMaui").value
    if ((Number(ingresoMaui) + Number(saldoMaui))>990 ){
        alert("no puede ingresar tanto")
    }
    else {
        saldoMaui += Number(ingresoMaui)
        alert(`se han añadido ${ingresoMaui} pesos de tu saldo`)
    }
}


function ingresarMontoJonathan() {
    document.getElementById("contraseñaJonathan").innerHTML = document.getElementById("ingresosJonathan").innerHTML
}

function ingresarJonathan() {
    let ingresoJonathan = document.getElementById("ingresoJonathan").value
    if ((Number(ingresoJonathan) + Number(saldoJonathan))>990 ){
        alert("no puede ingresar tanto")
    }
    else {
        saldoJonathan += Number(ingresoJonathan)
        alert(`se han añadido ${ingresoJonathan} pesos de tu saldo`)
    }
}

function ingresarMontoAmador() {
    document.getElementById("contraseñaAmador").innerHTML = document.getElementById("ingresosAmador").innerHTML
}

function ingresarAmador() {
    let ingresoAmador = document.getElementById("ingresoAmador").value
    if ((Number(ingresoAmador) + Number(saldoAmador))>990 ){
        alert("no puede ingresar tanto")
    }
    else {
        saldoAmador += Number(ingresoAmador)
        alert(`se han añadido ${ingresoAmador} pesos de tu saldo`)
    }
}

function ingresarMontoGustavo() {
    document.getElementById("contraseñaGustavo").innerHTML = document.getElementById("ingresosGustavo").innerHTML
}

function ingresarGustavo() {
    let ingresoGustavo = document.getElementById("ingresoGustavo").value
    if ((Number(ingresoGustavo) + Number(saldoGustavo))>990 ){
        alert("no puede ingresar tanto")
    }
    else {
        saldoGustavo += Number(ingresoGustavo)
        alert(`se han añadido ${ingresoGustavo} pesos de tu saldo`)
    }
}


