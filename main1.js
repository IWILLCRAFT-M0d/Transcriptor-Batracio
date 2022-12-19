// Reacomodación de ids (muchas gracias a LooperLane por ayudarme a solucionarlo)
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

// Función para crear nueva casilla
// columType tiene dos opciones, 'manual' y 'auto'
function newBox(boxType) {
    let div = document.createElement('div');
    switch (modeVal) {
        case 1:
            div.innerHTML =`<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo en inglés"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español"></textarea>
<button class="addBtn" onclick="newBox('manual')">Agregar</button><label class="centerText"></label><button class="delBtn" onclick="deleteBox()">Eliminar</button>
<button class="mixL" id="" onclick="mixRow('left')" disabled>Mezclar diálogos Inglés</button><button class="mixR" id="" onclick="mixRow('right')" disabled>Mezclar diálogos Español</button>`;
            break

        case 2:
            div.innerHTML =`<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" style="grid-column: 2 / 4; width: 500px;" placeholder="Diálogo"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español" style="display: none;"></textarea>
<button class="addBtn" onclick="newBox('manual')" style="grid-area: 2 / 1;">Agregar</button><label class="centerText" style="grid-area: 2 / 2;"></label><button class="delBtn" onclick="deleteBox()" style="grid-area: 2 / 3;">Eliminar</button>
<button class="mixL" id="" onclick="mixRow('left')" style="grid-area: 3 / 2;">Mezclar diálogos</button><button class="mixR" id="" onclick="mixRow('right')" style="display: none">Mezclar diálogos Español</button>`;
            break
    }

    switch (boxType) {
        case 'manual':
            let idGet = event.target.parentElement;
            let idValueGet = idGet.children[0].id.match(/\d+/);
            let idValue = parseInt(idValueGet) + 1;
            din.insertBefore(div, din.children[idValue]);
            recalcularIds();

            switch (din.childElementCount - 1) {
                case 1:
                    document.getElementById('mezclarA0').removeAttribute('disabled', '');
                    document.getElementById('mezclarB0').removeAttribute('disabled', '');
                    document.getElementById('mezclarA1').setAttribute('disabled', '');
                    document.getElementById('mezclarB1').setAttribute('disabled', '');
                    break

                case 2:
                    document.getElementById('mezclarA1').removeAttribute('disabled', '');
                    document.getElementById('mezclarB1').removeAttribute('disabled', '');
                    document.getElementById('mezclarA2').setAttribute('disabled', '');
                    document.getElementById('mezclarB2').setAttribute('disabled', '');
                    break

                default:
                    document.getElementById('mezclarA' + idValue).removeAttribute('disabled', '');
                    document.getElementById('mezclarB' + idValue).removeAttribute('disabled', '');
                    document.getElementById('mezclarA' + (din.childElementCount - 2)).removeAttribute('disabled', '');
                    document.getElementById('mezclarB' + (din.childElementCount - 2)).removeAttribute('disabled', '');
                    document.getElementById('mezclarA' + (din.childElementCount - 1)).setAttribute('disabled', '');
                    document.getElementById('mezclarB' + (din.childElementCount - 1)).setAttribute('disabled', '');
                    break
                }
            break

        case 'auto':
            din.appendChild(div)
            recalcularIds();
            break
        
        default:
            console.log(`¡Error! ¡Will haz tu trabajo bien! Se te ha olvidado en alguna parte del código definir el para que vas a usar la función de 'newBox'.`)
            break
        }
}

// Función de elminar lineas y reducir el tamaño del textarea
function deleteBox() {
    let dinTotal = din.childElementCount - 1;
    let dinTotalAlt = din.childElementCount - 2;
    let idGet = event.target.parentElement;
    let idValue = parseInt(idGet.children[0].id.match(/\d+/));

    if (dinTotal > 0 && idValue > 0 && idValue < dinTotal) {
        din.removeChild(idGet);
        recalcularIds();
        document.getElementById('mezclarA' + dinTotalAlt).setAttribute('disabled', '');
        document.getElementById('mezclarB' + dinTotalAlt).setAttribute('disabled', '');
    }

    else if (dinTotal > 0 && idValue === 0) {
        din.removeChild(idGet);
        recalcularIds();
    }

    else if (dinTotal > 0 && idValue === dinTotal) {
        din.removeChild(idGet);
        document.getElementById('mezclarA' + dinTotalAlt).setAttribute('disabled', '');
        document.getElementById('mezclarB' + dinTotalAlt).setAttribute('disabled', '');
    }

    else {
        document.getElementById('per0').value = '';
        document.getElementById('ding0').value = '';
        document.getElementById('desp0').value = '';
    }
};

// Deshabilita la tecla 'Enter' dentro de los textarea y adapta el tamaño de los textarea dependiendo del texto
function OnInput() {this.style.height = 0; this.style.height = (this.scrollHeight + 6) + 'px';}
din.addEventListener('keydown', () => {
    let idGet = event.target
    if (event.keyCode === 13) {event.preventDefault()}
    idGet.setAttribute('style', 'height:' + (idGet.scrollHeight) + 'px;');
    idGet.addEventListener('input', OnInput, false);
})

// Reacción en caso de precionar enter en una casilla
din.addEventListener('keyup', (e) => {
    let idGet = parseInt(event.target.id.match(/\d+/))
    if (e.keyCode === 13) {
    switch (modeVal) {
        case 1:
        switch (event.target.id) {
            case 'per' + idGet:
                document.getElementById('ding' + idGet).focus();
                break

            case 'ding' + idGet:
                document.getElementById('desp' + idGet).focus();
                break

            case 'desp' + idGet:
                if (document.getElementById('per' + idGet).value.length === 0 && document.getElementById('ding' + idGet).value.length === 0 && document.getElementById('desp' + idGet).value.length === 0) {
                    document.getElementById('per' + idGet).focus();
                } else if ((idGet + 1) < din.childElementCount) {
                    document.getElementById('per' + (idGet+1)).focus();
                } else {
                    newBox('manual');
                    document.getElementById('per' + (din.childElementCount-1)).focus()
                }
                break
        }
            break

        case 2:
            switch (event.target.id) {
                case 'per' + idGet:
                    document.getElementById('ding' + idGet).focus();
                    break

                case 'ding' + idGet:
                    if (document.getElementById('per' + idGet).value.length === 0 && document.getElementById('ding' + idGet).value.length === 0) {
                        document.getElementById('per' + idGet).focus();
                    } else {
                        newBox('manual');
                        document.getElementById('per' + (din.childElementCount-1)).focus()
                    }
                    break
            }
            break
}}});

// Mezcla las casillas dependiendo del lado aplicado en la plantilla
// columType tiene dos opciones con dos variantes cada una, 'left' o 'izquierda' y 'right' o 'derecha'
function mixRow(sideRow) {
    let dinTotal = din.childElementCount - 1;
    
    let idGet = event.target.parentElement;
    let idValue0 = parseInt(idGet.children[0].id.match(/\d+/));
    let idValue1 = idValue0 + 1;

    let dingValue0 = document.getElementById('ding' + idValue0);
    let dingValue1 = document.getElementById('ding' + idValue1);

    let despValue0 = document.getElementById('desp' + idValue0);
    let despValue1 = document.getElementById('desp' + idValue1);
    let divM = document.getElementById('per' + idValue1).parentNode;

    switch (sideRow) {
        case 'left':
        case 'izquierda':
            if (despValue1.value.length === 0) {
                if (dingValue1.value.length > 0) {
                    if (dingValue0.value.length === 0) {
                        dingValue0.value += dingValue1.value;
                    } else {
                        dingValue0.value += ' ' + dingValue1.value;
                    }
                    dingValue0.style.height = '30px';
                    dingValue0.setAttribute('style', 'height: ' + (dingValue0.scrollHeight + 5) + 'px;');
                    dingValue0.addEventListener('input', OnInput, false);
                    if (dingValue0.style.height === '35px') {dingValue0.style.height = '30px';}
                }
                din.removeChild(divM);
                if (dinTotal === 1) {
                    document.getElementById('mezclarA0').setAttribute('disabled', '');
                    document.getElementById('mezclarB0').setAttribute('disabled', '');
                } else if (idValue0 === (dinTotal-1)) {
                    document.getElementById('mezclarA' + (dinTotal-1)).setAttribute('disabled', '');
                    document.getElementById('mezclarB' + (dinTotal-1)).setAttribute('disabled', '');
                }
            }
            else {
                if (dingValue1.value.length > 0) {
                    dingValue0.value += ' ' + dingValue1.value;
                    dingValue1.value = '';
                    dingValue0.style.height = '30px';
                    dingValue0.setAttribute('style', 'height: ' + (dingValue0.scrollHeight + 5) + 'px;');
                    dingValue0.addEventListener('input', OnInput, false);
                    if (dingValue0.style.height === '35px') {dingValue0.style.height = '30px';}
                }
            }
            break
        case 'right':
        case 'derecha':
            if (dingValue1.value.length === 0) {
                if (despValue1.value.length > 0) {
                    if (despValue0.value.length === 0) {
                        despValue0.value += despValue1.value;
                    } else {
                        despValue0.value += ' ' + despValue1.value;
                    }
                    despValue0.style.height = '30px';
                    despValue0.setAttribute('style', 'height: ' + (despValue0.scrollHeight + 5) + 'px;');
                    despValue0.addEventListener('input', OnInput, false);
                    if (despValue0.style.height === '35px') {despValue0.style.height = '30px';}
                }
                din.removeChild(divM);
                if (dinTotal === 1) {
                    document.getElementById('mezclarA0').setAttribute('disabled', '');
                    document.getElementById('mezclarB0').setAttribute('disabled', '');
                } else if (idValue0 === (dinTotal-1)) {
                    document.getElementById('mezclarA' + (dinTotal-1)).setAttribute('disabled', '');
                    document.getElementById('mezclarB' + (dinTotal-1)).setAttribute('disabled', '');
                }
            }
            else {
                if (despValue1.value.length > 0) {
                    despValue0.value += ' ' + despValue1.value;
                    despValue1.value = '';
                    despValue0.style.height = '30px';
                    despValue0.setAttribute('style', 'height: ' + (despValue0.scrollHeight + 5) + 'px;');
                    despValue0.addEventListener('input', OnInput, false);
                    if (despValue0.style.height === '35px') {despValue0.style.height = '30px';}
                }
            }
            break
        
        default:
            console.log(`¡Error! ¡Will haz tu trabajo bien! Se te ha olvidado en alguna parte del código definir el para que vas a usar la función de "mixRow".`)
            break
    }
    recalcularIds()
}