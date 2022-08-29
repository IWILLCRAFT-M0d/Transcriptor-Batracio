const din = document.getElementById('dinamico');

window.onload = function() {

    switch (true) {
        case filtroBoton0.checked:
            bandera.setAttribute("src", "bandera_la.svg");
            break
        
        case filtroBoton1.checked:
            bandera.setAttribute("src", "bandera_en.svg");
            break
        
        case filtroBoton2.checked:
            bandera.setAttribute("src", "bandera_es.svg");
            break
        }

    let cambioIdioma = document.getElementById('cambioIdioma');
    let ids = din.children;
    let inputSub1 = document.getElementById('linea01');
    let inputSub2 = document.getElementById('linea11');
    let textoMenuLateral = document.getElementById('mdi-texto-2');
    let iconoMenuLateral = document.getElementById('modoIdiomaCambioIcono');

    switch (cambioIdioma.checked) {
        case false:
            inputSub1.removeAttribute('style');
            inputSub2.style.display = 'flex';
            textoMenuLateral.innerHTML = 'Modo actual: Dual';
            inputSub1.innerHTML = 'Cargar subtitulos en Inglés';
            iconoMenuLateral.innerHTML = 'toggle_on';
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].placeholder = 'Diálogo en inglés';
                ids[i].children[2].style.visibility = 'visible';
                ids[i].children[8].innerHTML = 'Mezclar diálogos Inglés';
                ids[i].children[8].style.left = '-2.5%';
                ids[i].children[9].style.visibility = 'visible';
            }
            break
        
        case true:
            inputSub1.style.gridColumn = '1 / label 2';
            inputSub2.style.display = 'none';
            textoMenuLateral.innerHTML = 'Modo actual: Singular';
            inputSub1.innerHTML = 'Cargar subtitulos';
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

    document.getElementById('per0').value = '';
    document.getElementById('ding0').value = '';
    document.getElementById('desp0').value = '';
    document.getElementById('per0').style.height = '20px';
    document.getElementById('ding0').style.height = '20px';
    document.getElementById('desp0').style.height = '20px';
}

// Función de agregar lineas
let agre0 = (e) => {
    let cambioIdioma = document.getElementById('cambioIdioma');
    let idsel0 = event.target.parentElement;
    let idsel1 = idsel0.children[0].id.match(/\d+/);
    let idsel2 = parseInt(idsel1);
    let div = document.createElement('div');
    switch (cambioIdioma.checked) {
        case false:
        div.innerHTML =
            `<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo en inglés"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español"></textarea><br>
<button class="botonagregar" onclick="agre0(this)">Agregar</button><label></label><button class="botoneliminar" onclick="elim(this)">Eliminar</button><br>
            <button class="mezclar" id="" onclick="mezclarA(this)">Mezclar diálogos Inglés</button><button class="mezclar" id="" onclick="mezclarB(this)">Mezclar diálogos Español</button>`;
            break

        case true:
        div.innerHTML =
            `<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español" style="visibility: hidden;"></textarea><br>
<button class="botonagregar" onclick="agre0(this)">Agregar</button><label></label><button class="botoneliminar" onclick="elim(this)">Eliminar</button><br>
<button class="mezclar" id="" onclick="mezclarA(this)" style="left: 27.5%;">Mezclar diálogos</button><button class="mezclar" id="" onclick="mezclarB(this)" style="visibility: hidden;">Mezclar diálogos Español</button>`;
            break
    };
    din.insertBefore(div, din.children[idsel2 + 1]);
    recalcularIds()
    switch ((String(din.childElementCount) - 1)) {
        case 1:
            document.getElementById("mezclarA0").removeAttribute('disabled', "");
            document.getElementById("mezclarB0").removeAttribute('disabled', "");
            document.getElementById("mezclarA1").setAttribute('disabled', "");
            document.getElementById("mezclarB1").setAttribute('disabled', "");
            break

        case 2:
            document.getElementById("mezclarA1").removeAttribute('disabled', "");
            document.getElementById("mezclarB1").removeAttribute('disabled', "");
            document.getElementById("mezclarA2").setAttribute('disabled', "");
            document.getElementById("mezclarB2").setAttribute('disabled', "");
            break

        default:
            document.getElementById("mezclarA" + (din.childElementCount - 2)).removeAttribute('disabled', "");
            document.getElementById("mezclarB" + (din.childElementCount - 2)).removeAttribute('disabled', "");
            document.getElementById("mezclarA" + (din.childElementCount - 1)).setAttribute('disabled', "");
            document.getElementById("mezclarB" + (din.childElementCount - 1)).setAttribute('disabled', "");
            break
    }
    textarenaResAdapt('true')
};

// Reacomodación de ids (gracias a Looper por ayudarme a solucionarlo)
let recalcularIds = (e) => {
    let ids = din.children;
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
    let dinTotal = String(din.childElementCount) - 1;
    let idsel0 = event.target.parentElement;
    let idsel1 = idsel0.children[0].id.match(/\d+/);
    let idsel2 = parseInt(idsel1);
    if (dinTotal > 0 && idsel2 > 0 && idsel2 < dinTotal) {
        let divM = e.parentNode;
        din.removeChild(divM);
        recalcularIds();
        textarenaResAdapt(false);
        document.getElementById("mezclarA" + (dinTotal - 1)).setAttribute('disabled', "");
        document.getElementById("mezclarB" + (dinTotal - 1)).setAttribute('disabled', "");
    }

    else if (dinTotal > 0 && idsel2 === 0) {
        let divM = e.parentNode;
        din.removeChild(divM);
        recalcularIds();
        textarenaResAdapt(false)
    }

    else if (dinTotal > 0 && idsel2 === dinTotal) {
        let divM = e.parentNode;
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

let filtroBotonValor0 = document.getElementById('menu-1');
let filtroBotonValor1 = document.getElementById('menu-2');
let filtroBotonValor2 = document.getElementById('menu-3');
let filtroBotonValor3 = document.getElementById('menu-4');
let ml1 = document.getElementById('menu-lateral-1');
let ml2 = document.getElementById('menu-lateral-2');
let ml3 = document.getElementById('menu-lateral-3');
let ml4 = document.getElementById('menu-lateral-4');

filtroBotonValor0.onclick = function(){
    ml1.style.display = "inline"
    ml2.style.display = "none"
    ml3.style.display = "none"
    ml4.style.display = "none"
};

filtroBotonValor1.onclick = function(){
    ml1.style.display = "none"
    ml2.style.display = "inline"
    ml3.style.display = "none"
    ml4.style.display = "none"
};

filtroBotonValor2.onclick = function(){
    ml1.style.display = "none"
    ml2.style.display = "none"
    ml3.style.display = "inline"
    ml4.style.display = "none"
};

filtroBotonValor3.onclick = function(){
    ml1.style.display = "none"
    ml2.style.display = "none"
    ml3.style.display = "none"
    ml4.style.display = "inline"
};


// Deshabilita la tecla "Enter" dentro de los textarea y adapta el tamaño de los textarea dependiendo del texto
din.addEventListener("keydown", (e) => {
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
  });

// Reacción en caso de precionar enter en una casilla/input
din.addEventListener("keyup", e => {
    let digitos0 = event.target.id.match(/\d+/);
    let digitos = parseInt(digitos0);
    let digitosFix = digitos + 1;
    
    let tamales0 = (e.target.scrollHeight);
    let tamales1 = tamales0 - 4;

    //Adapta el tamaño del textarea dependiendo del texto
    switch (event.target.id) {
            case "per" + digitos:
                document.getElementById("per" + digitos).style.height = '20px';
                document.getElementById("per" + digitos).style.height = (tamales1) + 'px';
                break

            case "ding" + digitos:
                document.getElementById("ding" + digitos).style.height = '20px';
                document.getElementById("ding" + digitos).style.height = (tamales1) + 'px';
                break

            case "desp" + digitos:
                document.getElementById("desp" + digitos).style.height = '20px';
                document.getElementById("desp" + digitos).style.height = (tamales1) + 'px';
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
                    agre0();
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
                        agre0();
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

// Adaptar el textarea de los resultados al tamaño de la cantidad de Divs en Dinamico
function textarenaResAdapt (value) {
    let resultadoAltura = document.getElementById("resultado").clientHeight - 4;
    if (value) {
        let resultadoAlturaCal = resultadoAltura + 150;
        document.getElementById("resultado").style.height = resultadoAlturaCal + "px";
        return true;
    } else {
        let resultadoAlturaCal = resultadoAltura - 150;
        document.getElementById("resultado").style.height = resultadoAlturaCal + "px";
        return false;
    }
}

// Modo de cambiar idiomas
let cambiar = (e) => {
    let cambioIdioma = document.getElementById('cambioIdioma');
    let ids = din.children;
    let inputSub1 = document.getElementById('linea01');
    let inputSub2 = document.getElementById('linea11');
    let textoMenuLateral = document.getElementById('mdi-texto-2');
    let iconoMenuLateral = document.getElementById('modoIdiomaCambioIcono');

    switch (cambioIdioma.checked) {
        case false:
            inputSub1.removeAttribute('style');
            inputSub2.style.display = 'flex';
            textoMenuLateral.innerHTML = 'Modo actual: Dual';
            inputSub1.innerHTML = 'Cargar subtitulos en Inglés';
            iconoMenuLateral.innerHTML = 'toggle_on';
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].placeholder = 'Diálogo en inglés';
                ids[i].children[2].style.visibility = 'visible';
                ids[i].children[8].innerHTML = 'Mezclar diálogos Inglés';
                ids[i].children[8].style.left = '-2.5%';
                ids[i].children[9].style.visibility = 'visible';
            }
            break
        
        case true:
            inputSub1.style.gridColumn = '1 / label 2';
            inputSub2.style.display = 'none';
            textoMenuLateral.innerHTML = 'Modo actual: Singular';
            inputSub1.innerHTML = 'Cargar subtitulos';
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

// Función de agregar lineas cuando se cargan subtitulos
let agreCargarSub = (e) => {
    let cambioIdioma = document.getElementById('cambioIdioma');
    let div = document.createElement('div');
    switch (cambioIdioma.checked) {
        case false:
            div.innerHTML =
            `<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo en inglés"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español"></textarea><br>
<button class="botonagregar" onclick="agre0(this)">Agregar</button><label></label><button class="botoneliminar" onclick="elim(this)">Eliminar</button><br>
            <button class="mezclar" id="" onclick="mezclarA(this)" disabled>Mezclar diálogos Inglés</button><button class="mezclar" id="" onclick="mezclarB(this)" disabled>Mezclar diálogos Español</button>`;
            break

        case true:
        div.innerHTML =
            `<textarea type="text" name="personajes" id="" placeholder="Personaje"></textarea>
<textarea type="text" name="diaEnIng" id="" placeholder="Diálogo"></textarea>
<textarea type="text" name="diaEnEsp" id="" placeholder="Diálogo en español" style="visibility: hidden;"></textarea><br>
<button class="botonagregar" onclick="agre0(this)">Agregar</button><label></label><button class="botoneliminar" onclick="elim(this)">Eliminar</button><br>
<button class="mezclar" id="" onclick="mezclarA(this)" style="left: 27.5%;">Mezclar diálogos</button><button class="mezclar" id="" onclick="mezclarB(this)" style="visibility: hidden">Mezclar diálogos Español</button>`;
            break
    };
    din.appendChild(div);
    recalcularIds()
};

// Acción de cargar subtitulos en inglés
document.getElementById('linea0').addEventListener('change', function () {
    let ids = din.children;
    let inputEng = document.getElementById('linea0');
    let inputEngRes = inputEng.files[0];
    let fileEng = new FileReader();
    fileEng.readAsText(inputEngRes);
    fileEng.onload = function () {
        let res0 = fileEng.result;
        let resA = res0.replace(/\d+(\r\n)\d+:\d+:\d+,\d+ --> \d+:\d+:\d+,\d+(\r\n)/g, ''); //Filtro de numeros
        let resB = resA.replace(/-?\[.+(\r\n.+)?(\r\n.+)?\](\s+)?((\r\n)(\r\n)+)?/g, ''); //Filtro de llaves
        let resC = resB.replace(/(\r\n){2}(\r\n)+/g, '\r\n\r\n'); //Filtro de lineas
        let resD = resC.replace(/<i>|<\/i>/g, ''); //Filtro de cosas de los subtítulos
        let resF = resD.match(/.+(\r\n.+)*/g);
        let resE = resF.map(die => die.replace(/\r\n/g, " "));
        let resTotal = resE.length - 1;
        let dinTotal = din.childElementCount - 1;
        let valorFinal = resTotal - dinTotal;
        if (resTotal <= dinTotal) {
            for (let i = 0; i < resF.length; i++) {
                document.getElementById('ding' + i).value = resE[i];
                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
            }
        }
        else {
            for (let i = 0; i < valorFinal; i++) {
                agreCargarSub()

            }
            for (let i = 0; i < resF.length; i++) {
                document.getElementById('ding' + i).value = resE[i];
                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                textarenaResAdapt(true)
            }
            for (let i = 0; i < (resF.length - 1); i++) {
                ids[i].children[8].removeAttribute('disabled', "");
                ids[i].children[9].removeAttribute('disabled', "");
            }
        }
    };
});

// Acción de cargar subtitulos en español
document.getElementById('linea1').addEventListener('change', function () {
    let ids = din.children;
    let inputEsp = document.getElementById('linea1');
    let inputEspRes = inputEsp.files[0];
    let fileEsp = new FileReader();
    fileEsp.readAsText(inputEspRes);
    fileEsp.onload = function () {
        let res0 = fileEsp.result;
        let resA = res0.replace(/\d+(\r\n)\d+:\d+:\d+,\d+ --> \d+:\d+:\d+,\d+(\r\n)/g, ''); //Filtro de numeros
        let resB = resA.replace(/-?\[.+(\r\n.+)?(\r\n.+)?\](\s+)?((\r\n)(\r\n)+)?/g, ''); //Filtro de llaves
        let resC = resB.replace(/(\r\n){2}(\r\n)+/g, '\r\n\r\n'); //Filtro de líneas
        let resD = resC.replace(/<i>|<\/i>/g, ''); //Filtro de cosas de los subtítulos
        let resF = resD.match(/.+(\r\n.+)*/g);
        let resE = resF.map(dee => dee.replace(/\r\n/g, " "));
        let resTotal = resE.length - 1;
        let dinTotal = din.childElementCount - 1;
        let valorFinal = resTotal - dinTotal;
        if (resTotal <= dinTotal) {
            for (let i = 0; i < resF.length; i++) {
                document.getElementById('desp' + i).value = resE[i];
                document.getElementById('desp' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
            }
        }
        else {
            for (let i = 0; i < valorFinal; i++) {
                agreCargarSub()
            }
            for (let i = 0; i < resF.length; i++) {
                document.getElementById('desp' + i).value = resE[i];
                document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                textarenaResAdapt(true)
            }
            for (let i = 0; i < (resF.length - 1); i++) {
                ids[i].children[8].removeAttribute('disabled', "");
                ids[i].children[9].removeAttribute('disabled', "");
            }
        }
    };
});

// Mezcla las casillas del lado izquierdo
let mezclarA = (e) => {
    let dinTotal = String(din.childElementCount) - 1;
    let idsel0 = event.target.parentElement;
    let idsel1 = idsel0.children[0].id.match(/\d+/);
    let idsel2 = parseInt(idsel1);
    let idsel3 = idsel2 + 1;
    let idsel4 = idsel2 + 2;
    let ids = din.children;

    if (dinTotal > 0 && (document.getElementById('desp' + idsel2).value.length === 0 && document.getElementById('desp' + idsel3).value.length === 0) && document.getElementById('ding' + idsel3).value.length > 0) {
        document.getElementById('ding' + idsel2).value += ' ' + document.getElementById('ding' + idsel3).value;
        let divM = document.getElementById('per' + idsel3).parentNode;
        document.getElementById('ding' + idsel2).style.height = '20px';
        let arena0 = document.getElementById('ding' + idsel2).scrollHeight;
        document.getElementById('ding' + idsel2).style.height = (arena0 - 4) + 'px';
        din.removeChild(divM);
        recalcularIds();
    }
    else if ((dinTotal > 0 && (document.getElementById('desp' + idsel2).value.length > 0 || document.getElementById('desp' + idsel3).value.length > 0) && document.getElementById('ding' + idsel3).value.length > 0)) {
        document.getElementById('ding' + idsel2).value += ' ' + document.getElementById('ding' + idsel3).value;
        document.getElementById('ding' + idsel2).style.height = '20px';
        let arena0 = document.getElementById('ding' + idsel2).scrollHeight;
        document.getElementById('ding' + idsel2).style.height = (arena0 - 4) + 'px';
        for (let i = idsel4; i < din.children.length; i++) {
            let y = i - 1;
            ids[y].children[1].value = ids[i].children[1].value;
            ids[y].children[1].style.height = (ids[i].children[1].scrollHeight - 4) + 'px';
            ids[i].children[1].value = '';
            ids[i].children[1].style.height = '20px';
        }
    }
}

// Mezcla las casillas del lado derecho
let mezclarB = (e) => {
    let dinTotal = String(din.childElementCount) - 1;
    let idsel0 = event.target.parentElement;
    let idsel1 = idsel0.children[0].id.match(/\d+/);
    let idsel2 = parseInt(idsel1);
    let idsel3 = idsel2 + 1;
    let idsel4 = idsel2 + 2;
    let ids = din.children;

    if (dinTotal > 0 && (document.getElementById('ding' + idsel2).value.length === 0 && document.getElementById('ding' + idsel3).value.length === 0) && document.getElementById('desp' + idsel3).value.length > 0) {
        document.getElementById('desp' + idsel2).value += ' ' + document.getElementById('desp' + idsel3).value;
        let divM = document.getElementById('per' + idsel3).parentNode;
        document.getElementById('desp' + idsel2).style.height = '20px';
        let arena0 = document.getElementById('desp' + idsel2).scrollHeight;
        document.getElementById('desp' + idsel2).style.height = (arena0 - 4) + 'px';
        din.removeChild(divM);
        recalcularIds();
    }
    else if ((dinTotal > 0 && (document.getElementById('ding' + idsel2).value.length > 0 || document.getElementById('ding' + idsel3).value.length > 0) && document.getElementById('desp' + idsel3).value.length > 0)) {
        document.getElementById('desp' + idsel2).value += ' ' + document.getElementById('desp' + idsel3).value;
        document.getElementById('desp' + idsel2).style.height = '20px';
        let arena0 = document.getElementById('desp' + idsel2).scrollHeight;
        document.getElementById('desp' + idsel2).style.height = (arena0 - 4) + 'px';
        for (let i = idsel4; i < din.children.length; i++) {
        let y = i - 1;
        ids[y].children[2].value = ids[i].children[2].value;
        ids[y].children[2].style.height = '20px';
        ids[y].children[2].style.height = (ids[y].children[2].scrollHeight - 4) + 'px';
        ids[i].children[2].value = '';
        ids[i].children[2].style.height = '20px';
    }
    }
}

// Acción de copiar resultados
document.getElementById("copiar").onclick = function () {
    let res = document.getElementById('resultado');
    navigator.clipboard.writeText(res.value);
}