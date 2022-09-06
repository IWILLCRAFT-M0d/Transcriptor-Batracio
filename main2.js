// Función para mostrar el modo de cargar transcripciones
function modoTranscripciones() {
    let TransModeLoad = document.getElementById('cargarTranscripciones')
    TransModeLoad.innerHTML = `<textarea id='transcripcionHecha'></textarea>
    <button id="cargarTranscripcionBoton" onclick='subirTranscripcion()' disabled>Cargar</button>
    <label id="cargarTranscripcionHecha" for="linea2">Cargar transcripción ya hecha</label>
    <input type="file" accept=".txt" class="cargarSubtitulosBotones" onchange='cargarTranscripcion()' id="linea2"/>
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
function subirTranscripcion() {
    let res0 = document.getElementById('transcripcionHecha').value;
    let resA = res0.match(/{{(.*?)}}/g);
    let DTEfiltro = /\b(DTE)\b/i;
    let DTfiltro = /\b(DT)\b/i;

    let resTotal = resA.length;

    for (let i = 0; i < resA.length; i++) {
        let resB = resA[i].replace(/{{\s*dte?\s*\|+\s*/i, '')
        let resC = resB.replace(/\s*}}/, '')

        let index = 0;

        switch (true) {
            case DTEfiltro.test(resA[0]):
                switch (true) {
                    case /{{(.+)\|\|\|/i.test(resA[i]):
                        cargarTranscripcionDisplayResults ('1', i, resTotal, resC)
                        break

                    case /{{(.+)\|\|/i.test(resA[i]):
                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DTE_2_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            let DTE_2_1_1 = DTE_2_1_0.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                            let DTE_2_1_2 = resC.replace(/\[\[?.*?\]?\]/g, () => DTE_2_1_1[index++]);
                            var DTE_2_N = DTE_2_1_2;
                        } else {
                            var DTE_2_N = resC;
                        }

                        let DTE_2_0 = DTE_2_N.split("|");
                        let DTE_2_0_1 = DTE_2_0[0].replace(/\s+$/, '')
                        let DTE_2_0_2 = DTE_2_0_1.replace(/^\s+/, '')
                        let DTE_2_1_1 = DTE_2_0[1].replace(/\s+$/, '')
                        let DTE_2_1_2 = DTE_2_1_1.replace(/^\s+/, '')
                        let DTE_2_0_F = DTE_2_0_2.replace(/\(reemplazo_linea\)/g, '|')
                        let DTE_2_1_F = DTE_2_1_2.replace(/\(reemplazo_linea\)/g, '|')

                        cargarTranscripcionDisplayResults ('2', i, resTotal, DTE_2_0_F, DTE_2_1_F)
                        break

                    case /{{(.+)\|/i.test(resA[i]):

                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DTE_1_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            let DTE_1_1_1 = DTE_1_1_0.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                            let DTE_1_1_2 = resC.replace(/\[\[?.*?\]?\]/g, () => DTE_1_1_1[index++]);
                            var DTE_1_N = DTE_1_1_2;
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
                        let DTE_1_0_F = DTE_1_0_2.replace(/\(reemplazo_linea\)/g, '|')
                        let DTE_1_1_F = DTE_1_1_2.replace(/\(reemplazo_linea\)/g, '|')
                        let DTE_1_2_F = DTE_1_2_2.replace(/\(reemplazo_linea\)/g, '|')

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
                        cargarTranscripcionDisplayResults ('1', i, resTotal, resC)
                        break

                    case /{{(.+)\|/i.test(resA[i]):
                        if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                            let DT_2_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                            let DT_2_1_1 = DT_2_1_0.map(DT => DT.replace(/\|/g,'(reemplazo_linea)'));
                            let DT_2_1_2 = resC.replace(/\[\[?.*?\]?\]/g, () => DT_2_1_1[index++]);
                            var DT_2_N = DT_2_1_2;
                        } else {
                            var DT_2_N = resC;
                        }

                        let DT_2_0 = DT_2_N.split("|");
                        let DT_2_0_1 = DT_2_0[0].replace(/\s+$/, '')
                        let DT_2_0_2 = DT_2_0_1.replace(/^\s+/, '')
                        let DT_2_1_1 = DT_2_0[1].replace(/\s+$/, '')
                        let DT_2_1_2 = DT_2_1_1.replace(/^\s+/, '')
                        let DT_2_0_F = DT_2_0_2.replace(/\(reemplazo_linea\)/g, '|')
                        let DT_2_1_F = DT_2_1_2.replace(/\(reemplazo_linea\)/g, '|')

                        cargarTranscripcionDisplayResults ('2', i, resTotal, DT_2_0_F, DT_2_1_F)
                        break

                    default:
                        //console.log('error, se detecto una mezcla de transcripciones')
                        return
                }
                break
        }
    }
    modoTranscripcionesCerrar()
}

// Función para cargar transcripciones desde un archivo
function cargarTranscripcion() {
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

        let resA = res0.match(/{{(.*?)}}/g);
        let DTEfiltro = /\b(DTE)\b/i;
        let DTfiltro = /\b(DT)\b/i;

        let resTotal = resA.length;

        for (let i = 0; i < resA.length; i++) {
            let resB = resA[i].replace(/{{\s*dte?\s*\|+\s*/i, '')
            let resC = resB.replace(/\s*}}/, '')

            let index = 0;

            switch (true) {
                case DTEfiltro.test(resA[0]):
                    switch (true) {
                        case /{{(.+)\|\|\|/i.test(resA[i]):
                            cargarTranscripcionDisplayResults ('1', i, resTotal, resC)
                            break

                        case /{{(.+)\|\|/i.test(resA[i]):
                            if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                                let DTE_2_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                                let DTE_2_1_1 = DTE_2_1_0.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                                let DTE_2_1_2 = resC.replace(/\[\[?.*?\]?\]/g, () => DTE_2_1_1[index++]);
                                var DTE_2_N = DTE_2_1_2;
                            } else {
                                var DTE_2_N = resC;
                            }

                            let DTE_2_0 = DTE_2_N.split("|");
                            let DTE_2_0_1 = DTE_2_0[0].replace(/\s+$/, '')
                            let DTE_2_0_2 = DTE_2_0_1.replace(/^\s+/, '')
                            let DTE_2_1_1 = DTE_2_0[1].replace(/\s+$/, '')
                            let DTE_2_1_2 = DTE_2_1_1.replace(/^\s+/, '')
                            let DTE_2_0_F = DTE_2_0_2.replace(/\(reemplazo_linea\)/g, '|')
                            let DTE_2_1_F = DTE_2_1_2.replace(/\(reemplazo_linea\)/g, '|')

                            cargarTranscripcionDisplayResults ('2', i, resTotal, DTE_2_0_F, DTE_2_1_F)
                            break

                        case /{{(.+)\|/i.test(resA[i]):

                            if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                                let DTE_1_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                                let DTE_1_1_1 = DTE_1_1_0.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                                let DTE_1_1_2 = resC.replace(/\[\[?.*?\]?\]/g, () => DTE_1_1_1[index++]);
                                var DTE_1_N = DTE_1_1_2;
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
                            let DTE_1_0_F = DTE_1_0_2.replace(/\(reemplazo_linea\)/g, '|')
                            let DTE_1_1_F = DTE_1_1_2.replace(/\(reemplazo_linea\)/g, '|')
                            let DTE_1_2_F = DTE_1_2_2.replace(/\(reemplazo_linea\)/g, '|')

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
                            cargarTranscripcionDisplayResults ('1', i, resTotal, resC)
                            break

                        case /{{(.+)\|/i.test(resA[i]):
                            if ((/\[\[?.*?\]?\]/g.test(resC)) === true) {
                                let DT_2_1_0 = resC.match(/\[\[?.*?\]?\]/g);
                                let DT_2_1_1 = DT_2_1_0.map(DT => DT.replace(/\|/g,'(reemplazo_linea)'));
                                let DT_2_1_2 = resC.replace(/\[\[?.*?\]?\]/g, () => DT_2_1_1[index++]);
                                var DT_2_N = DT_2_1_2;
                            } else {
                                var DT_2_N = resC;
                            }

                            let DT_2_0 = DT_2_N.split("|");
                            let DT_2_0_1 = DT_2_0[0].replace(/\s+$/, '')
                            let DT_2_0_2 = DT_2_0_1.replace(/^\s+/, '')
                            let DT_2_1_1 = DT_2_0[1].replace(/\s+$/, '')
                            let DT_2_1_2 = DT_2_1_1.replace(/^\s+/, '')
                            let DT_2_0_F = DT_2_0_2.replace(/\(reemplazo_linea\)/g, '|')
                            let DT_2_1_F = DT_2_1_2.replace(/\(reemplazo_linea\)/g, '|')

                            cargarTranscripcionDisplayResults ('2', i, resTotal, DT_2_0_F, DT_2_1_F)
                            break
    
                        default:
                            //console.log('error, se detecto una mezcla de transcripciones')
                            return
                    }
                    break
            }
        }
        modoTranscripcionesCerrar()
    }
};

// Función para cargar resultados de transcripciones hechas
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