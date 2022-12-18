// Función para cargar subtítulos o transcripciones
document.getElementById('menuBoxButton311').addEventListener('change', function (){
    if (/\.srt\b/i.test(document.getElementById('menuBoxButton311').files[0].name) === true) {
        loadFileMode()
    } else {
        transcripcionArchivo(document.getElementById('menuBoxButton311').files[0])
    }
})

{
let mb = document.getElementById('menuBox');
let mo = document.getElementById('menuOptions');
let tb = document.getElementById('transparentBackground');
let sss = document.getElementById('show_section_select');
let sr = document.getElementById('show_results');

let mbb01 = document.getElementById('menuBoxButton101');
let mbb02 = document.getElementById('menuBoxButton102');

let mbb11 = document.getElementById('menuBoxButton201');
let mbb12 = document.getElementById('menuBoxButton202');
let mbl11 = document.getElementById('menuBoxLabel201');


function timeout0() {
    document.getElementById('menuOptions').style.backgroundColor = 'transparent';
}

function timeout1() {
    mb.style.opacity = 1;
}

function timeout2() {
    mb.style.display = "none";
}

mo.addEventListener("click", () => {
    if (mb.style.display === 'none'){
        mo.innerHTML = "Ocultar opciones"
        mb.style.display = null;
        setTimeout(timeout0, 150)
        setTimeout(timeout1, 0)
    } else {
        mo.innerHTML = "Mostrar opciones"
        switch (langVal) {
            case 1:
                mo.removeAttribute('style');
                break
            
            case 2:
                mo.style.backgroundColor = '#24aa09';
                break
                
            case 3:
                mo.style.backgroundColor = '#c20a29';
                break
        }
        mb.style.opacity = 0;
        setTimeout(timeout2, 150)
    }
})


function closeBackgroundMode() {
    tb.style.display='none'
    sss.style.display='none'
    sr.style.display='none'
}

function showResultsMode() {
    document.getElementById('transparentBackground').removeAttribute('style')
    document.getElementById('show_results').removeAttribute('style')
    document.getElementById("resultadosTextarea").value = '';
    mo.innerHTML = "Mostrar opciones"
    switch (langVal) {
        case 1:
            mo.removeAttribute('style');
            break
        
        case 2:
            mo.style.backgroundColor = '#24aa09';
            break
            
        case 3:
            mo.style.backgroundColor = '#c20a29';
            break
    }
    mb.style.opacity = 0;
    setTimeout(timeout2, 150)
    for (let i = 0; i < din.children.length; i++) {

        let pers1 = document.getElementById("per" + i).value;
        let ingl1 = document.getElementById("ding" + i).value;
        let espa1 = document.getElementById("desp" + i).value;
        let pers2 = pers1.length;
        let ingl2 = ingl1.length;
        let espa2 = espa1.length;

        mostrarResultados(pers1, espa1, ingl1, pers2, espa2, ingl2)
    }
}

var langVal = 1
var modeVal = 1

mbb01.addEventListener("click", () => {
    langVal--
    switch (langVal) {
        case 1:
            document.getElementById('menuBox').removeAttribute('style');
            document.getElementById('menuBoxImg101').src = 'icons/bandera_en.svg';
            break
        
        case 2:
            document.getElementById('menuBox').style.backgroundColor = '#24aa09';
            document.getElementById('menuBoxImg101').src = 'icons/bandera_la.svg';
            break
            
        case 0:
            langVal = 3;
        case 3:
            document.getElementById('menuBox').style.backgroundColor = '#c20a29';
            document.getElementById('menuBoxImg101').src = 'icons/bandera_es.svg';
            break
    }
})
mbb02.addEventListener("click", () => {
    langVal++
    switch (langVal) {
        case 4:
            langVal = 1;
        case 1:
            document.getElementById('menuBox').removeAttribute('style');
            document.getElementById('menuBoxImg101').src = 'icons/bandera_en.svg';            
            break
        
        case 2:
            document.getElementById('menuBox').style.backgroundColor = '#24aa09';
            document.getElementById('menuBoxImg101').src = 'icons/bandera_la.svg';
            break

        case 3:
            document.getElementById('menuBox').style.backgroundColor = '#c20a29';
            document.getElementById('menuBoxImg101').src = 'icons/bandera_es.svg';
            break
    }
})

mbb11.addEventListener("click", () => {
    modeVal--
    switch (modeVal) {
        case 1:
            mbl11.innerHTML = 'Dual'
            break

        case 0:
            modeVal = 2
        case 2:
            mbl11.innerHTML = 'Solo'
            break
    }
    changeRowMode()
})
mbb12.addEventListener("click", () => {
    modeVal++
    switch (modeVal) {
        case 3:
            modeVal = 1
        case 1:
            mbl11.innerHTML = 'Dual'
            break

        case 2:
            mbl11.innerHTML = 'Solo'
            break
    }
    changeRowMode()
})

// Función para mostrar la pantalla de selección de sección
function loadFileMode() {
    tb.removeAttribute('style')
    sss.removeAttribute('style')
    mo.innerHTML = "Mostrar opciones"
    switch (langVal) {
        case 1:
            mo.removeAttribute('style');
            break
        
        case 2:
            mo.style.backgroundColor = '#24aa09';
            break
            
        case 3:
            mo.style.backgroundColor = '#c20a29';
            break
    }
    mb.style.opacity = 0;
    setTimeout(timeout2, 150)

    document.getElementById('section_select_ing').addEventListener("click", () => {
        cargarSubtitulosMain('ding', document.getElementById('menuBoxButton311'))
        closeBackgroundMode()
    })
    document.getElementById('section_select_esp').addEventListener("click", () => {
        cargarSubtitulosMain('desp', document.getElementById('menuBoxButton311'))
        closeBackgroundMode()
    })
}

}

// Función para cargar transcripciones desde el textarea
function transcripcionTexto() {
    let res0 = document.getElementById('transcripcionHecha').value;
    trancripcionesMetodo(res0)
    modoTranscripcionesCerrar()
}

// Función para cargar transcripciones desde un archivo
function transcripcionArchivo(transArchivo) {
    let fileEsp = new FileReader();
    fileEsp.readAsText(transArchivo);
    fileEsp.onload = function () {
        let res0 = fileEsp.result;
        if (/{{(.*?)}}/.test(res0) === false) {
            console.log('error')
            return
        }
        trancripcionesMetodo(res0)
    }
};

// Función para desplegar resultados de transcripciones
function cargarTranscripcionDisplayResults(numeroRes, loop, valores, caso1, caso2, caso3) {
    let numeroResultados = numeroRes
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
                ids[loop].children[6].removeAttribute('disabled');
                ids[loop].children[7].removeAttribute('disabled');
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
                ids[loop].children[6].removeAttribute('disabled');
                ids[loop].children[7].removeAttribute('disabled');
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
                ids[loop].children[6].removeAttribute('disabled');
                ids[loop].children[7].removeAttribute('disabled');
            }
            break
    }
}

// Función que reemplaza las redirecciones por los nombres normales al cargar transcripciones
function detectorRedirecciones(textoOriginal) {

    let anneBoonchuy = /(\[{2})?\b(ana|ann(e|a)?)(\s+(boo?(n|b)chuy))?\b((\|.*?)?\]{2})?/gi;
    let sashaWaybright = /(\[{2})?\bsasha?(\s+((w|g)aybri?g(ht|th)?))?\b((\|.*?)?\]{2})?/gi;
    let marcyWu = /(\[{2})?\b(mar(c|k)(y|i))(\s+(u?wu))?\b((\|.*?)?\]{2})?/gi;
    let sprigPlantar = /(\[{2})?\b(s?pr(i|o)?n?g)(\s+(pla?nt(a|e)?r))?\b((\|.*?)?\]{2})?/gi;
    let pollyPlantar = /(\[{2})?\b(p?olly|poll?y)(\s+(pla?nt(a|e)?r))?\b((\|.*?)?\]{2})?/gi;
    let hopPop = /(\[{2})?\b(hop|abu|pap(a|á))\s+(p|h)op(\s+(pla?nt(a|e)?r))?\b((\|.*?)?\]{2})?/gi;
    let ivySundew = /(\[{2})?\b(iv(i|y)|sol)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?\b((\|.*?)?\]{2})?/gi;
    let feliciaSundew = /(\[{2})?\b(felic(i|í)a)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?\b((\|.*?)?\]{2})?/gi;
    let sylviaSundew = /(\[{2})?\b(s(y|i)lv(i|í)a)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?\b((\|.*?)?\]{2})?/gi;
    let olivia = /(\[{2})?\b((lady|se(n|ñ)orita)\s+)?(oliv((i|í)?a|(i|í)a?))\b((\|.*?)?\]{2})?/gi;
    let yunan = /(\[{2})?\b((general)\s+)?(ju(v|b)ina|yunn?an)\b((\|.*?)?\]{2})?/gi;
    let andrias = /(\[{2})?\b((rey)\s+)?((an)?drias)(\s+(lev(ia|ai)(than|tan)))?\b((\|.*?)?\]{2})?/gi;
    let grime = /(\[{2})?\b((cap(tain|it(á|a))n)\s+)?(grime(sy)?|graim|mugr(e|i)|grimos(o|in)|grimoth?y|mugrer?to)\b((\|.*?)?\]{2})?/gi;
    let percy = /(\[{2})?\bperc(y|i)\b((\|.*?)?\]{2})?/gi;
    let braddock = /(\[{2})?\bbradd?ock\b((\|.*?)?\]{2})?/gi;
    let bog = /(\[{2})?\bbog\b((\|.*?)?\]{2})?/gi;

    // TRC = Text redirection change
    let TRC_0 = textoOriginal.replace(anneBoonchuy, 'Anne')
    let TRC_1 = TRC_0.replace(sashaWaybright, 'Sasha')
    let TRC_2 = TRC_1.replace(marcyWu, 'Marcy')
    let TRC_3 = TRC_2.replace(sprigPlantar, 'Sprig')
    let TRC_4 = TRC_3.replace(pollyPlantar, 'Polly')
    
    switch (langVal) {
        case 1:
            var TRC_5 = TRC_4.replace(hopPop, 'Hop Pop')
            break
        
        case 2:
            var TRC_5 = TRC_4.replace(hopPop, 'Abu Hop')
            break
        
        case 3:
            var TRC_5 = TRC_4.replace(hopPop, 'Papá Hop')
            break
    }
    
    let TRC_6 = TRC_5.replace(ivySundew, 'Ivy')
    let TRC_7 = TRC_6.replace(feliciaSundew, 'Felicía')
    let TRC_8 = TRC_7.replace(sylviaSundew, 'Silvía')
    let TRC_9 = TRC_8.replace(olivia, 'Lady Olivia')

    switch (langVal) {
        case 2:
            var TRC_10 = TRC_9.replace(yunan, 'Juvina')
            break
        
        default:
            var TRC_10 = TRC_9.replace(yunan, 'Yunan')
            break
    }

    let TRC_11 = TRC_10.replace(andrias, 'Andrias')
    
    switch (langVal) {
        case 1:
            var TRC_12 = TRC_11.replace(grime, 'Grime')
            break
        
        case 2:
            var TRC_12 = TRC_11.replace(grime, 'Mugre')
            break
        
        case 3:
            var TRC_12 = TRC_11.replace(grime, 'Mugroso')
            break
    }

    return TRC_12
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
        let resD = detectorRedirecciones(resC);
        let index = 0;

        switch (true) {
            case DTfiltro.test(resA[0]):
                switch (true) {
                    case /{{(.+)\|\|/i.test(resA[i]):
                        cargarTranscripcionDisplayResults ('1', i, resTotal, resD)
                        break

                    case /{{(.+)\|/i.test(resA[i]):
                        if (/\[\[?.*?\]?\]/g.test(resD) === true) {
                            let LR_0 = resD.match(/\[\[?.*?\]?\]/g)
                            let LR_1 = LR_0.map(DTE => DTE.replace(/\|/g,'<lineatemp>'));
                            var DT_1_F = resD.replace(/\[\[?.*?\]?\]/g, () => LR_1[index++]);
                        } else {
                            var DT_1_F = resD
                        }

                        let DT_1_S = DT_1_F.split("|");
                        let DT_1_0_1 = DT_1_S[0].replace(/\s+$/, '')
                        let DT_1_0_2 = DT_1_0_1.replace(/^\s+/, '')
                        let DT_1_1_1 = DT_1_S[1].replace(/\s+$/, '')
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

            case DTEfiltro.test(resA[0]):
                switch (true) {
                    case /{{(.+)\|\|\|/i.test(resA[i]):
                        cargarTranscripcionDisplayResults ('1', i, resTotal, resD)
                        break

                    case /{{(.+)\|\|/i.test(resA[i]):
                        if (/\[\[?.*?\]?\]/g.test(resD) === true) {
                            let LR_0 = resD.match(/\[\[?.*?\]?\]/g)
                            let LR_1 = LR_0.map(DTE => DTE.replace(/\|/g,'<lineatemp>'));
                            var DTE_2_F = resD.replace(/\[\[?.*?\]?\]/g, () => LR_1[index++]);
                        } else {
                            var DTE_2_F = resD
                        }

                        let DTE_2_S = DTE_2_F.split("|");
                        let DTE_2_0_1 = DTE_2_S[0].replace(/\s+$/, '')
                        let DTE_2_0_2 = DTE_2_0_1.replace(/^\s+/, '')
                        let DTE_2_1_1 = DTE_2_S[1].replace(/\s+$/, '')
                        let DTE_2_1_2 = DTE_2_1_1.replace(/^\s+/, '')
                        let DTE_2_0_F = DTE_2_0_2.replace(/<lineatemp>/g, '|')
                        let DTE_2_1_F = DTE_2_1_2.replace(/<lineatemp>/g, '|')

                        cargarTranscripcionDisplayResults ('2', i, resTotal, DTE_2_0_F, DTE_2_1_F)
                        break

                    case /{{(.+)\|/i.test(resA[i]):
                        if (/\[\[?.*?\]?\]/g.test(resD) === true) {
                            let LR_0 = resD.match(/\[\[?.*?\]?\]/g)
                            let LR_1 = LR_0.map(DTE => DTE.replace(/\|/g,'<lineatemp>'));
                            var DTE_1_F = resD.replace(/\[\[?.*?\]?\]/g, () => LR_1[index++]);
                        } else {
                            var DTE_1_F = resD
                        }

                        let DTE_1_S = DTE_1_F.split("|");
                        let DTE_1_0_1 = DTE_1_S[0].replace(/\s+$/, '')
                        let DTE_1_0_2 = DTE_1_0_1.replace(/^\s+/, '')
                        let DTE_1_1_1 = DTE_1_S[1].replace(/\s+$/, '')
                        let DTE_1_1_2 = DTE_1_1_1.replace(/^\s+/, '')
                        let DTE_1_2_1 = DTE_1_S[2].replace(/\s+$/, '')
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
                ids[i].children[6].removeAttribute('disabled');
                ids[i].children[7].removeAttribute('disabled');
            }
        }
    }
}