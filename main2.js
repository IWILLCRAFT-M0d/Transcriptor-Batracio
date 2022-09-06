// Función para mostrar el modo de cargar transcripciones
function modoTranscripciones() {
    let TransModeLoad = document.getElementById('cargarTranscripciones')
    TransModeLoad.innerHTML = `<textarea id='transcripcionHecha'></textarea>
    <button id="cargarTranscripcionBoton" onclick='transcripcionTexto()' disabled>Cargar</button>
    <label id="cargarTranscripcionHecha" for="linea2">Cargar transcripción ya hecha</label>
    <input type="file" accept=".txt" class="cargarSubtitulosBotones" onchange='transcripcionArchivo()' id="linea2"/>
    <button id="cancelarTranscripcionBoton" onclick="modoTranscripcionesCerrar()">Cancelar</button>`
    TransModeLoad.style.backgroundColor = 'rgba(90, 90, 90, 0.75)';
    TransModeLoad.style.zIndex = '20';
    TransModeLoad.style.display = null;
}

// Función que revisa cuando el usuario esta escribiendo en el textarea para cargar transcripciones
document.getElementById('cargarTranscripciones').addEventListener('keydown', () => {
    let bTH = document.getElementById('cargarTranscripcionBoton')
    if (document.getElementById('transcripcionHecha').value.length > 1) {
        bTH.removeAttribute('disabled', "");
    } else {
        bTH.setAttribute('disabled', "");
    }
});

// Función que esconde los elementos del modo cargar transcripciones
function modoTranscripcionesCerrar () {
    let TranscriptionModeLoad = document.getElementById('cargarTranscripciones')
    TranscriptionModeLoad.innerHTML = `<textarea id='transcripcionHecha'></textarea><input type="file" accept=".txt" id="linea2"/>`
    TranscriptionModeLoad.style.backgroundColor = null;
    TranscriptionModeLoad.style.zIndex = null;
    TranscriptionModeLoad.style.display = 'none';
}

// Función para cargar transcripciones desde el textarea
function transcripcionTexto() {
    let res0 = document.getElementById('transcripcionHecha').value;
    trancripcionesMetodo(res0)
    modoTranscripcionesCerrar()
}

// Función para cargar transcripciones desde un archivo
function transcripcionArchivo() {
    let inputEsp = document.getElementById('linea2');
    let inputEspRes = inputEsp.files[0];
    let fileEsp = new FileReader();
    fileEsp.readAsText(inputEspRes);
    fileEsp.onload = function () {
        let res0 = fileEsp.result;
        if (/{{(.*?)}}/.test(res0) === false) {
            console.log('error')
            return
        }
        trancripcionesMetodo(res0)
        modoTranscripcionesCerrar()
    }
};

// Función para desplegar resultados de transcripciones
function cargarTranscripcionDisplayResults(finger, loop, valores, caso1, caso2, caso3) {
    let numeroResultados = finger
    let resTotal = valores
    let dinTotal = din.childElementCount
    switch (numeroResultados) {
        case '1':
            if (resTotal <= dinTotal) {
                document.getElementById('ding' + loop).value = caso1;
                document.getElementById('ding' + loop).style.height = (document.getElementById('ding' + loop).scrollHeight - 4) + 'px';
            }
            else {
                nuevaCasilla('auto')
                document.getElementById('ding' + loop).value = caso1;
                document.getElementById('ding' + loop).style.height = (document.getElementById('ding' + loop).scrollHeight - 4) + 'px';
                textarenaResAdapt(true)
                ids[loop].children[8].removeAttribute('disabled', '');
                ids[loop].children[9].removeAttribute('disabled', '');
            }
            break

        case '2':
            if (resTotal <= dinTotal) {
                document.getElementById('per' + loop).value = caso1;
                document.getElementById('per' + loop).style.height = (document.getElementById('per' + loop).scrollHeight - 4) + 'px';
                document.getElementById('ding' + loop).value = caso2;
                document.getElementById('ding' + loop).style.height = (document.getElementById('ding' + loop).scrollHeight - 4) + 'px';
            }
            else {
                nuevaCasilla('auto')
                document.getElementById('per' + loop).value = caso1;
                document.getElementById('per' + loop).style.height = (document.getElementById('per' + loop).scrollHeight - 4) + 'px';
                document.getElementById('ding' + loop).value = caso2;
                document.getElementById('ding' + loop).style.height = (document.getElementById('ding' + loop).scrollHeight - 4) + 'px';
                textarenaResAdapt(true)
                ids[loop].children[8].removeAttribute('disabled', '');
                ids[loop].children[9].removeAttribute('disabled', '');
            }
            break

        case '3':
            if (resTotal <= dinTotal) {
                document.getElementById('per' + loop).value = caso1;
                document.getElementById('per' + loop).style.height = (document.getElementById('per' + loop).scrollHeight - 4) + 'px';
                document.getElementById('ding' + loop).value = caso2;
                document.getElementById('ding' + loop).style.height = (document.getElementById('ding' + loop).scrollHeight - 4) + 'px';
                document.getElementById('desp' + loop).value = caso3;
                document.getElementById('desp' + loop).style.height = (document.getElementById('desp' + loop).scrollHeight - 4) + 'px';
            }
            else {
                nuevaCasilla('auto')
                document.getElementById('per' + loop).value = caso1;
                document.getElementById('per' + loop).style.height = (document.getElementById('per' + loop).scrollHeight - 4) + 'px';
                document.getElementById('ding' + loop).value = caso2;
                document.getElementById('ding' + loop).style.height = (document.getElementById('ding' + loop).scrollHeight - 4) + 'px';
                document.getElementById('desp' + loop).value = caso3;
                document.getElementById('desp' + loop).style.height = (document.getElementById('desp' + loop).scrollHeight - 4) + 'px';
                textarenaResAdapt(true)
                ids[loop].children[8].removeAttribute('disabled', '');
                ids[loop].children[9].removeAttribute('disabled', '');
            }
            break
    }
}

function detectorRedirecciones(split0, redireccionOriginal, numero, textoOriginal) {

    let filtroBotonValor0 = document.getElementById('filtroNombresBoton0');
    let filtroBotonValor1 = document.getElementById('filtroNombresBoton1');
    let filtroBotonValor2 = document.getElementById('filtroNombresBoton2');

    let anneBoonchuy = /(\[\[)?\b((ana|ann(e|a)?)(\s+(boo?(n|b)chuy))?)\b/gi;
    let sashaWaybright = /(\[\[)?\b(sasha?(\s+((w|g)aybri?g(ht|th)?))?)\b/gi;
    let marcyWu = /(\[\[)?\b((mar(c|k)(y|i))(\s+(u?wu))?)\b/gi;
    let sprigPlantar = /(\[\[)?\b((s?pr(i|o)?n?g)(\s+(pla?nt(a|e)?r))?)\b/gi;
    let pollyPlantar = /(\[\[)?\b((p?olly|poll?y)(\s+(pla?nt(a|e)?r))?)\b/gi;
    let hopPop = /(\[\[)?\b((hop|abu|pap(a|á))\s+(p|h)op(\s+(pla?nt(a|e)?r))?)\b/gi;
    let ivySundew = /(\[\[)?\b((iv(i|y)|sol)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?)\b/gi;
    let feliciaSundew = /(\[\[)?\b((felic(i|í)a)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?)\b/gi;
    let sylviaSundew = /(\[\[)?\b((s(y|i)lv(i|í)a)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?)\b/gi;
    let olivia = /(\[\[)?\b(((lady|se(n|ñ)orita)\s+)?(oliv((i|í)?a|(i|í)a?)))\b/gi;
    let yunan = /(\[\[)?\b(((general)\s+)?(ju(v|b)ina|yunn?an))\b/gi;
    let andrias = /(\[\[)?\b(((rey)\s+)?((an)?drias)(\s+(lev(ia|ai)(than|tan)))?)\b/gi;
    let grime = /(\[\[)?\b((cap(tain|it(á|a))n)\s+)?((grime(sy)?|graim|mugr(e|i)|grimos(o|in)|grimoth?y|mugrer?to))\b/gi;
    let percy = /(\[\[)?\b(perc(y|i))\b/gi;
    let braddock = /(\[\[)?\b(bradd?ock)\b/gi;
    let bog = /(\[\[)?\b(bog)\b/gi;

    switch (true) {
        //Humanos
        case anneBoonchuy.test(split0):
            let redireccionFix0 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Anne');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix0);

        case sashaWaybright.test(split0):
            let redireccionFix1 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Sasha');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix1);

        case marcyWu.test(split0):
            let redireccionFix2 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Marcy');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix2);


        //Ranas: familia Plantar
        case sprigPlantar.test(split0):
            let redireccionFix3 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Sprig');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix3);

        case pollyPlantar.test(split0):
            let redireccionFix4 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Polly');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix4);

        case hopPop.test(split0):
            switch (true) {
                case filtroBotonValor0.checked:
                let redireccionFix5_1 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Abu Hop');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix5_1);

                case filtroBotonValor1.checked:
                let redireccionFix5_2 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Hop Pop');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix5_2);

                case filtroBotonValor2.checked:
                let redireccionFix5_3 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Papá Hop');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix5_3);
            }


        //Ranas: familia Sundew/Rocío
        case ivySundew.test(split0):
            let redireccionFix6 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Ivy'); //esto no es un error, realmente lo deje como Ivy en caso de tener el modo latino activado... de verdad que nombre tan malo le pusieron en latino
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix6);

        case feliciaSundew.test(split0):

            if (filtroBotonValor0.checked === true) {
                let redireccionFix = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Felicía');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            } else {
                let redireccionFix = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Felicia');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            }

        case sylviaSundew.test(split0):

            if (filtroBotonValor1.checked === true) {
                let redireccionFix = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Sylvia');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            } else {
                let redireccionFix = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Silvia');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            }
        
        
        //Tritones
        case olivia.test(split0):
            let redireccionFix7 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Olivia');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix7);

        case yunan.test(split0):
            if (filtroBotonValor0.checked === true) {
                let redireccionFix = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Juvina');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            } else {
                let redireccionFix = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Yunan');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            }

        case andrias.test(split0):
            let redireccionFix8 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Andrias');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix8);

        case grime.test(split0):
            switch (true) {
                case filtroBotonValor0.checked:
                let redireccionFix9_1 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Mugre');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix9_1);

                case filtroBotonValor1.checked:
                let redireccionFix9_2 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Grime');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix9_2);

                case filtroBotonValor2.checked:
                let redireccionFix9_3 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Grimoso');
                    return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix9_3);
            }

        case braddock.test(split0):
            let redireccionFix10 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Braddock');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix10);

        case percy.test(split0):
            let redireccionFix11 = redireccionOriginal[numero].replace(/\[\[?.*?\]?\]/g, 'Percy');
            return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix11);
        
        default:
            if ((/\|/g.test(textoOriginal)) === true) {
                let redireccionFix = redireccionOriginal[numero].replace(/\|/g, '<lineatemp>');
                return textoOriginal.replace(/\[\[?.*?\]?\]/g, redireccionFix);
            } else {
                return textoOriginal
            }
    }
}

// Función para cargar transcripciones
function trancripcionesMetodo(contenidoTranscripcion) {
    let resA = contenidoTranscripcion.match(/{{(.*?)}}/g);
    let DTEfiltro = /\b(DTE)\b/i;
    let DTfiltro = /\b(DT)\b/i;
    let resTotal = resA.length;
    for (let i = 0; i < resA.length; i++) {
        let resB = resA[i].replace(/{{\s*dte?\s*\|+\s*/i, '')
        let resC = resB.replace(/\s*}}/, '')

        switch (true) {
            case DTEfiltro.test(resA[0]):
                switch (true) {
                    case /{{(.+)\|\|\|/i.test(resA[i]):
                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DTE_3_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            if ((/\|/g.test(resC)) === true) {
                                for (let j = 0; j < DTE_3_1_0.length; j++) {
                                    let DTE_3_1_1 = DTE_3_1_0[j].split('|');
                                    var DTE_3_N = detectorRedirecciones(DTE_3_1_1[0], DTE_3_1_0, j, resC)
                                }
                            } else {
                                for (let j = 0; j < DTE_3_1_0.length; j++) {
                                    let DTE_3_1_1 = DTE_3_1_0[j];
                                    var DTE_3_N = detectorRedirecciones(DTE_3_1_1, DTE_3_1_0, j, resC)
                                }
                            }
                        } else {
                            var DTE_3_N = resC;
                        }

                        let DTE_3_F = DTE_3_N.replace(/<lineatemp>/g, '|')

                        cargarTranscripcionDisplayResults ('1', i, resTotal, DTE_3_F)
                        break

                    case /{{(.+)\|\|/i.test(resA[i]):

                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DTE_2_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            if ((/\|/g.test(resC)) === true) {
                                for (let j = 0; j < DTE_2_1_0.length; j++) {
                                    let DTE_2_1_1 = DTE_2_1_0[j].split('|');
                                    var DTE_2_N = detectorRedirecciones(DTE_2_1_1[0], DTE_2_1_0, j, resC)
                                }
                            } else {
                                for (let j = 0; j < DTE_2_1_0.length; j++) {
                                    let DTE_2_1_1 = DTE_2_1_0[j];
                                    var DTE_2_N = detectorRedirecciones(DTE_2_1_1, DTE_2_1_0, j, resC)
                                }
                            }
                        } else {
                            var DTE_2_N = resC;
                        }

                        let DTE_2_0 = DTE_2_N.split("|");
                        let DTE_2_0_1 = DTE_2_0[0].replace(/\s+$/, '')
                        let DTE_2_0_2 = DTE_2_0_1.replace(/^\s+/, '')
                        let DTE_2_1_1 = DTE_2_0[1].replace(/\s+$/, '')
                        let DTE_2_1_2 = DTE_2_1_1.replace(/^\s+/, '')
                        let DTE_2_0_F = DTE_2_0_2.replace(/<lineatemp>/g, '|')
                        let DTE_2_1_F = DTE_2_1_2.replace(/<lineatemp>/g, '|')

                        cargarTranscripcionDisplayResults ('2', i, resTotal, DTE_2_0_F, DTE_2_1_F)
                        break

                    case /{{(.+)\|/i.test(resA[i]):

                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DTE_1_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            if ((/\|/g.test(resC)) === true) {
                                for (let j = 0; j < DTE_1_1_0.length; j++) {
                                    let DTE_1_1_1 = DTE_1_1_0[j].split('|');
                                    var DTE_1_N = detectorRedirecciones(DTE_1_1_1[0], DTE_1_1_0, j, resC)
                                }
                            } else {
                                for (let j = 0; j < DTE_1_1_0.length; j++) {
                                    let DTE_1_1_1 = DTE_1_1_0[j];
                                    var DTE_1_N = detectorRedirecciones(DTE_1_1_1, DTE_1_1_0, j, resC)
                                }
                            }
                        } else {
                            var DTE_1_N = resC;
                        }

                        let DTE_1_0 = DTE_1_N.split("|");
                        let DTE_1_0_1 = DTE_1_0[0].replace(/\s+$/, '')
                        let DTE_1_0_2 = DTE_1_0_1.replace(/^\s+/, '')
                        let DTE_1_1_1 = DTE_1_0[1].replace(/\s+$/, '')
                        let DTE_1_1_2 = DTE_1_1_1.replace(/^\s+/, '')
                        let DTE_1_2_1 = DTE_1_0[2].replace(/\s+$/, '')
                        let DTE_1_2_2 = DTE_1_2_1.replace(/^\s+/, '')
                        let DTE_1_0_F = DTE_1_0_2.replace(/<lineatemp>/g, '|')
                        let DTE_1_1_F = DTE_1_1_2.replace(/<lineatemp>/g, '|')
                        let DTE_1_2_F = DTE_1_2_2.replace(/<lineatemp>/g, '|')

                        cargarTranscripcionDisplayResults ('3', i, resTotal, DTE_1_0_F, DTE_1_1_F, DTE_1_2_F)
                        break

                    default:
                        //console.log('error, se detecto una mezcla de transcripciones')
                        return
                }
                break


            case DTfiltro.test(resA[0]):
                switch (true) {
                    case /{{(.+)\|\|/i.test(resA[i]):
                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DT_2_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            if ((/\|/g.test(resC)) === true) {
                                for (let j = 0; j < DT_2_1_0.length; j++) {
                                    let DT_2_1_1 = DT_2_1_0[j].split('|');
                                    var DT_2_N = detectorRedirecciones(DT_2_1_1[0], DT_2_1_0, j, resC)
                                }
                            } else {
                                for (let j = 0; j < DT_2_1_0.length; j++) {
                                    let DT_2_1_1 = DT_2_1_0[j];
                                    var DT_2_N = detectorRedirecciones(DT_2_1_1, DT_2_1_0, j, resC)
                                }
                            }
                        } else {
                            var DT_2_N = resC;
                        }

                        let DT_2_F = DT_2_N.replace(/<lineatemp>/g, '|')

                        cargarTranscripcionDisplayResults ('1', i, resTotal, DT_2_F)
                        break

                    case /{{(.+)\|/i.test(resA[i]):

                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DT_1_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            if ((/\|/g.test(resC)) === true) {
                                for (let j = 0; j < DT_1_1_0.length; j++) {
                                    let DT_1_1_1 = DT_1_1_0[j].split('|');
                                    var DT_1_N = detectorRedirecciones(DT_1_1_1[0], DT_1_1_0, j, resC)
                                }
                            } else {
                                for (let j = 0; j < DT_1_1_0.length; j++) {
                                    let DT_1_1_1 = DT_1_1_0[j];
                                    var DT_1_N = detectorRedirecciones(DT_1_1_1, DT_1_1_0, j, resC)
                                }
                            }
                        } else {
                            var DT_1_N = resC;
                        }

                        let DT_1_0 = DT_1_N.split("|");
                        let DT_1_0_1 = DT_1_0[0].replace(/\s+$/, '')
                        let DT_1_0_2 = DT_1_0_1.replace(/^\s+/, '')
                        let DT_1_1_1 = DT_1_0[1].replace(/\s+$/, '')
                        let DT_1_1_2 = DT_1_1_1.replace(/^\s+/, '')
                        let DT_1_0_F = DT_1_0_2.replace(/<lineatemp>/g, '|')
                        let DT_1_1_F = DT_1_1_2.replace(/<lineatemp>/g, '|')

                        cargarTranscripcionDisplayResults ('2', i, resTotal, DT_1_0_F, DT_1_1_F)
                        break

                    default:
                        //console.log('error, se detecto una mezcla de transcripciones')
                        return
                }
                break
        }
    }
}

// Función para cargar subtítulos
function cargarSubtitulosMain(lineaCSM, inputCSM) {
    let inputResultado = inputCSM.files[0];
    let archivo = new FileReader();
    archivo.readAsText(inputResultado);
    archivo.onload = function () {
        let res0 = archivo.result;
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
                let lineaCSMLoop = document.getElementById(lineaCSM + i);
                lineaCSMLoop.value = resE[i];
                lineaCSMLoop.style.height = '20px';
                lineaCSMLoop.style.height = (lineaCSMLoop.scrollHeight - 4) + 'px';
            }
        }
        else {
            for (let i = 0; i < valorFinal; i++) {
                nuevaCasilla('auto')
            }
            for (let i = 0; i < resF.length; i++) {
                let lineaCSMLoop = document.getElementById(lineaCSM + i);
                lineaCSMLoop.value = resE[i];
                lineaCSMLoop.style.height = '20px';
                lineaCSMLoop.style.height = (lineaCSMLoop.scrollHeight - 4) + 'px';
                textarenaResAdapt(true)
            }
            for (let i = 0; i < (resF.length - 1); i++) {
                ids[i].children[8].removeAttribute('disabled', "");
                ids[i].children[9].removeAttribute('disabled', "");
            }
        }
    }
}

// Cargar subtítulos en inglés
document.getElementById('csIng').addEventListener('change', function () {let inputEng = document.getElementById('csIng'); cargarSubtitulosMain('ding', inputEng)})

// Cargar subtítulos en español
document.getElementById('csEsp').addEventListener('change', function () {let inputEng = document.getElementById('csEsp'); cargarSubtitulosMain('desp', inputEng)})