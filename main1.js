// Función que ejecuta el codigo necesario para desplegar resultados
function mostrarResultados (pers1, espa1, ingl1, pers2, espa2, ingl2) {

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

        case 2:
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