// Acción de cargar transcripciones ya hechas
let modoTranscripciones = (e) => {
    let TransModeLoad = document.getElementById('cargarTranscripciones')
    TransModeLoad.innerHTML = `<textarea id='transcripcionHecha' onkeydown='botonDisable()'></textarea>
    <button id="cargarTranscripcionBoton" onclick='modoTransClick()' disabled>Cargar</button>
    <label id="cargarTranscripcionHecha" for="linea2">Cargar transcripción ya hecha</label>
    <input type="file" accept=".txt" class="cargarSubtitulosBotones" onchange='cargarTranscripcion()' id="linea2"/>
    <button id="cancelarTranscripcionBoton" onclick="modoTransCerrar()">Cancelar</button>`
    TransModeLoad.style.backgroundColor = 'rgba(90, 90, 90, 0.75)';
    TransModeLoad.style.zIndex = '20';
    TransModeLoad.style.display = null;
}

let modoTransClick = (e) => {
    let textodearena = document.getElementById('transcripcionHecha').value;
    let ids = din.children;
    {
        let res0 = textodearena;
        let resA = res0.match(/{{(.*?)}}/g);
        let DTEfiltro = /\b(DTE)\b/i;
        let DTfiltro = /\b(DT)\b/i;

        let resTotal = resA.length;
        let dinTotal = din.childElementCount;
        let valorFinal = resTotal - dinTotal;

        //console.log('valor final: ' + valorFinal + ' dinTotal: ' + dinTotal + ' resTotal: ' + resTotal)

        for (let i = 0; i < resA.length; i++) {
            let resB = resA[i].replace(/{{(.+)\|\|{1,3}/i, '')
            let index = 0;

            document.getElementById('per' + i).value = '';
            document.getElementById('ding' + i).value = '';
            document.getElementById('desp' + i).value = '';
            document.getElementById('per' + i).style.height = '20px';
            document.getElementById('ding' + i).style.height = '20px';
            document.getElementById('desp' + i).style.height = '20px';

            switch (true) {
                case DTEfiltro.test(resA[0]):
                    switch (true) {
                        case /{{(.+)\|\|\|/i.test(resA[i]):
                            let DTE3_0 = resA[i].replace(/{{(.+)\|\|{1,3}/i, '')
                            let DTE3_1 = DTE3_0.replace(/}}/i, '')
                            let DTE3_2 = DTE3_1.replace(/\s+$/i, '')
                            let DTE3_3 = DTE3_2.replace(/^\s+/i, '')
                            if (resTotal <= dinTotal) {
                                document.getElementById('ding' + i).value = DTE3_3;
                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                            }
                            else {
                                agreCargarSub()
                                document.getElementById('ding' + i).value = DTE3_3;
                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                textarenaResAdapt(true)
                                ids[i].children[8].removeAttribute('disabled', "");
                                ids[i].children[9].removeAttribute('disabled', "");
                            }
                            break

                            case /{{(.+)\|\|/i.test(resA[i]):
                            switch (/\[\[?.*?\]?\]/g.test(resB)) {
                                case true:
                                    
                                    let DTE2LineaCMD_START_1 = resB.match(/\[\[?.*?\]?\]/g)
                                    let DTE2LineaCMD_START_2 = DTE2LineaCMD_START_1.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                                    let DTE2LineaCMD_START_3 = resB.replace(/\[\[?.*?\]?\]/g, () => DTE2LineaCMD_START_2[index++]);

                                    let DTE2_1_1 = DTE2LineaCMD_START_3.split("|");
                                    let DTE2_1_2 = DTE2_1_1[0].replace(/\s+$/gi, '')
                                    let DTE2_1_3 = DTE2_1_2.replace(/^\s+/i, '')

                                    let DTE2_1_4 = DTE2_1_1[1].replace(/}}/gi, '')
                                    let DTE2_1_5 = DTE2_1_4.replace(/\s+$/gi, '')
                                    let DTE2_1_6 = DTE2_1_5.replace(/^\s+/i, '')

                                    let DTE2LineaCMD_END1 = DTE2_1_3.replace(/\(reemplazo_linea\)/g, '|')
                                    let DTE2LineaCMD_END2 = DTE2_1_6.replace(/\(reemplazo_linea\)/g, '|')

                                    if (resTotal <= dinTotal) {
                                        document.getElementById('per' + i).value = DTE2LineaCMD_END1;
                                        document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2LineaCMD_END2;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                    }
                                    else {
                                        agreCargarSub()
                                        document.getElementById('per' + i).value = DTE2LineaCMD_END1;
                                        document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2LineaCMD_END2;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        textarenaResAdapt(true)
                                        ids[i].children[8].removeAttribute('disabled', "");
                                        ids[i].children[9].removeAttribute('disabled', "");
                                    }
                                    console.log('si')
                                    break

                                case false:
                                    
                                    let DTE2_2_1 = resB.split("|");
                                    let DTE2_2_2 = DTE2_2_1[0].replace(/\s+$/gi, '')
                                    let DTE2_2_3 = DTE2_2_2.replace(/^\s+/i, '')

                                    let DTE2_2_4 = DTE2_2_1[1].replace(/}}/gi, '')
                                    let DTE2_2_5 = DTE2_2_4.replace(/\s+$/gi, '')
                                    let DTE2_2_6 = DTE2_2_5.replace(/^\s+/i, '')
                                    if (resTotal <= dinTotal) {
                                        document.getElementById('per' + i).value = DTE2_2_3;
                                        document.getElementById('per' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2_2_6;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                    }
                                    else {
                                        agreCargarSub()
                                        document.getElementById('per' + i).value = DTE2_2_3;
                                        document.getElementById('per' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2_2_6;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        textarenaResAdapt(true)
                                        ids[i].children[8].removeAttribute('disabled', "");
                                        ids[i].children[9].removeAttribute('disabled', "");
                                    }
                                    break
                            }
                            break

                            case /{{(.+)\|/i.test(resA[i]):
                                switch (/\[\[?.*?\]?\]/g.test(resB)) {
                                    case true:
                                        
                                        let DTE3LineaCMD_START_1 = resB.match(/\[\[?.*?\]?\]/g)
                                        let DTE3LineaCMD_START_2 = DTE3LineaCMD_START_1.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                                        let DTE3LineaCMD_START_3 = resB.replace(/\[\[?.*?\]?\]/g, () => DTE3LineaCMD_START_2[index++]);
    
                                        let DTE3_1_1 = DTE3LineaCMD_START_3.split("|");
                                        let DTE3_1_2 = DTE3_1_1[1].replace(/\s+$/gi, '')
                                        let DTE3_1_3 = DTE3_1_2.replace(/^\s+/i, '')
    
                                        let DTE3_1_4 = DTE3_1_1[2].replace(/}}/gi, '')
                                        let DTE3_1_5 = DTE3_1_4.replace(/\s+$/gi, '')
                                        let DTE3_1_6 = DTE3_1_5.replace(/^\s+/i, '')
    
                                        let DTE3_1_7 = DTE3_1_1[3].replace(/}}/gi, '')
                                        let DTE3_1_8 = DTE3_1_7.replace(/\s+$/gi, '')
                                        let DTE3_1_9 = DTE3_1_8.replace(/^\s+/i, '')
    
                                        let DTE3LineaCMD_END1 = DTE3_1_3.replace(/\(reemplazo_linea\)/g, '|')
                                        let DTE3LineaCMD_END2 = DTE3_1_6.replace(/\(reemplazo_linea\)/g, '|')
                                        let DTE3LineaCMD_END3 = DTE3_1_9.replace(/\(reemplazo_linea\)/g, '|')


                                        if (resTotal <= dinTotal) {
                                            document.getElementById('per' + i).value = DTE3LineaCMD_END1;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3LineaCMD_END2;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3LineaCMD_END3;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        }
                                        else {
                                            agreCargarSub()
                                            document.getElementById('per' + i).value = DTE3LineaCMD_END1;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3LineaCMD_END2;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3LineaCMD_END3;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                            textarenaResAdapt(true)
                                            ids[i].children[8].removeAttribute('disabled', "");
                                            ids[i].children[9].removeAttribute('disabled', "");
                                        }
                                        break
    
                                    case false:
                                        
                                        let DTE3_2_1 = resB.split("|");
                                        let DTE3_2_2 = DTE3_2_1[1].replace(/\s+$/gi, '')
                                        let DTE3_2_3 = DTE3_2_2.replace(/^\s+/i, '')
    
                                        let DTE3_2_4 = DTE3_2_1[2].replace(/}}/gi, '')
                                        let DTE3_2_5 = DTE3_2_4.replace(/\s+$/gi, '')
                                        let DTE3_2_6 = DTE3_2_5.replace(/^\s+/i, '')
    
                                        let DTE3_2_7 = DTE3_2_1[3].replace(/}}/gi, '')
                                        let DTE3_2_8 = DTE3_2_7.replace(/\s+$/gi, '')
                                        let DTE3_2_9 = DTE3_2_8.replace(/^\s+/i, '')

                                        if (resTotal <= dinTotal) {
                                            document.getElementById('per' + i).value = DTE3_2_3;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3_2_6;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3_2_9;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        }
                                        else {
                                            agreCargarSub()
                                            document.getElementById('per' + i).value = DTE3_2_3;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3_2_6;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3_2_9;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                            textarenaResAdapt(true)
                                            ids[i].children[8].removeAttribute('disabled', "");
                                            ids[i].children[9].removeAttribute('disabled', "");
                                        }
                                        break
                                }
                                break
    
                            default:
                                //console.log('error, se detecto una mezcla de transcripciones')
                                return
                    }
                    break

                case DTfiltro.test(resA[0]):
                    switch (true) { 
                        case DTfiltro.test(resA[i]):
                            switch (true) { 
                                case /{{(.+)\|\|/i.test(resA[i]):
                                    let DT3_1 = resB.replace(/}}/i, '')
                                    let DT3_2 = DT3_1.replace(/\s+$/i, '')
                                    let DT3_3 = DT3_2.replace(/^\s+/i, '')

                                    if (resTotal <= dinTotal) {
                                        document.getElementById('ding' + i).value = DT3_3;
                                        document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                    }
                                    else {
                                        agreCargarSub()
                                        document.getElementById('ding' + i).value = DT3_3;
                                        document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                        textarenaResAdapt(true)
                                    }
                                    break
        
                                case /{{(.+)\|/i.test(resA[i]):
                                    
                                    switch (/\[\[?.*?\]?\]/g.test(resB)) {
                                        case true:
                                            
                                            let DT2LineaCMD_START_1 = resB.match(/\[\[?.*?\]?\]/g)
                                            let DT2LineaCMD_START_2 = DT2LineaCMD_START_1.map(DT => DT.replace(/\|/g,'(reemplazo_linea)'));
                                            let DT2LineaCMD_START_3 = resB.replace(/\[\[?.*?\]?\]/g, () => DT2LineaCMD_START_2[index++]);
        
                                            let DT2_1_1 = DT2LineaCMD_START_3.split("|");
                                            let DT2_1_2 = DT2_1_1[1].replace(/\s+$/gi, '')
                                            let DT2_1_3 = DT2_1_2.replace(/^\s+/i, '')
        
                                            let DT2_1_4 = DT2_1_1[2].replace(/}}/gi, '')
                                            let DT2_1_5 = DT2_1_4.replace(/\s+$/gi, '')
                                            let DT2_1_6 = DT2_1_5.replace(/^\s+/i, '')
        
                                            let DT2LineaCMD_END1 = DT2_1_3.replace(/\(reemplazo_linea\)/g, '|')
                                            let DT2LineaCMD_END2 = DT2_1_6.replace(/\(reemplazo_linea\)/g, '|')
        
                                            if (resTotal <= dinTotal) {
                                                document.getElementById('per' + i).value = DT2LineaCMD_END1;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2LineaCMD_END2;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            }
                                            else {
                                                agreCargarSub()
                                                document.getElementById('per' + i).value = DT2LineaCMD_END1;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2LineaCMD_END2;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                                textarenaResAdapt(true)
                                                ids[i].children[8].removeAttribute('disabled', "");
                                                ids[i].children[9].removeAttribute('disabled', "");
                                            }
                                            break
        
                                        case false:
                                            
                                            let DT2_2_1 = resB.split("|");
                                            let DT2_2_2 = DT2_2_1[1].replace(/\s+$/gi, '')
                                            let DT2_2_3 = DT2_2_2.replace(/^\s+/i, '')
        
                                            let DT2_2_4 = DT2_2_1[2].replace(/}}/gi, '')
                                            let DT2_2_5 = DT2_2_4.replace(/\s+$/gi, '')
                                            let DT2_2_6 = DT2_2_5.replace(/^\s+/i, '')

                                            if (resTotal <= dinTotal) {
                                                document.getElementById('per' + i).value = DT2_2_3;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2_2_6;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            }
                                            else {
                                                agreCargarSub()
                                                document.getElementById('per' + i).value = DT2_2_3;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2_2_6;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                                textarenaResAdapt(true)
                                                ids[i].children[8].removeAttribute('disabled', "");
                                                ids[i].children[9].removeAttribute('disabled', "");
                                            }
                                            break
                                    }
                                    break
                                }
                            break

                        default:
                            //console.log('error, se detecto una mezcla de transcripciones')
                            return
                    }
                    break
                }
            }
    }
    modoTransCerrar()
}

let modoTransCerrar = (e) => {
    let TransModeLoad = document.getElementById('cargarTranscripciones')
    TransModeLoad.innerHTML = `<textarea id='transcripcionHecha'></textarea><input type="file" accept=".txt" id="linea2"/>`
    TransModeLoad.style.backgroundColor = null;
    TransModeLoad.style.zIndex = null;
    TransModeLoad.style.display = 'none';
}

function botonDisable() {
    let botonTrans = document.getElementById('cargarTranscripcionBoton')
    let textedearenusa = document.getElementById('transcripcionHecha').value
    if (textedearenusa.length >= 1) {
        botonTrans.removeAttribute('disabled', "");
    } else {
        botonTrans.setAttribute('disabled', "");
    }
};


function cargarTranscripcion() {
    let ids = din.children;
    let inputEsp = document.getElementById('linea2');
    let inputEspRes = inputEsp.files[0];
    let fileEsp = new FileReader();
    fileEsp.readAsText(inputEspRes);
    fileEsp.onload = function () {
        let res0 = fileEsp.result;
        let resA = res0.match(/{{(.*?)}}/g);
        let DTEfiltro = /\b(DTE)\b/i;
        let DTfiltro = /\b(DT)\b/i;

        let resTotal = resA.length;
        let dinTotal = din.childElementCount;
        let valorFinal = resTotal - dinTotal;

        //console.log('valor final: ' + valorFinal + ' dinTotal: ' + dinTotal + ' resTotal: ' + resTotal)

        for (let i = 0; i < resA.length; i++) {
            let resB = resA[i].replace(/{{(.+)\|\|{1,3}/i, '')
            let index = 0;

            document.getElementById('per' + i).value = '';
            document.getElementById('ding' + i).value = '';
            document.getElementById('desp' + i).value = '';
            document.getElementById('per' + i).style.height = '20px';
            document.getElementById('ding' + i).style.height = '20px';
            document.getElementById('desp' + i).style.height = '20px';

            switch (true) {
                case DTEfiltro.test(resA[0]):
                    switch (true) {
                        case /{{(.+)\|\|\|/i.test(resA[i]):
                            let DTE3_0 = resA[i].replace(/{{(.+)\|\|{1,3}/i, '')
                            let DTE3_1 = DTE3_0.replace(/}}/i, '')
                            let DTE3_2 = DTE3_1.replace(/\s+$/i, '')
                            let DTE3_3 = DTE3_2.replace(/^\s+/i, '')
                            if (resTotal <= dinTotal) {
                                document.getElementById('ding' + i).value = DTE3_3;
                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                            }
                            else {
                                agreCargarSub()
                                document.getElementById('ding' + i).value = DTE3_3;
                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                textarenaResAdapt(true)
                                ids[i].children[8].removeAttribute('disabled', "");
                                ids[i].children[9].removeAttribute('disabled', "");
                            }
                            break

                            case /{{(.+)\|\|/i.test(resA[i]):
                            switch (/\[\[?.*?\]?\]/g.test(resB)) {
                                case true:
                                    
                                    let DTE2LineaCMD_START_1 = resB.match(/\[\[?.*?\]?\]/g)
                                    let DTE2LineaCMD_START_2 = DTE2LineaCMD_START_1.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                                    let DTE2LineaCMD_START_3 = resB.replace(/\[\[?.*?\]?\]/g, () => DTE2LineaCMD_START_2[index++]);

                                    let DTE2_1_1 = DTE2LineaCMD_START_3.split("|");
                                    let DTE2_1_2 = DTE2_1_1[0].replace(/\s+$/gi, '')
                                    let DTE2_1_3 = DTE2_1_2.replace(/^\s+/i, '')

                                    let DTE2_1_4 = DTE2_1_1[1].replace(/}}/gi, '')
                                    let DTE2_1_5 = DTE2_1_4.replace(/\s+$/gi, '')
                                    let DTE2_1_6 = DTE2_1_5.replace(/^\s+/i, '')

                                    let DTE2LineaCMD_END1 = DTE2_1_3.replace(/\(reemplazo_linea\)/g, '|')
                                    let DTE2LineaCMD_END2 = DTE2_1_6.replace(/\(reemplazo_linea\)/g, '|')

                                    if (resTotal <= dinTotal) {
                                        document.getElementById('per' + i).value = DTE2LineaCMD_END1;
                                        document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2LineaCMD_END2;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                    }
                                    else {
                                        agreCargarSub()
                                        document.getElementById('per' + i).value = DTE2LineaCMD_END1;
                                        document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2LineaCMD_END2;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        textarenaResAdapt(true)
                                        ids[i].children[8].removeAttribute('disabled', "");
                                        ids[i].children[9].removeAttribute('disabled', "");
                                    }
                                    console.log('si')
                                    break

                                case false:
                                    
                                    let DTE2_2_1 = resB.split("|");
                                    let DTE2_2_2 = DTE2_2_1[0].replace(/\s+$/gi, '')
                                    let DTE2_2_3 = DTE2_2_2.replace(/^\s+/i, '')

                                    let DTE2_2_4 = DTE2_2_1[1].replace(/}}/gi, '')
                                    let DTE2_2_5 = DTE2_2_4.replace(/\s+$/gi, '')
                                    let DTE2_2_6 = DTE2_2_5.replace(/^\s+/i, '')
                                    if (resTotal <= dinTotal) {
                                        document.getElementById('per' + i).value = DTE2_2_3;
                                        document.getElementById('per' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2_2_6;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                    }
                                    else {
                                        agreCargarSub()
                                        document.getElementById('per' + i).value = DTE2_2_3;
                                        document.getElementById('per' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                        document.getElementById('desp' + i).value = DTE2_2_6;
                                        document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        textarenaResAdapt(true)
                                        ids[i].children[8].removeAttribute('disabled', "");
                                        ids[i].children[9].removeAttribute('disabled', "");
                                    }
                                    break
                            }
                            break

                            case /{{(.+)\|/i.test(resA[i]):
                                switch (/\[\[?.*?\]?\]/g.test(resB)) {
                                    case true:
                                        
                                        let DTE3LineaCMD_START_1 = resB.match(/\[\[?.*?\]?\]/g)
                                        let DTE3LineaCMD_START_2 = DTE3LineaCMD_START_1.map(DTE => DTE.replace(/\|/g,'(reemplazo_linea)'));
                                        let DTE3LineaCMD_START_3 = resB.replace(/\[\[?.*?\]?\]/g, () => DTE3LineaCMD_START_2[index++]);
    
                                        let DTE3_1_1 = DTE3LineaCMD_START_3.split("|");
                                        let DTE3_1_2 = DTE3_1_1[1].replace(/\s+$/gi, '')
                                        let DTE3_1_3 = DTE3_1_2.replace(/^\s+/i, '')
    
                                        let DTE3_1_4 = DTE3_1_1[2].replace(/}}/gi, '')
                                        let DTE3_1_5 = DTE3_1_4.replace(/\s+$/gi, '')
                                        let DTE3_1_6 = DTE3_1_5.replace(/^\s+/i, '')
    
                                        let DTE3_1_7 = DTE3_1_1[3].replace(/}}/gi, '')
                                        let DTE3_1_8 = DTE3_1_7.replace(/\s+$/gi, '')
                                        let DTE3_1_9 = DTE3_1_8.replace(/^\s+/i, '')
    
                                        let DTE3LineaCMD_END1 = DTE3_1_3.replace(/\(reemplazo_linea\)/g, '|')
                                        let DTE3LineaCMD_END2 = DTE3_1_6.replace(/\(reemplazo_linea\)/g, '|')
                                        let DTE3LineaCMD_END3 = DTE3_1_9.replace(/\(reemplazo_linea\)/g, '|')


                                        if (resTotal <= dinTotal) {
                                            document.getElementById('per' + i).value = DTE3LineaCMD_END1;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3LineaCMD_END2;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3LineaCMD_END3;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        }
                                        else {
                                            agreCargarSub()
                                            document.getElementById('per' + i).value = DTE3LineaCMD_END1;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3LineaCMD_END2;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3LineaCMD_END3;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                            textarenaResAdapt(true)
                                            ids[i].children[8].removeAttribute('disabled', "");
                                            ids[i].children[9].removeAttribute('disabled', "");
                                        }
                                        break
    
                                    case false:
                                        
                                        let DTE3_2_1 = resB.split("|");
                                        let DTE3_2_2 = DTE3_2_1[1].replace(/\s+$/gi, '')
                                        let DTE3_2_3 = DTE3_2_2.replace(/^\s+/i, '')
    
                                        let DTE3_2_4 = DTE3_2_1[2].replace(/}}/gi, '')
                                        let DTE3_2_5 = DTE3_2_4.replace(/\s+$/gi, '')
                                        let DTE3_2_6 = DTE3_2_5.replace(/^\s+/i, '')
    
                                        let DTE3_2_7 = DTE3_2_1[3].replace(/}}/gi, '')
                                        let DTE3_2_8 = DTE3_2_7.replace(/\s+$/gi, '')
                                        let DTE3_2_9 = DTE3_2_8.replace(/^\s+/i, '')

                                        if (resTotal <= dinTotal) {
                                            document.getElementById('per' + i).value = DTE3_2_3;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3_2_6;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3_2_9;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                        }
                                        else {
                                            agreCargarSub()
                                            document.getElementById('per' + i).value = DTE3_2_3;
                                            document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('ding' + i).value = DTE3_2_6;
                                            document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            document.getElementById('desp' + i).value = DTE3_2_9;
                                            document.getElementById('desp' + i).style.height = (document.getElementById("desp" + i).scrollHeight - 4) + 'px';
                                            textarenaResAdapt(true)
                                            ids[i].children[8].removeAttribute('disabled', "");
                                            ids[i].children[9].removeAttribute('disabled', "");
                                        }
                                        break
                                }
                                break
    
                            default:
                                //console.log('error, se detecto una mezcla de transcripciones')
                                return
                    }
                    break

                case DTfiltro.test(resA[0]):
                    switch (true) { 
                        case DTfiltro.test(resA[i]):
                            switch (true) { 
                                case /{{(.+)\|\|/i.test(resA[i]):
                                    let DT3_1 = resB.replace(/}}/i, '')
                                    let DT3_2 = DT3_1.replace(/\s+$/i, '')
                                    let DT3_3 = DT3_2.replace(/^\s+/i, '')

                                    if (resTotal <= dinTotal) {
                                        document.getElementById('ding' + i).value = DT3_3;
                                        document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                    }
                                    else {
                                        agreCargarSub()
                                        document.getElementById('ding' + i).value = DT3_3;
                                        document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                        textarenaResAdapt(true)
                                    }
                                    break
        
                                case /{{(.+)\|/i.test(resA[i]):
                                    
                                    switch (/\[\[?.*?\]?\]/g.test(resB)) {
                                        case true:
                                            
                                            let DT2LineaCMD_START_1 = resB.match(/\[\[?.*?\]?\]/g)
                                            let DT2LineaCMD_START_2 = DT2LineaCMD_START_1.map(DT => DT.replace(/\|/g,'(reemplazo_linea)'));
                                            let DT2LineaCMD_START_3 = resB.replace(/\[\[?.*?\]?\]/g, () => DT2LineaCMD_START_2[index++]);
        
                                            let DT2_1_1 = DT2LineaCMD_START_3.split("|");
                                            let DT2_1_2 = DT2_1_1[1].replace(/\s+$/gi, '')
                                            let DT2_1_3 = DT2_1_2.replace(/^\s+/i, '')
        
                                            let DT2_1_4 = DT2_1_1[2].replace(/}}/gi, '')
                                            let DT2_1_5 = DT2_1_4.replace(/\s+$/gi, '')
                                            let DT2_1_6 = DT2_1_5.replace(/^\s+/i, '')
        
                                            let DT2LineaCMD_END1 = DT2_1_3.replace(/\(reemplazo_linea\)/g, '|')
                                            let DT2LineaCMD_END2 = DT2_1_6.replace(/\(reemplazo_linea\)/g, '|')
        
                                            if (resTotal <= dinTotal) {
                                                document.getElementById('per' + i).value = DT2LineaCMD_END1;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2LineaCMD_END2;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            }
                                            else {
                                                agreCargarSub()
                                                document.getElementById('per' + i).value = DT2LineaCMD_END1;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2LineaCMD_END2;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                                textarenaResAdapt(true)
                                                ids[i].children[8].removeAttribute('disabled', "");
                                                ids[i].children[9].removeAttribute('disabled', "");
                                            }
                                            break
        
                                        case false:
                                            
                                            let DT2_2_1 = resB.split("|");
                                            let DT2_2_2 = DT2_2_1[1].replace(/\s+$/gi, '')
                                            let DT2_2_3 = DT2_2_2.replace(/^\s+/i, '')
        
                                            let DT2_2_4 = DT2_2_1[2].replace(/}}/gi, '')
                                            let DT2_2_5 = DT2_2_4.replace(/\s+$/gi, '')
                                            let DT2_2_6 = DT2_2_5.replace(/^\s+/i, '')

                                            if (resTotal <= dinTotal) {
                                                document.getElementById('per' + i).value = DT2_2_3;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2_2_6;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                            }
                                            else {
                                                agreCargarSub()
                                                document.getElementById('per' + i).value = DT2_2_3;
                                                document.getElementById('per' + i).style.height = (document.getElementById("per" + i).scrollHeight - 4) + 'px';
                                                document.getElementById('ding' + i).value = DT2_2_6;
                                                document.getElementById('ding' + i).style.height = (document.getElementById("ding" + i).scrollHeight - 4) + 'px';
                                                textarenaResAdapt(true)
                                                ids[i].children[8].removeAttribute('disabled', "");
                                                ids[i].children[9].removeAttribute('disabled', "");
                                            }
                                            break
                                    }
                                    break
                                }
                            break

                        default:
                            //console.log('error, se detecto una mezcla de transcripciones')
                            return
                    }
                    break
                }
            }
        }
        modoTransCerrar()
};
