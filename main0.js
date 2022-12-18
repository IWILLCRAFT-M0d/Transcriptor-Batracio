const din = document.getElementById('dinamico');
const ids = din.children;

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};

window.onload = () => {
    document.getElementById('mezclarA0').setAttribute('disabled', "");
    document.getElementById('mezclarB0').setAttribute('disabled', "");
}

// Función para crear nueva casilla
// tipoDeNuevaCasilla tiene dos opciones, 'manual' y 'auto'
function nuevaCasilla (tipoDeNuevaCasilla) {
    let div = document.createElement('div');

    switch (modeVal) {
        case 1:
            div.innerHTML =`<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo en inglés"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español"></textarea>
<button class="addBtn" onclick="nuevaCasilla('manual')">Agregar</button><label class="centerText"></label><button class="delBtn" onclick="elim()">Eliminar</button>
<button class="mixL" id="" onclick="mixRow('left')" disabled>Mezclar diálogos Inglés</button><button class="mixR" id="" onclick="mixRow('right')" disabled>Mezclar diálogos Español</button>`;
            break

        case 2:
        div.innerHTML =`<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" style="grid-column: 2 / 4; width: 500px;" placeholder="Diálogo"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español" style="display: none;"></textarea>
<button class="addBtn" onclick="nuevaCasilla('manual')" style="grid-area: 2 / 1;">Agregar</button><label class="centerText" style="grid-area: 2 / 2;"></label><button class="delBtn" onclick="elim()" style="grid-area: 2 / 3;">Eliminar</button>
<button class="mixL" id="" onclick="mixRow('left')" style="grid-area: 3 / 2;">Mezclar diálogos</button><button class="mixR" id="" onclick="mixRow('right')" style="display: none">Mezclar diálogos Español</button>`;
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
        console.log(`¡Error! ¡Will haz tu trabajo bien! Se te ha olvidado en alguna parte del código definir el para que vas a usar la función de "nuevaCasilla".`)
    }
}

// Reacomodación de ids (gracias a Looper por ayudarme a solucionarlo)
function recalcularIds() {
    for (let i = 0; i < ids.length; i++) {
        ids[i].children[0].id = 'per' + i;
        ids[i].children[1].id = 'ding' + i;
        ids[i].children[2].id = 'desp' + i;
        ids[i].children[6].id = 'mezclarA' + i;
        ids[i].children[7].id = 'mezclarB' + i;
        if(i % 2 == 0) {
            ids[i].removeAttribute('style');
        } else {
            ids[i].style.background = '#2d0b1c';
        }
        
    }
    for (let i = 0; i < ids.length; i++) {
        let y = i + 1;
        ids[i].children[4].innerHTML = 'Línea número ' + y;
    }
};

// Función de elminar lineas y reducir el tamaño del textarea
function elim() {
    let dinTotal = din.childElementCount - 1;
    let idsel0 = event.target.parentElement;
    let idsel1 = idsel0.children[0].id.match(/\d+/);
    let idsel2 = parseInt(idsel1);
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

// Deshabilita la tecla "Enter" dentro de los textarea y adapta el tamaño de los textarea dependiendo del texto
din.addEventListener('keydown', () => {
    if (event.keyCode === 13) {event.preventDefault()};
})
const tx = din.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight + 6) + "px";
}

// Reacción en caso de precionar enter en una casilla
din.addEventListener("keyup", (e) => {
    let digitos = event.target.id.match(/\d+/);
    let digitosFix = parseInt(digitos) + 1;
    
    if (e.keyCode === 13) {
    switch (modeVal) {
        case 1:
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

        case 2:
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
}}});

// Adaptar el textarea de los resultados al tamaño de la cantidad de casillas
// textarenaResAdapt tiene dos opciones, true y false
function textarenaResAdapt (valorTRA) {
    let resultadoAltura = document.getElementById("resultadosTextarea").clientHeight + 6;
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
function changeRowMode() {
    switch (modeVal) {
        case 1:
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].style.gridColumn = null;
                ids[i].children[1].placeholder = 'Diálogo en inglés';
                ids[i].children[1].style.width = null;
                ids[i].children[2].style.display = null;
                //Boton: Agregar
                ids[i].children[3].style.gridColumn = null;
                ids[i].children[3].style.gridRow = null;
                //Label: Número de línea
                ids[i].children[4].style.gridColumn = null;
                ids[i].children[4].style.gridRow = null;
                //Boton: Eliminar
                ids[i].children[5].style.gridColumn = null;
                ids[i].children[5].style.gridRow = null;
                //Boton: Mezclar diálogos
                ids[i].children[6].innerHTML = 'Mezclar diálogos inglés';
                ids[i].children[6].style.gridColumn = null;
                ids[i].children[6].style.gridRow = null;
                ids[i].children[7].style.display = null;
            }
            break

        case 2:
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].style.gridColumn = '2 / 4';
                ids[i].children[1].placeholder = 'Diálogo';
                ids[i].children[1].style.width = '500px';
                ids[i].children[2].style.display = 'none';
                //Boton: Agregar
                ids[i].children[3].style.gridColumn = '1';
                ids[i].children[3].style.gridRow = '2';
                //Label: Número de línea
                ids[i].children[4].style.gridColumn = '2';
                ids[i].children[4].style.gridRow = '2';
                //Boton: Eliminar
                ids[i].children[5].style.gridColumn = '3';
                ids[i].children[5].style.gridRow = '2';
                //Boton: Mezclar diálogos
                ids[i].children[6].innerHTML = 'Mezclar diálogos';
                ids[i].children[6].style.gridColumn = '2';
                ids[i].children[6].style.gridRow = '3';
                ids[i].children[7].style.display = 'none';
            }
            break
    }
}

// Mezcla las casillas del lado izquierdo
function mixRow(sideRow) {
    let dinTotal = din.childElementCount - 1;
    
    let idGet = event.target.parentElement;
    let idValueGet = idGet.children[0].id.match(/\d+/);
    let idValue0 = parseInt(idValueGet);
    let idValue1 = idValue0 + 1;

    let dingValue0 = document.getElementById('ding' + idValue0);
    let dingValue1 = document.getElementById('ding' + idValue1);

    let despValue0 = document.getElementById('desp' + idValue0);
    let despValue1 = document.getElementById('desp' + idValue1);

    let textarea0 = dingValue0.scrollHeight;
    let textarea1 = despValue0.scrollHeight;
    let divM = document.getElementById('per' + idValue1).parentNode;

    switch (sideRow) {
        case 'left':
        case 'izquierda':
            if (despValue1.value.length === 0) {
                if (dingValue1.value.length > 0) {
                    dingValue0.value += ' ' + dingValue1.value;
                    dingValue0.style.height = '20px';
                    dingValue0.style.height = (textarea0 - 4) + 'px';
                }
                din.removeChild(divM);
                if (dinTotal === 1) {
                    document.getElementById('mezclarA0').setAttribute('disabled', "");
                    document.getElementById('mezclarB0').setAttribute('disabled', "");
                } else if (idValue0 === (dinTotal-1)) {
                    document.getElementById('mezclarA' + (dinTotal-1)).setAttribute('disabled', "");
                    document.getElementById('mezclarB' + (dinTotal-1)).setAttribute('disabled', "");
                }
            }
            else {
                dingValue0.value += ' ' + dingValue1.value;
                dingValue1.value = '';
                dingValue0.style.height = '20px';
                dingValue0.style.height = (textarea0 - 4) + 'px';
            }
            break
        case 'right':
        case 'derecha':
            if (dingValue1.value.length === 0) {
                if (despValue1.value.length > 0) {
                    despValue0.value += ' ' + despValue1.value;
                    despValue0.style.height = '20px';
                    despValue0.style.height = (textarea1 - 4) + 'px';
                }
                din.removeChild(divM);
                if (dinTotal === 1) {
                    document.getElementById('mezclarA0').setAttribute('disabled', "");
                    document.getElementById('mezclarB0').setAttribute('disabled', "");
                } else if (idValue0 === (dinTotal-1)) {
                    document.getElementById('mezclarA' + (dinTotal-1)).setAttribute('disabled', "");
                    document.getElementById('mezclarB' + (dinTotal-1)).setAttribute('disabled', "");
                }
            }
            else {
                despValue0.value += ' ' + despValue1.value;
                despValue1.value = '';
                despValue0.style.height = '20px';
                despValue0.style.height = (textarea1 - 4) + 'px';
            }
            break
    }
    recalcularIds()
}

// Función de copiar resultados
document.getElementById("show_results_copy").onclick = () => navigator.clipboard.writeText(document.getElementById('resultadosTextarea').value);