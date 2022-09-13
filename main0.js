const din = document.getElementById('dinamico');
const ids = din.children;

// Al recargar la página esto reestablecera el tamaño y vaciara las casillas de texto y adaptara el menu lateral en caso de tener el modo singular activado
window.onload = () => {

    document.getElementById('per0').value = '';
    document.getElementById('ding0').value = '';
    document.getElementById('desp0').value = '';
    document.getElementById('per0').style.height = '20px';
    document.getElementById('ding0').style.height = '20px';
    document.getElementById('desp0').style.height = '20px';
    document.getElementById('mezclarA0').setAttribute('disabled', "");
    document.getElementById('mezclarB0').setAttribute('disabled', "");

    if (document.getElementById('cambioIdioma').checked === true) {
        document.getElementById('csIngLab').style.gridColumn = '1 / label 2';
        document.getElementById('csEspLab').style.display = 'none';
        document.getElementById('csIngLab').innerHTML = 'Cargar subtitulos';
        document.getElementById('modoIdiomaCambioIcono').innerHTML = 'toggle_off';
        document.getElementById('mdi-texto-2').innerHTML = 'Modo actual: Singular';
        ids[0].children[1].placeholder = 'Diálogo';
        ids[0].children[2].style.visibility = 'hidden';
        ids[0].children[8].innerHTML = 'Mezclar diálogos';
        ids[0].children[8].style.left = '27.5%';
        ids[0].children[9].style.visibility = 'hidden';
    }

    switch (true) {
        case document.getElementById('filtroNombresBoton0').checked:
            bandera.setAttribute("src", "bandera_la.svg");
            break
        
        case document.getElementById('filtroNombresBoton1').checked:
            bandera.setAttribute("src", "bandera_en.svg");
            break
        
        case document.getElementById('filtroNombresBoton2').checked:
            bandera.setAttribute("src", "bandera_es.svg");
            break
        }

}

// Función para crear nueva casilla
// tipoDeNuevaCasilla tiene dos opciones, 'manual' y 'auto'
let nuevaCasilla = tipoDeNuevaCasilla => {
    let cambioIdioma = document.getElementById('cambioIdioma');
    let div = document.createElement('div');

    switch (cambioIdioma.checked) {
        case false:
            div.innerHTML =`<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo en inglés"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español"></textarea><br>
<button class="botonagregar" onclick="nuevaCasilla('manual')">Agregar</button><label></label><button class="botoneliminar" onclick="elim(this)">Eliminar</button><br>
<button class="mezclar0" id="" onclick="mezclarA(this)" disabled>Mezclar diálogos Inglés</button><button class="mezclar1" id="" onclick="mezclarB(this)" disabled>Mezclar diálogos Español</button>`;
            break

        case true:
        div.innerHTML =`<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español" style="visibility: hidden;"></textarea><br>
<button class="botonagregar" onclick="nuevaCasilla('manual')">Agregar</button><label></label><button class="botoneliminar" onclick="elim(this)">Eliminar</button><br>
<button class="mezclar0" id="" onclick="mezclarA(this)" style="left: 27.5%;">Mezclar diálogos</button><button class="mezclar1" id="" onclick="mezclarB(this)" style="visibility: hidden">Mezclar diálogos Español</button>`;
            break
    }

    if (tipoDeNuevaCasilla === 'manual') {
        let idGet = event.target.parentElement;
        let idValueGet = idGet.children[0].id.match(/\d+/);
        let idValue0 = parseInt(idValueGet);

        din.insertBefore(div, din.children[idValue0 + 1]);
        switch (din.childElementCount - 1) {
            case 1:
                recalcularIds()
                document.getElementById("mezclarA0").removeAttribute('disabled', "");
                document.getElementById("mezclarB0").removeAttribute('disabled', "");
                document.getElementById("mezclarA1").setAttribute('disabled', "");
                document.getElementById("mezclarB1").setAttribute('disabled', "");
                break

            case 2:
                recalcularIds()
                document.getElementById("mezclarA1").removeAttribute('disabled', "");
                document.getElementById("mezclarB1").removeAttribute('disabled', "");
                document.getElementById("mezclarA2").setAttribute('disabled', "");
                document.getElementById("mezclarB2").setAttribute('disabled', "");
                break

            default:
                recalcularIds()
                document.getElementById("mezclarA" + (idValue0 + 1)).removeAttribute('disabled', "");
                document.getElementById("mezclarB" + (idValue0 + 1)).removeAttribute('disabled', "");
                document.getElementById("mezclarA" + (din.childElementCount - 2)).removeAttribute('disabled', "");
                document.getElementById("mezclarB" + (din.childElementCount - 2)).removeAttribute('disabled', "");
                document.getElementById("mezclarA" + (din.childElementCount - 1)).setAttribute('disabled', "");
                document.getElementById("mezclarB" + (din.childElementCount - 1)).setAttribute('disabled', "");
                break
        }
        textarenaResAdapt('true')
    } else if (tipoDeNuevaCasilla === 'auto') {
        din.appendChild(div)
        recalcularIds()
    } else {
        console.log(`¡Error! Will has mejor tu trabajo que se te olvido definir para que vas a usar la funcion de "nuevaCasilla" en alguna parte de tu codigo.`)
    }
}

// Reacomodación de ids (gracias a Looper por ayudarme a solucionarlo)
let recalcularIds = () => {
    for (let i = 0; i < ids.length; i++) {
        ids[i].children[0].id = 'per' + i;
        ids[i].children[1].id = 'ding' + i;
        ids[i].children[2].id = 'desp' + i;
        ids[i].children[8].id = 'mezclarA' + i;
        ids[i].children[9].id = 'mezclarB' + i;
    }
    for (let i = 0; i < ids.length; i++) {
        let y = i + 1;
        ids[i].children[5].innerHTML = 'Línea número ' + y;
    }
};

// Función de elminar lineas y reducir el tamaño del textarea
let elim = (e) => {
    let dinTotal = din.childElementCount - 1;
    let idsel0 = event.target.parentElement;
    let idsel1 = idsel0.children[0].id.match(/\d+/);
    let divM = event.target.parentElement;
    if (dinTotal > 0 && idsel2 > 0 && idsel2 < dinTotal) {
        din.removeChild(divM);
        recalcularIds();
        textarenaResAdapt(false);
        document.getElementById("mezclarA" + (dinTotal - 1)).setAttribute('disabled', "");
        document.getElementById("mezclarB" + (dinTotal - 1)).setAttribute('disabled', "");
    }

    else if (dinTotal > 0 && idsel2 === 0) {
        din.removeChild(divM);
        recalcularIds();
        textarenaResAdapt(false)
    }

    else if (dinTotal > 0 && idsel2 === dinTotal) {
        din.removeChild(divM);
        document.getElementById("mezclarA" + (dinTotal - 1)).setAttribute('disabled', "");
        document.getElementById("mezclarB" + (dinTotal - 1)).setAttribute('disabled', "");
        textarenaResAdapt(false)
    }

    else {
        document.getElementById("per0").value = '';
        document.getElementById("ding0").value = '';
        document.getElementById("desp0").value = '';
    }
};

// Cambiar sección de menu lateral
{
    let ml1 = document.getElementById('menu-lateral-1');
    let ml2 = document.getElementById('menu-lateral-2');
    let ml3 = document.getElementById('menu-lateral-3');
    let ml4 = document.getElementById('menu-lateral-4');

    document.getElementById('menu-1').onclick = () => {
        ml1.style.display = "inline"
        ml2.style.display = "none"
        ml3.style.display = "none"
        ml4.style.display = "none"
    };

    document.getElementById('menu-2').onclick = () => {
        ml1.style.display = "none"
        ml2.style.display = "inline"
        ml3.style.display = "none"
        ml4.style.display = "none"
    };

    document.getElementById('menu-3').onclick = () => {
        ml1.style.display = "none"
        ml2.style.display = "none"
        ml3.style.display = "inline"
        ml4.style.display = "none"
    };

    document.getElementById('menu-4').onclick = () => {
        ml1.style.display = "none"
        ml2.style.display = "none"
        ml3.style.display = "none"
        ml4.style.display = "inline"
    };
}

// Deshabilita la tecla "Enter" dentro de los textarea y adapta el tamaño de los textarea dependiendo del texto
din.addEventListener("keydown", () => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
    
    let digitos0 = event.target.id.match(/\d+/);
    let digitos = parseInt(digitos0);
    switch (event.target.id) {
        case "per" + digitos:
            if (document.getElementById('per' + digitos).value.length <= 18) {
                document.getElementById('per' + digitos).style.height = '20px'
            }
            else if (document.getElementById('per' + digitos).value.length <= 32) {
                document.getElementById('per' + digitos).style.height = '30px'
            }
            else {
                document.getElementById('per' + digitos).style.height = 'auto'
                let arena0 = document.getElementById('per' + digitos).scrollHeight;
                document.getElementById('per' + digitos).style.height = (arena0 - 4) + 'px';
            }
            break

        case "ding" + digitos:
            if (document.getElementById('ding' + digitos).value.length <= 18) {
                document.getElementById('ding' + digitos).style.height = '20px'
            }
            else if (document.getElementById('ding' + digitos).value.length <= 32) {
                document.getElementById('ding' + digitos).style.height = '30px'
            }
            else {
                document.getElementById('ding' + digitos).style.height = 'auto'
                let arena0 = document.getElementById('ding' + digitos).scrollHeight;
                document.getElementById('ding' + digitos).style.height = (arena0 - 4) + 'px';
            }
            break

        case "desp" + digitos:
            if (document.getElementById('desp' + digitos).value.length <= 18) {
                document.getElementById('desp' + digitos).style.height = '20px'
            }
            else if (document.getElementById('desp' + digitos).value.length <= 32) {
                document.getElementById('desp' + digitos).style.height = '30px'
            }
            else {
                document.getElementById('desp' + digitos).style.height = 'auto'
                let arena0 = document.getElementById('desp' + digitos).scrollHeight;
                document.getElementById('desp' + digitos).style.height = (arena0 - 4) + 'px';
            }
            break
        }
    }
);

// Reacción en caso de precionar enter en una casilla y adaptar tamaño dependiendo del texto
din.addEventListener("keyup", (e) => {
    let digitos = event.target.id.match(/\d+/);
    let digitosFix = parseInt(digitos) + 1;
    let alturaRequerida = (e.target.scrollHeight) - 4;

    //Adapta el tamaño del textarea dependiendo del texto
    switch (event.target.id) {
            case "per" + digitos:
                document.getElementById("per" + digitos).style.height = '20px';
                document.getElementById("per" + digitos).style.height = (alturaRequerida) + 'px';
                break

            case "ding" + digitos:
                document.getElementById("ding" + digitos).style.height = '20px';
                document.getElementById("ding" + digitos).style.height = (alturaRequerida) + 'px';
                break

            case "desp" + digitos:
                document.getElementById("desp" + digitos).style.height = '20px';
                document.getElementById("desp" + digitos).style.height = (alturaRequerida) + 'px';
                break
    }
    
    if (e.keyCode === 13) {
    switch (cambioIdioma.checked) {
        case false:
        switch (event.target.id) {
            case "per" + digitos:
                document.getElementById("ding" + digitos).focus();
                break

            case "ding" + digitos:
                document.getElementById("desp" + digitos).focus();
                break

            case "desp" + digitos:
                if ("desp" + digitos === "desp" + (din.children.length - 1)) {
                    nuevaCasilla('manual');
                    document.getElementById("per" + (din.children.length - 1)).focus();
                }

                else {
                    document.getElementById("per" + digitosFix).focus();
                }
                break
    }
            break

        case true:
            switch (event.target.id) {
                case "per" + digitos:
                    document.getElementById("ding" + digitos).focus();
                    break

                case "ding" + digitos:
                    if ("ding" + digitos === "ding" + (din.children.length - 1)) {
                        nuevaCasilla('manual');
                        document.getElementById("per" + (din.children.length - 1)).focus();
                    }
    
                    else {
                        document.getElementById("per" + digitosFix).focus();
                    }
                    break
            }
            break
    };
}});

// Adaptar el textarea de los resultados al tamaño de la cantidad de casillas
// textarenaResAdapt tiene dos opciones, true y false
function textarenaResAdapt (valorTRA) {
    let resultadoAltura = document.getElementById("resultadosTextarea").clientHeight - 4;
    if (valorTRA) {
        let resultadoAlturaCal = resultadoAltura + 150;
        document.getElementById("resultadosTextarea").style.height = resultadoAlturaCal + "px";
        return true;
    } else {
        let resultadoAlturaCal = resultadoAltura - 150;
        document.getElementById("resultadosTextarea").style.height = resultadoAlturaCal + "px";
        return false;
    }
}

// Modo de cambiar idiomas
let cambiar = () => {
    let cambioIdioma = document.getElementById('cambioIdioma');
    let inputSub1 = document.getElementById('csIngLab');
    let inputSub2 = document.getElementById('csEspLab');
    let textoMenuLateral = document.getElementById('mdi-texto-2');
    let iconoMenuLateral = document.getElementById('modoIdiomaCambioIcono');

    switch (cambioIdioma.checked) {
        case false:
            inputSub1.removeAttribute('style');
            inputSub1.innerHTML = 'Cargar subtitulos en Inglés';
            inputSub2.style.display = 'flex';
            textoMenuLateral.innerHTML = 'Modo actual: Dual';
            iconoMenuLateral.innerHTML = 'toggle_on';
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].placeholder = 'Diálogo en inglés';
                ids[i].children[2].style.visibility = 'visible';
                ids[i].children[8].innerHTML = 'Mezclar diálogos Inglés';
                ids[i].children[8].style.left = null;
                ids[i].children[9].style.visibility = 'visible';
            }
            break
        
        case true:
            inputSub1.style.gridColumn = '1 / label 2';
            inputSub1.innerHTML = 'Cargar subtitulos';
            inputSub2.style.display = 'none';
            textoMenuLateral.innerHTML = 'Modo actual: Singular';
            iconoMenuLateral.innerHTML = 'toggle_off';
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].placeholder = 'Diálogo';
                ids[i].children[2].style.visibility = 'hidden';
                ids[i].children[8].innerHTML = 'Mezclar diálogos';
                ids[i].children[8].style.left = '27.5%';
                ids[i].children[9].style.visibility = 'hidden';
            }
            break
    }
}

// Mezcla las casillas del lado izquierdo
let mezclarA = () => {
    let dinTotal = String(din.childElementCount) - 1;
    let idGet = event.target.parentElement;
    let idValueGet = idGet.children[0].id.match(/\d+/);
    let idValue0 = parseInt(idValueGet);
    let idValue1 = idValue0 + 1;
    let dingValue0 = document.getElementById('ding' + idValue0);
    let dingValue1 = document.getElementById('ding' + idValue1);
    let textarea0 = dingValue0.scrollHeight;
    let divM = document.getElementById('per' + idValue1).parentNode;
    
    if (document.getElementById('desp' + idValue1).value.length === 0) {
        dingValue0.value += ' ' + dingValue1.value;
        dingValue0.style.height = '20px';
        dingValue0.style.height = (textarea0 - 4) + 'px';
        din.removeChild(divM);

        if (dinTotal === 1) {
            document.getElementById('mezclarA0').setAttribute('disabled', "");
            document.getElementById('mezclarB0').setAttribute('disabled', "");
        }

    }
    else if (document.getElementById('desp' + idValue0).value.length > 0 && document.getElementById('desp' + idValue1).value.length > 0) {
        dingValue0.value += ' ' + dingValue1.value;
        dingValue1.value = '';
        dingValue0.style.height = '20px';
        dingValue0.style.height = (textarea0 - 4) + 'px';
    }
    recalcularIds();
}

// Mezcla las casillas del lado derecho
let mezclarB = () => {
    let dinTotal = String(din.childElementCount) - 1;
    let idGet = event.target.parentElement;
    let idValueGet = idGet.children[0].id.match(/\d+/);
    let idValue0 = parseInt(idValueGet);
    let idValue1 = idValue0 + 1;
    let despValue0 = document.getElementById('desp' + idValue0);
    let despValue1 = document.getElementById('desp' + idValue1);
    let textarea0 = despValue0.scrollHeight;
    let divM = document.getElementById('per' + idValue1).parentNode;
    
    if (document.getElementById('ding' + idValue1).value.length === 0) {
        despValue0.value += ' ' + despValue1.value;
        despValue0.style.height = '20px';
        despValue0.style.height = (textarea0 - 4) + 'px';
        din.removeChild(divM);

        if (dinTotal === 1) {
            document.getElementById('mezclarA0').setAttribute('disabled', "");
            document.getElementById('mezclarB0').setAttribute('disabled', "");
        }

    }
    else if (document.getElementById('ding' + idValue0).value.length > 0 && document.getElementById('ding' + idValue1).value.length > 0) {
        despValue0.value += ' ' + despValue1.value;
        despValue1.value = '';
        despValue0.style.height = '20px';
        despValue0.style.height = (textarea0 - 4) + 'px';
    }
    recalcularIds();
}

// Función de copiar resultados
document.getElementById("copiar").onclick = () => navigator.clipboard.writeText(document.getElementById('resultadosTextarea').value);
