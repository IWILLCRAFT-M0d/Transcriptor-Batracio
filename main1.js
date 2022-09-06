// Cambia el icono del modo filtro de nombres
let bandera = document.getElementById('bandera_cambio');
document.getElementById('menu-lateral-3').addEventListener("click", () => {
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
);

// Función que ejecuta el codigo necesario para desplegar resultados
function mostrarResultados (pers1, espa1, ingl1, pers2, espa2, ingl2) {

    let filtroBotonValor0 = document.getElementById('filtroNombresBoton0');
    let filtroBotonValor1 = document.getElementById('filtroNombresBoton1');
    let filtroBotonValor2 = document.getElementById('filtroNombresBoton2');

    let anneBoonchuy = /(\[\[)?\b((ana|ann(e|a)?)(\s+(boo?(n|b)chuy))?)\b(.*\]\])?/gi;
    let sashaWaybright = /(\[\[)?\b(sasha?(\s+((w|g)aybri?g(ht|th)?))?)\b(.*\]\])?/gi;
    let marcyWu = /(\[\[)?\b((mar(c|k)(y|i))(\s+(u?wu))?)\b(.*\]\])?/gi;
    let sprigPlantar = /(\[\[)?\b((s?pr(i|o)?n?g)(\s+(pla?nt(a|e)?r))?)\b(.*\]\])?/gi;
    let pollyPlantar = /(\[\[)?\b((p?olly|poll?y)(\s+(pla?nt(a|e)?r))?)\b(.*\]\])?/gi;
    let hopPop = /(\[\[)?\b((hop|abu|pap(a|á))\s+(p|h)op(\s+(pla?nt(a|e)?r))?)\b(.*\]\])?/gi;
    let ivySundew = /(\[\[)?\b((iv(i|y)|sol)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?)\b(.*\]\])?/gi;
    let feliciaSundew = /(\[\[)?\b((felic(i|í)a)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?)\b(.*\]\])?/gi;
    let sylviaSundew = /(\[\[)?\b((s(y|i)lv(i|í)a)(\s+((sundew|sun|dew)|roc((i|í)?o|(i|í)o?)))?)\b(.*\]\])?/gi;
    let olivia = /(\[\[)?\b(((lady|se(n|ñ)orita)\s+)?(oliv((i|í)?a|(i|í)a?)))\b(.*\]\])?/gi;
    let yunan = /(\[\[)?\b(((general)\s+)?(ju(v|b)ina|yunn?an))\b(.*\]\])?/gi;
    let andrias = /(\[\[)?\b(((rey)\s+)?((an)?drias)(\s+(lev(ia|ai)(than|tan)))?)\b(.*\]\])?/gi;
    let grime = /(\[\[)?\b((cap(tain|it(á|a))n)\s+)?((grime(sy)?|graim|mugr(e|i)|grimos(o|in)|grimoth?y|mugrer?to))\b(.*\]\])?/gi;
    let percy = /(\[\[)?\b(perc(y|i))\b(.*\]\])?/gi;
    let braddock = /(\[\[)?\b(bradd?ock)\b(.*\]\])?/gi;
    let bog = /(\[\[)?\b(bog)\b(.*\]\])?/gi;

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
            break

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
            break

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
            break

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
            break
        
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
            break

        case hopPop.test(personajeText):
            switch (true) {
                case filtroBotonValor0.checked:
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

                case filtroBotonValor1.checked:
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

                case filtroBotonValor2.checked:
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
            break

        //Ranas: familia Sundew/Rocío
        case ivySundew.test(personajeText):
            switch (true) {
                case filtroBotonValor0.checked:
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
            switch (true) {
                case filtroBotonValor0.checked:
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
                case filtroBotonValor0.checked:
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

                case filtroBotonValor1.checked:
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

                case filtroBotonValor2.checked:
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
            break

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
            break

        case yunan.test(personajeText):
            switch (true) {
                case filtroBotonValor0.checked:
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
            break

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
            break

            //Ejercito sapo

        case grime.test(personajeText):
            switch (true) {
                case filtroBotonValor0.checked:
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

                case filtroBotonValor1.checked:
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

                case filtroBotonValor2.checked:
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
            break

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
            break

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
            break

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
            break
    }

    switch (cambioIdioma.checked) {
        case false:
            if (pers2 === 0 && espa2 === 0 && ingl2 === 0) {
                //error
            }
            else if ((pers2 > 0 && espa2 === 0 && ingl2 === 0) || (pers2 === 0 && espa2 > 0 && ingl2 === 0) || (pers2 === 0 && espa2 === 0 && ingl2 > 0)) {
                if (pers2 > 0) {
                    document.getElementById('resultadosTextarea').value += "{{DTE|||" + pers1 + "}}" + '\n';
                }
                else if (espa2 > 0) {
                    document.getElementById('resultadosTextarea').value += "{{DTE|||" + espa1 + "}}" + '\n';
                }
                else if (ingl2 > 0) {
                    document.getElementById('resultadosTextarea').value += "{{DTE|||" + ingl1 + "}}" + '\n';
                }
            }
            else if ((pers2 > 0 && espa2 > 0 && ingl2 === 0) || (pers2 > 0 && espa2 === 0 && ingl2 > 0)) {
                if (pers2 > 0 && espa2 > 0) {
                    document.getElementById('resultadosTextarea').value += "{{DTE||" + pers1 + "|" + espa1 + "}}" + '\n';
                }
                else if (pers2 > 0 && ingl2 > 0) {
                    document.getElementById('resultadosTextarea').value += "{{DTE||" + pers1 + "|" + ingl1 + "}}" + '\n';
                }
            }
            else if (pers2 === 0 && espa2 > 0 && ingl2 > 0) {
                //error
            }
            else if (pers2 > 0 && espa2 > 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += "{{DTE|" + pers1 + "|" + ingl1 + "|" + espa1 + "}}" + '\n';
            }
            break

        case true:
            if (pers2 > 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += "{{DT|" + pers1 + "|" + ingl1 + "}}" + '\n';
            }

            else if (pers2 > 0 && ingl2 === 0) {
                document.getElementById('resultadosTextarea').value += "{{DT||" + pers1 + "}}" + '\n';
            }

            else if (pers2 === 0 && ingl2 > 0) {
                document.getElementById('resultadosTextarea').value += "{{DT||" + ingl1 + "}}" + '\n';
            }
            break
    }
}

// Función que ejecuta la cantidad de veces necesaria la función "mostrarResultados"
document.getElementById("resultados").onclick = () => {
    document.getElementById("resultadosTextarea").value = '';    
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
