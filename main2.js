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

document.getElementById('show_results_copy').onclick = () => navigator.clipboard.writeText(document.getElementById('resultadosTextarea').value);

// Función para mostrar la pantalla de selección de sección
function loadFileMode() {
    transparentBackground.removeAttribute('style')
    showSectionSelect.removeAttribute('style')
    menuOptions.innerHTML = 'Mostrar opciones'
    switch (langVal) {
        case 1:
            menuOptions.removeAttribute('style');
            break
        
        case 2:
            menuOptions.style.backgroundColor = '#24aa09';
            break
            
        case 3:
            menuOptions.style.backgroundColor = '#c20a29';
            break
    }
    menuBox.style.opacity = 0;
    setTimeout(timeout2, 150)

    document.getElementById('section_select_ing').addEventListener('click', () => {
        loadSubs('ding')
        closeTransBack()
    })
    document.getElementById('section_select_esp').addEventListener('click', () => {
        loadSubs('desp')
        closeTransBack()
    })
}

// Función necesaria para adaptar el tamaño de la casilla al texto necesario usada en "loadTranscripResults"
function loadTranscripResultMain(ltrmLoop, ltrmCase) {
    ltrmLoop.value = ltrmCase;
    ltrmLoop.style.height = '30px';
    ltrmLoop.setAttribute('style', 'height: ' + (ltrmLoop.scrollHeight + 5) + 'px;');
    ltrmLoop.addEventListener('input', OnInput, false);
    if (ltrmLoop.style.height === '35px') {ltrmLoop.style.height = '30px';}
}

// Función para desplegar resultados de transcripciones
function loadTranscripResults(numberRes, loop, valores, case1, case2, case3) {
    let numeroResultados = numberRes
    let resTotal = valores
    let dinTotal = din.childElementCount
    let perLoop = document.getElementById('per' + loop)
    let dingLoop = document.getElementById('ding' + loop)
    let despLoop = document.getElementById('desp' + loop)
    switch (numeroResultados) {
        case '1':
            if (resTotal <= dinTotal) {
                loadTranscripResultMain(dingLoop, case1)
            }
            else {
                newBox('auto')
                loadTranscripResultMain(dingLoop, case1)
                ids[loop].children[6].removeAttribute('disabled');
                ids[loop].children[7].removeAttribute('disabled');
            }
            break

        case '2':
            if (resTotal <= dinTotal) {
                loadTranscripResultMain(perLoop, case1)
                loadTranscripResultMain(dingLoop, case2)
            }
            else {
                newBox('auto')
                loadTranscripResultMain(perLoop, case1)
                loadTranscripResultMain(dingLoop, case2)
                ids[loop].children[6].removeAttribute('disabled');
                ids[loop].children[7].removeAttribute('disabled');
            }
            break

        case '3':
            if (resTotal <= dinTotal) {
                loadTranscripResultMain(perLoop, case1)
                loadTranscripResultMain(dingLoop, case2)
                loadTranscripResultMain(despLoop, case3)
            }
            else {
                newBox('auto')
                loadTranscripResultMain(perLoop, case1)
                loadTranscripResultMain(dingLoop, case2)
                loadTranscripResultMain(despLoop, case3)
                ids[loop].children[6].removeAttribute('disabled');
                ids[loop].children[7].removeAttribute('disabled');
            }
            break
    }
}

// Función para cargar transcripciones
function transMetod(transText) {
    let resA = transText.match(/{{(.*?)}}/g);
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
                        loadTranscripResults ('1', i, resTotal, resD)
                        break

                    case /{{(.+)\|/i.test(resA[i]):
                        if (/\[\[?.*?\]?\]/g.test(resD) === true) {
                            let LR_0 = resD.match(/\[\[?.*?\]?\]/g)
                            let LR_1 = LR_0.map(DTE => DTE.replace(/\|/g,'<lineatemp>'));
                            var DT_1_F = resD.replace(/\[\[?.*?\]?\]/g, () => LR_1[index++]);
                        } else {
                            var DT_1_F = resD
                        }

                        let DT_1_S = DT_1_F.split('|');
                        let DT_1_0_1 = DT_1_S[0].replace(/\s+$/, '')
                        let DT_1_0_2 = DT_1_0_1.replace(/^\s+/, '')
                        let DT_1_1_1 = DT_1_S[1].replace(/\s+$/, '')
                        let DT_1_1_2 = DT_1_1_1.replace(/^\s+/, '')
                        let DT_1_0_F = DT_1_0_2.replace(/<lineatemp>/g, '|')
                        let DT_1_1_F = DT_1_1_2.replace(/<lineatemp>/g, '|')

                        loadTranscripResults ('2', i, resTotal, DT_1_0_F, DT_1_1_F)
                        break

                    default:
                        //console.log('error, se detecto una mezcla de transcripciones')
                        return
                }
                break

            case DTEfiltro.test(resA[0]):
                switch (true) {
                    case /{{(.+)\|\|\|/i.test(resA[i]):
                        loadTranscripResults ('1', i, resTotal, resD)
                        break

                    case /{{(.+)\|\|/i.test(resA[i]):
                        if (/\[\[?.*?\]?\]/g.test(resD) === true) {
                            let LR_0 = resD.match(/\[\[?.*?\]?\]/g)
                            let LR_1 = LR_0.map(DTE => DTE.replace(/\|/g,'<lineatemp>'));
                            var DTE_2_F = resD.replace(/\[\[?.*?\]?\]/g, () => LR_1[index++]);
                        } else {
                            var DTE_2_F = resD
                        }

                        let DTE_2_S = DTE_2_F.split('|');
                        let DTE_2_0_1 = DTE_2_S[0].replace(/\s+$/, '')
                        let DTE_2_0_2 = DTE_2_0_1.replace(/^\s+/, '')
                        let DTE_2_1_1 = DTE_2_S[1].replace(/\s+$/, '')
                        let DTE_2_1_2 = DTE_2_1_1.replace(/^\s+/, '')
                        let DTE_2_0_F = DTE_2_0_2.replace(/<lineatemp>/g, '|')
                        let DTE_2_1_F = DTE_2_1_2.replace(/<lineatemp>/g, '|')

                        loadTranscripResults ('2', i, resTotal, DTE_2_0_F, DTE_2_1_F)
                        break

                    case /{{(.+)\|/i.test(resA[i]):
                        if (/\[\[?.*?\]?\]/g.test(resD) === true) {
                            let LR_0 = resD.match(/\[\[?.*?\]?\]/g)
                            let LR_1 = LR_0.map(DTE => DTE.replace(/\|/g,'<lineatemp>'));
                            var DTE_1_F = resD.replace(/\[\[?.*?\]?\]/g, () => LR_1[index++]);
                        } else {
                            var DTE_1_F = resD
                        }

                        let DTE_1_S = DTE_1_F.split('|');
                        let DTE_1_0_1 = DTE_1_S[0].replace(/\s+$/, '')
                        let DTE_1_0_2 = DTE_1_0_1.replace(/^\s+/, '')
                        let DTE_1_1_1 = DTE_1_S[1].replace(/\s+$/, '')
                        let DTE_1_1_2 = DTE_1_1_1.replace(/^\s+/, '')
                        let DTE_1_2_1 = DTE_1_S[2].replace(/\s+$/, '')
                        let DTE_1_2_2 = DTE_1_2_1.replace(/^\s+/, '')
                        let DTE_1_0_F = DTE_1_0_2.replace(/<lineatemp>/g, '|')
                        let DTE_1_1_F = DTE_1_1_2.replace(/<lineatemp>/g, '|')
                        let DTE_1_2_F = DTE_1_2_2.replace(/<lineatemp>/g, '|')

                        loadTranscripResults ('3', i, resTotal, DTE_1_0_F, DTE_1_1_F, DTE_1_2_F)
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
function loadSubs(lineLS) {
    let fileLoad = new FileReader();
    fileLoad.readAsText(document.getElementById('menuBoxButton311').files[0]);
    fileLoad.onload = function () {
        let subTextFile = fileLoad.result;
        let resA = subTextFile.replace(/\d+(\r\n)\d+:\d+:\d+,\d+ --> \d+:\d+:\d+,\d+(\r\n)/g, ''); //Filtro de numeros
        let resB = resA.replace(/-?\[.+(\r\n.+)?(\r\n.+)?\](\s+)?((\r\n)(\r\n)+)?/g, ''); //Filtro de llaves
        let resC = resB.replace(/(\r\n){2}(\r\n)+/g, '\r\n\r\n'); //Filtro de lineas
        let resD = resC.replace(/<i>|<\/i>/g, ''); //Filtro de cosas de los subtítulos
        let resF = resD.match(/.+(\r\n.+)*/g);
        let resE = resF.map(die => die.replace(/\r\n/g, ' '));
        let resTotal = resE.length - 1;
        let dinTotal = din.childElementCount - 1;
        let valorFinal = resTotal - dinTotal;
        if (resTotal <= dinTotal) {
            for (let i = 0; i < resF.length; i++) {
                let lineLSLoop = document.getElementById(lineLS + i);
                lineLSLoop.value = resE[i];
                lineLSLoop.setAttribute('style', 'height: ' + (lineLSLoop.scrollHeight + 5) + 'px;');
                lineLSLoop.addEventListener('input', OnInput, false);
            }
        }
        else {
            for (let i = 0; i < valorFinal; i++) {
                newBox('auto')
            }
            for (let i = 0; i < resF.length; i++) {
                let lineLSLoop = document.getElementById(lineLS + i);
                lineLSLoop.value = resE[i];
                lineLSLoop.setAttribute('style', 'height: ' + (lineLSLoop.scrollHeight + 5) + 'px;');
                lineLSLoop.addEventListener('input', OnInput, false);
            }
            for (let i = 0; i < (resF.length - 1); i++) {
                ids[i].children[6].removeAttribute('disabled');
                ids[i].children[7].removeAttribute('disabled');
            }
        }
    }
}

// Función que reemplaza las redirecciones por los nombres normales al cargar transcripciones
function detectorRedirecciones(ogText) {
    // TRC = Text redirection change
    let TRC_0 = ogText.replace(anneBoonchuy, 'Anne')
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

function mostrarResultados (pers1, espa1, ingl1) {
    let pers2 = pers1.length;
    let ingl2 = ingl1.length;
    let espa2 = espa1.length;
    if (pers2 === 0 && ingl2 > 0 && espa2 === 0) {
        var personajeInput = 'ingl1';
        var personajeText = ingl1;
    } else if (pers2 === 0 && ingl2 === 0 && espa2 > 0) {
        var personajeInput = 'espa1';
        var personajeText = espa1;
    } else {
        var personajeInput = 'pers1';
        var personajeText = pers1;
    }

    switch (true) {
        //Humanos
        case anneBoonchuy.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(anneBoonchuy, '[[Anne Boonchuy|Anne]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(anneBoonchuy, '[[Anne Boonchuy|Anne]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(anneBoonchuy, '[[Anne Boonchuy|Anne]]');
                    break
            }

        case sashaWaybright.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(sashaWaybright, '[[Sasha Waybright|Sasha]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(sashaWaybright, '[[Sasha Waybright|Sasha]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(sashaWaybright, '[[Sasha Waybright|Sasha]]');
                    break
            }

        case marcyWu.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(marcyWu, '[[Marcy Wu|Marcy]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(marcyWu, '[[Marcy Wu|Marcy]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(marcyWu, '[[Marcy Wu|Marcy]]');
                    break
            }

        //Ranas: familia Plantar
        case sprigPlantar.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(sprigPlantar, '[[Sprig Plantar|Sprig]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(sprigPlantar, '[[Sprig Plantar|Sprig]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(sprigPlantar, '[[Sprig Plantar|Sprig]]');
                    break
            }
        
        case pollyPlantar.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(pollyPlantar, '[[Polly Plantar|Polly]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(pollyPlantar, '[[Polly Plantar|Polly]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(pollyPlantar, '[[Polly Plantar|Polly]]');
                    break
            }

        case hopPop.test(personajeText):
            switch (langVal) {
                
                case 1:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(hopPop, '[[Abu Hop Plantar|Hop Pop]]');
                            break
        
                        case 'ingl1':
                            ingl1 = ingl1.replace(hopPop, '[[Abu Hop Plantar|Hop Pop]]');
                            break
        
                        case 'espa1':
                            espa1 = espa1.replace(hopPop, '[[Abu Hop Plantar|Hop Pop]]');
                            break
                    }
                    break

                case 2:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(hopPop, '[[Abu Hop Plantar|Abu Hop]]');
                            break
        
                        case 'ingl1':
                            ingl1 = ingl1.replace(hopPop, '[[Abu Hop Plantar|Abu Hop]]');
                            break
        
                        case 'espa1':
                            espa1 = espa1.replace(hopPop, '[[Abu Hop Plantar|Abu Hop]]');
                            break
                    }
                    break

                case 3:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(hopPop, '[[Abu Hop Plantar|Papá Hop]]');
                            break
        
                        case 'ingl1':
                            ingl1 = ingl1.replace(hopPop, '[[Abu Hop Plantar|Papá Hop]]');
                            break
        
                        case 'espa1':
                            espa1 = espa1.replace(hopPop, '[[Abu Hop Plantar|Papá Hop]]');
                            break
                    }
                    break
            }

        //Ranas: familia Sundew/Rocío
        case ivySundew.test(personajeText):
            switch (langVal) {
                case 2:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(ivySundew, '[[Sol Rocío|Sol]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(ivySundew, '[[Sol Rocío|Sol]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(ivySundew, '[[Sol Rocío|Sol]]');
                            break
                    }
                    break

                default:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(ivySundew, '[[Sol Rocío|Ivy]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(ivySundew, '[[Sol Rocío|Ivy]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(ivySundew, '[[Sol Rocío|Ivy]]');
                            break
                    }
                    break
            }

        case feliciaSundew.test(personajeText):
            switch (langVal) {
                case 2:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(feliciaSundew, '[[Felicía Rocío|Felicía]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(feliciaSundew, '[[Felicía Rocío|Felicía]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(feliciaSundew, '[[Felicía Rocío|Felicía]]');
                            break
                    }
                    break

                default:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(feliciaSundew, '[[Felicía Rocío|Felicia]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(feliciaSundew, '[[Felicía Rocío|Felicia]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(feliciaSundew, '[[Felicía Rocío|Felicia]]');
                            break
                    }
                    break
            }

        case sylviaSundew.test(personajeText):
            switch (true) {
                case 1:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(sylviaSundew, '[[Silvía Rocío|Sylvia]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(sylviaSundew, '[[Silvía Rocío|Sylvia]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(sylviaSundew, '[[Silvía Rocío|Sylvia]]');
                            break
                    }
                    break

                case 2:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(sylviaSundew, '[[Silvía Rocío|Silvía]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(sylviaSundew, '[[Silvía Rocío|Silvía]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(sylviaSundew, '[[Silvía Rocío|Silvía]]');
                            break
                    }
                    break

                case 3:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(sylviaSundew, '[[Silvía Rocío|Silvia]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(sylviaSundew, '[[Silvía Rocío|Silvia]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(sylviaSundew, '[[Silvía Rocío|Silvia]]');
                            break
                    }
                    break
                }

        //Tritones

        case olivia.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(olivia, '[[Olivia]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(olivia, '[[Olivia]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(olivia, '[[Olivia]]');
                    break
                }

        case yunan.test(personajeText):
            switch (langVal) {
                case 2:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(yunan, '[[General Juvina|Juvina]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(yunan, '[[General Juvina|Juvina]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(yunan, '[[General Juvina|Juvina]]');
                            break
                    }
                    break

                default:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(yunan, '[[General Juvina|Yunan]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(yunan, '[[General Juvina|Yunan]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(yunan, '[[General Juvina|Yunan]]');
                            break
                    }
                    break
            }

        case andrias.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(andrias, '[[Rey Andrias]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(andrias, '[[Rey Andrias]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(andrias, '[[Rey Andrias]]');
                    break
            }

            //Ejercito sapo

        case grime.test(personajeText):
            switch (langVal) {
                case 1:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(grime, '[[Capitán Mugre|Grime]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(grime, '[[Capitán Mugre|Grime]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(grime, '[[Capitán Mugre|Grime]]');
                            break
                    }
                    break

                case 2:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(grime, '[[Capitán Mugre|Mugre]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(grime, '[[Capitán Mugre|Mugre]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(grime, '[[Capitán Mugre|Mugre]]');
                            break
                    }
                    break

                case 3:
                    switch (personajeInput) {
                        case 'pers1':
                            pers1 = pers1.replace(grime, '[[Capitán Mugre|Grimoso]]');
                            break

                        case 'ingl1':
                            ingl1 = ingl1.replace(grime, '[[Capitán Mugre|Grimoso]]');
                            break

                        case 'espa1':
                            espa1 = espa1.replace(grime, '[[Capitán Mugre|Grimoso]]');
                            break
                    }
                    break
                }

        case percy.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(percy, '[[Percy]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(percy, '[[Percy]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(percy, '[[Percy]]');
                    break
            }

        case braddock.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(braddock, '[[Braddock]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(braddock, '[[Braddock]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(braddock, '[[Braddock]]');
                    break
            }

        case bog.test(personajeText):
            switch (personajeInput) {
                case 'pers1':
                    pers1 = pers1.replace(bog, '[[Bog]]');
                    break

                case 'ingl1':
                    ingl1 = ingl1.replace(bog, '[[Bog]]');
                    break

                case 'espa1':
                    espa1 = espa1.replace(bog, '[[Bog]]');
                    break
            }
    }

    switch (modeVal) {
        case 1:
            if (pers2 > 0 && espa2 === 0 && ingl2 === 0) {
                document.getElementById('resultadosTextarea').value += '{{DTE|||' + pers1 + '}}' + '\n';
            } else if (pers2 === 0 && espa2 > 0 && ingl2 === 0) {
                document.getElementById('resultadosTextarea').value += '{{DTE|||' + espa1 + '}}' + '\n';
            } else if (pers2 === 0 && espa2 === 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += '{{DTE|||' + ingl1 + '}}' + '\n';
            } else if (pers2 > 0 && espa2 > 0 && ingl2 === 0) {
                document.getElementById('resultadosTextarea').value += '{{DTE||' + pers1 + '|' + espa1 + '}}' + '\n';
            } else if (pers2 > 0 && espa2 === 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += '{{DTE||' + pers1 + '|' + ingl1 + '}}' + '\n';
            } else if (pers2 > 0 && espa2 > 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += '{{DTE|' + pers1 + '|' + ingl1 + '|' + espa1 + '}}' + '\n';
            } else {
                console.log('error')
            }
            break

        case 2:
            if (pers2 > 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += '{{DT|' + pers1 + '|' + ingl1 + '}}' + '\n';
            } else if (pers2 > 0 && ingl2 === 0) {
                document.getElementById('resultadosTextarea').value += '{{DT||' + pers1 + '}}' + '\n';
            } else if (pers2 === 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += '{{DT||' + ingl1 + '}}' + '\n';
            } else {
                console.log('error')
            }
            break
    }
}