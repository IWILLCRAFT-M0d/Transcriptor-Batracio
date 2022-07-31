let banderaCambio = document.getElementById('menu-lateral-3');
let bandera = document.getElementById('bandera_cambio');

let filtroBoton0 = document.getElementById('filtroNombresBoton0');
let filtroBoton1 = document.getElementById('filtroNombresBoton1');
let filtroBoton2 = document.getElementById('filtroNombresBoton2');

let banderonCambion = banderaCambio.addEventListener("click", function() {
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
    }
);

// Mostrar resultados y filtro de nombres
document.getElementById("fin").onclick = function () {
    document.getElementById("resultado").value = '';
    let filtroBotonValor0 = document.getElementById('filtroNombresBoton0');
    let filtroBotonValor1 = document.getElementById('filtroNombresBoton1');
    let filtroBotonValor2 = document.getElementById('filtroNombresBoton2');

    // Variables para los filtros de nombres

    
    let anneBoonchuy = /\b(\b((ana|ann(e|a)?)(\s(boo?(n|b)chuy))?)\b)\b/gi;
    let sashaWaybright = /\b(sasha?(\s((w|g)aybri?g(ht|th)?))?)\b/gi;
    let marcyWu = /\b((mar?(cy|ci|ky|ki))(\s(u?wu))?)\b/gi;
    let sprigPlantar = /\b((s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?)\b/gi;
    let pollyPlantar = /\b((p?olly|poll?y)(\s(pla?nt(a|e)?r))?)\b/gi;
    let hopPop = /\b((hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?)\b/gi;
    let ivySundew = /\b((iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?)\b/gi;
    let feliciaSundew = /\b((felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?)\b/gi;
    let sylviaSundew = /\b((s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?)\b/gi;
    let olivia = /\b(((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?)))\b/gi;
    let yunan = /\b(((general)\s)?(ju(v|b)ina|yunn?an))\b/gi;
    let andrias = /\b(((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?)\b/gi;

    switch (true) {
        case filtroBotonValor0.checked:
            for (let i = 0; i < din.children.length; i++) {
                let pers1 = document.getElementById("per" + i).value;
                let ingl1 = document.getElementById("ding" + i).value;
                let espa1 = document.getElementById("desp" + i).value;
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
                        switch (personajeInput) {
                            case 'pers1':
                                pers1 = pers1.replace(hopPop, '[[Abu Pop Plantar|Abu Hop]]');
                                break

                            case 'ingl1':
                                ingl1 = ingl1.replace(hopPop, '[[Abu Pop Plantar|Abu Hop]]');
                                break

                            case 'espa1':
                                espa1 = espa1.replace(hopPop, '[[Abu Pop Plantar|Abu Hop]]');
                                break
                        }
                        break
        
                    //Ranas: familia Sundew/Rocío
                    case ivySundew.test(personajeText):
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

                    case anneBoonchuy.test(personajeText):
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

                    case sylviaSundew.test(personajeText):
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
                }
                switch (cambioIdioma.checked) {
                    case false:
                        if (pers2 === 0 && espa2 === 0 && ingl2 === 0) {
                            //error
                        }
                        else if ((pers2 > 0 && espa2 === 0 && ingl2 === 0) || (pers2 === 0 && espa2 > 0 && ingl2 === 0) || (pers2 === 0 && espa2 === 0 && ingl2 > 0)) {
                            if (pers2 > 0) {
                                document.getElementById("resultado").value += "{{DTE|||" + pers1 + "}}" + '\n';
                            }
                            else if (espa2 > 0) {
                                document.getElementById("resultado").value += "{{DTE|||" + espa1 + "}}" + '\n';
                            }
                            else if (ingl2 > 0) {
                                document.getElementById("resultado").value += "{{DTE|||" + ingl1 + "}}" + '\n';
                            }
                        }
                        else if ((pers2 > 0 && espa2 > 0 && ingl2 === 0) || (pers2 > 0 && espa2 === 0 && ingl2 > 0)) {
                            if (pers2 > 0 && espa2 > 0) {
                                document.getElementById("resultado").value += "{{DTE||" + pers1 + "|" + espa1 + "}}" + '\n';
                            }
                            else if (pers2 > 0 && ingl2 > 0) {
                                document.getElementById("resultado").value += "{{DTE||" + pers1 + "|" + ingl1 + "}}" + '\n';
                            }
                        }
                        else if (pers2 === 0 && espa2 > 0 && ingl2 > 0) {
                            //error
                        }
                        else if (pers2 > 0 && espa2 > 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DTE|" + pers1 + "|" + ingl1 + "|" + espa1 + "}}" + '\n';
                        }
                        break
            
                    case true:
                        if (pers2 > 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DT|" + pers1 + "|" + ingl1 + "}}" + '\n';
                        }
            
                        else if (pers2 > 0 && ingl2 === 0) {
                            document.getElementById("resultado").value += "{{DT||" + pers1 + "}}" + '\n';
                        }
            
                        else if (pers2 === 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DT||" + ingl1 + "}}" + '\n';
                        }
                        break
                    } 
                }
            break

        case filtroBotonValor1.checked:
            for (let i = 0; i < din.children.length; i++) {
                let pers1 = document.getElementById("per" + i).value;
                let ingl1 = document.getElementById("ding" + i).value;
                let espa1 = document.getElementById("desp" + i).value;
                let pers2 = pers1.length;
                let ingl2 = ingl1.length;
                let espa2 = espa1.length;
                
                if (pers2 > 0 && ingl2 === 0 && espa2 === 0) {
                    var personajeInput = 'pers1';
                    var personajeText = pers1;
                } else if (pers2 === 0 && ingl2 > 0 && espa2 === 0) {
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
                        switch (personajeInput) {
                            case 'pers1':
                                pers1 = pers1.replace(hopPop, '[[Abu Pop Plantar|Hop Hop]]');
                                break

                            case 'ingl1':
                                ingl1 = ingl1.replace(hopPop, '[[Abu Pop Plantar|Hop Hop]]');
                                break

                            case 'espa1':
                                espa1 = espa1.replace(hopPop, '[[Abu Pop Plantar|Hop Hop]]');
                                break
                        }
                        break
        
                    //Ranas: familia Sundew/Rocío
                    case ivySundew.test(personajeText):
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

                    case anneBoonchuy.test(personajeText):
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

                    case sylviaSundew.test(personajeText):
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
                }

                switch (cambioIdioma.checked) {
                    case false:
                        if (pers2 === 0 && espa2 === 0 && ingl2 === 0) {
                            //error
                        }
                        else if ((pers2 > 0 && espa2 === 0 && ingl2 === 0) || (pers2 === 0 && espa2 > 0 && ingl2 === 0) || (pers2 === 0 && espa2 === 0 && ingl2 > 0)) {
                            if (pers2 > 0) {
                                document.getElementById("resultado").value += "{{DTE|||" + pers1 + "}}" + '\n';
                            }
                            else if (espa2 > 0) {
                                document.getElementById("resultado").value += "{{DTE|||" + espa1 + "}}" + '\n';
                            }
                            else if (ingl2 > 0) {
                                document.getElementById("resultado").value += "{{DTE|||" + ingl1 + "}}" + '\n';
                            }
                        }
                        else if ((pers2 > 0 && espa2 > 0 && ingl2 === 0) || (pers2 > 0 && espa2 === 0 && ingl2 > 0)) {
                            if (pers2 > 0 && espa2 > 0) {
                                document.getElementById("resultado").value += "{{DTE||" + pers1 + "|" + espa1 + "}}" + '\n';
                            }
                            else if (pers2 > 0 && ingl2 > 0) {
                                document.getElementById("resultado").value += "{{DTE||" + pers1 + "|" + ingl1 + "}}" + '\n';
                            }
                        }
                        else if (pers2 === 0 && espa2 > 0 && ingl2 > 0) {
                            //error
                        }
                        else if (pers2 > 0 && espa2 > 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DTE|" + pers1 + "|" + ingl1 + "|" + espa1 + "}}" + '\n';
                        }
                        break
            
                    case true:
                        if (pers2 > 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DT|" + pers1 + "|" + ingl1 + "}}" + '\n';
                        }
            
                        else if (pers2 > 0 && ingl2 === 0) {
                            document.getElementById("resultado").value += "{{DT||" + pers1 + "}}" + '\n';
                        }
            
                        else if (pers2 === 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DT||" + ingl1 + "}}" + '\n';
                        }
                        break
                    }
            }
            break

        case filtroBotonValor2.checked:
            for (let i = 0; i < din.children.length; i++) {
                let pers1 = document.getElementById("per" + i).value;
                let ingl1 = document.getElementById("ding" + i).value;
                let espa1 = document.getElementById("desp" + i).value;
                let pers2 = pers1.length;
                let ingl2 = ingl1.length;
                let espa2 = espa1.length;

                if (pers2 > 0 && ingl2 === 0 && espa2 === 0) {
                    var personajeInput = 'pers1';
                    var personajeText = pers1;
                } else if (pers2 === 0 && ingl2 > 0 && espa2 === 0) {
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
                        switch (personajeInput) {
                            case 'pers1':
                                pers1 = pers1.replace(hopPop, '[[Abu Pop Plantar|Papá Hop]]');
                                break

                            case 'ingl1':
                                ingl1 = ingl1.replace(hopPop, '[[Abu Pop Plantar|Papá Hop]]');
                                break

                            case 'espa1':
                                espa1 = espa1.replace(hopPop, '[[Abu Pop Plantar|Papá Hop]]');
                                break
                        }
                        break
        
                    //Ranas: familia Sundew/Rocío
                    case ivySundew.test(personajeText):
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

                    case anneBoonchuy.test(personajeText):
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

                    case sylviaSundew.test(personajeText):
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
                }

                switch (cambioIdioma.checked) {
                    case false:
                    if (pers2 === 0 && espa2 === 0 && ingl2 === 0) {
                        //error
                    }
                    else if ((pers2 > 0 && espa2 === 0 && ingl2 === 0) || (pers2 === 0 && espa2 > 0 && ingl2 === 0) || (pers2 === 0 && espa2 === 0 && ingl2 > 0)) {
                        if (pers2 > 0) {
                            document.getElementById("resultado").value += "{{DTE|||" + pers1 + "}}" + '\n';
                        }
                        else if (espa2 > 0) {
                            document.getElementById("resultado").value += "{{DTE|||" + espa1 + "}}" + '\n';
                        }
                        else if (ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DTE|||" + ingl1 + "}}" + '\n';
                        }
                    }
                    else if ((pers2 > 0 && espa2 > 0 && ingl2 === 0) || (pers2 > 0 && espa2 === 0 && ingl2 > 0)) {
                        if (pers2 > 0 && espa2 > 0) {
                            document.getElementById("resultado").value += "{{DTE||" + pers1 + "|" + espa1 + "}}" + '\n';
                        }
                        else if (pers2 > 0 && ingl2 > 0) {
                            document.getElementById("resultado").value += "{{DTE||" + pers1 + "|" + ingl1 + "}}" + '\n';
                        }
                    }
                    else if (pers2 === 0 && espa2 > 0 && ingl2 > 0) {
                        //error
                    }
                    else if (pers2 > 0 && espa2 > 0 && ingl2 > 0) {
                        document.getElementById("resultado").value += "{{DTE|" + pers1 + "|" + ingl1 + "|" + espa1 + "}}" + '\n';
                    }
                        break
            
                    case true:
                    
                    if (pers2 > 0 && ingl2 > 0) {
                        document.getElementById("resultado").value += "{{DT|" + pers1 + "|" + ingl1 + "}}" + '\n';
                    }
        
                    else if (pers2 > 0 && ingl2 === 0) {
                        document.getElementById("resultado").value += "{{DT||" + pers1 + "}}" + '\n';
                    }
        
                    else if (pers2 === 0 && ingl2 > 0) {
                        document.getElementById("resultado").value += "{{DT||" + ingl1 + "}}" + '\n';
                    }
                    break
                } 
            }
        break
    }
}
