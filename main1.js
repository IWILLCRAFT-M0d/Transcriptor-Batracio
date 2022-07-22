let banderaCambio = document.getElementById('menu-lateral-3');
let bandera = document.getElementById('bandera_cambio');

let filtroBoton0 = document.getElementById('filtroNombresBoton0');
let filtroBoton1 = document.getElementById('filtroNombresBoton1');
let filtroBoton2 = document.getElementById('filtroNombresBoton2');

banderaCambio.addEventListener("click", function() {
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
    switch (true) {
        case filtroBotonValor0.checked:
            for (let i = 0; i < din.children.length; i++) {
                let pers1 = document.getElementById("per" + i).value;
                let ingl1 = document.getElementById("ding" + i).value;
                let espa1 = document.getElementById("desp" + i).value;
                let pers2 = pers1.length;
                let ingl2 = ingl1.length;
                let espa2 = espa1.length;
                
                
                switch (true) {
                    //Humanos
                    case (/(ana|ann(e|a)?)(\s(boo?(n|b)chuy))?/gi).test(pers1):
                        pers1 = pers1.replace(/(ana|ann(e|a)?)(\s(boo?(n|b)chuy))?/gi, '[[Anne Boonchuy|Anne]]');
                        break
        
                    case (/sasha?(\s((w|g)aybri?g(ht|th)?))?/gi).test(pers1):
                        pers1 = pers1.replace(/sasha?(\s((w|g)aybri?g(ht|th)?))?/gi, '[[Sasha Waybright|Sasha]]');
                        break
        
                    case ((/(mar?(cy|ci|ky|ki))(\s(u?wu))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(mar?(cy|ci|ky|ki))(\s(u?wu))?/gi, '[[Marcy Wu|Marcy]]');
                    break
        
                    //Ranas: familia Plantar
                    case (/(s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?/gi, '[[Sprig Plantar|Sprig]]');
                        break
        
                    case (/(p?olly|poll?y)(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(p?olly|poll?y)(\s(pla?nt(a|e)?r))?/gi, '[[Polly Plantar|Polly]]');
                        break
        
                    case (/(hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?/gi, '[[Abu Hop Plantar|Abu Hop]]');
                        break
        
                    //Ranas: familia Sundew/Rocío
                    case ((/(iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Sol Rocío|Sol]]');
                        break
        
                    case ((/(felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Felicía Rocío|Felicía]]');
                        break
        
                    case ((/(s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Silvía Rocío|Silvía]]');
                        break
        
                    //Tritones
                    case ((/((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?))/gi)).test(pers1):
                        pers1 = pers1.replace(/((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?))/gi, '[[Olivia]]');
                        break
        
                    case ((/((general)\s)?(ju(v|b)ina|yunn?an)/gi)).test(pers1):
                        pers1 = pers1.replace(/((general)\s)?(ju(v|b)ina|yunn?an)/gi, '[[General Juvina|Juvina]]');
                        break
        
                    case ((/((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?/gi, '[[Rey Andrias]]');
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
                
                
                switch (true) {
                    //Humanos
                    case (/(ana|ann(e|a)?)(\s(boo?(n|b)chuy))?/gi).test(pers1):
                        pers1 = pers1.replace(/(ana|ann(e|a)?)(\s(boo?(n|b)chuy))?/gi, '[[Anne Boonchuy|Anne]]');
                        break
        
                    case (/sasha?(\s((w|g)aybri?g(ht|th)?))?/gi).test(pers1):
                        pers1 = pers1.replace(/sasha?(\s((w|g)aybri?g(ht|th)?))?/gi, '[[Sasha Waybright|Sasha]]');
                        break
        
                    case ((/(mar?(cy|ci|ky|ki))(\s(u?wu))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(mar?(cy|ci|ky|ki))(\s(u?wu))?/gi, '[[Marcy Wu|Marcy]]');
                    break
        
                    //Ranas: familia Plantar
                    case (/(s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?/gi, '[[Sprig Plantar|Sprig]]');
                        break
        
                    case (/(p?olly|poll?y)(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(p?olly|poll?y)(\s(pla?nt(a|e)?r))?/gi, '[[Polly]]');
                        break
        
                    case (/(hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?/gi, '[[Abu Hop Plantar|Hop Hop]]');
                        break
        
                    //Ranas: familia Sundew/Rocío
                    case ((/(iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Sol Rocío|Ivy]]');
                        break
        
                    case ((/(felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Felicía Rocío|Felicia]]');
                        break
        
                    case ((/(s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Silvía Rocío|Sylvia]]');
                        break
        
                    //Tritones
                    case ((/((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?))/gi)).test(pers1):
                        pers1 = pers1.replace(/((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?))/gi, '[[Olivia]]');
                        break
        
                    case ((/((general)\s)?(ju(v|b)ina|yunn?an)/gi)).test(pers1):
                        pers1 = pers1.replace(/((general)\s)?(ju(v|b)ina|yunn?an)/gi, '[[General Juvina|Yunan]]');
                        break
        
                    case ((/((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?/gi, '[[Rey Andrias]]');
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
                
                
                switch (true) {
        
                    //Humanos
                    case (/(ana|ann(e|a)?)(\s(boo?(n|b)chuy))?/gi).test(pers1):
                        pers1 = pers1.replace(/(ana|ann(e|a)?)(\s(boo?(n|b)chuy))?/gi, '[[Anne Boonchuy|Anne]]');
                        break
        
                    case (/sasha?(\s((w|g)aybri?g(ht|th)?))?/gi).test(pers1):
                        pers1 = pers1.replace(/sasha?(\s((w|g)aybri?g(ht|th)?))?/gi, '[[Sasha Waybright|Sasha]]');
                        break
        
                    case ((/(mar?(cy|ci|ky|ki))(\s(u?wu))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(mar?(cy|ci|ky|ki))(\s(u?wu))?/gi, '[[Marcy Wu|Marcy]]');
                    break
        
                    //Ranas: familia Plantar
                    case (/(s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(s?pr(i|o)?n?g)(\s(pla?nt(a|e)?r))?/gi, '[[Sprig Plantar|Sprig]]');
                        break
        
                    case (/(p?olly|poll?y)(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(p?olly|poll?y)(\s(pla?nt(a|e)?r))?/gi, '[[Polly Plantar|Polly]]');
                        break
        
                    case (/(hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?/gi).test(pers1):
                        pers1 = pers1.replace(/(hop|abu|pap(a|á))\s(p|h)op(\s(pla?nt(a|e)?r))?/gi, '[[Abu Hop Plantar|Papá Hop]]');
                        break
        
                    //Ranas: familia Sundew/Rocío
                    case ((/(iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(iv(i|y)|sol)(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Sol Rocío|Ivy]]');
                        break
        
                    case ((/(felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(felic(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Felicía Rocío|Felicia]]');
                        break
        
                    case ((/(s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/(s(y|i)lv(i?a|ia?|í?a|ía?))(\s((sundew|sun|dew)|roc(i?o|io?|í?o|ío?)))?/gi, '[[Silvía Rocío|Silvia]]');
                        break
        
                    //Tritones
                    case ((/((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?))/gi)).test(pers1):
                        pers1 = pers1.replace(/((lady|se(n|ñ)orita)\s)?(oliv(i?a|ia?|í?a|ía?))/gi, '[[Olivia]]');
                        break
        
                    case ((/((general)\s)?(ju(v|b)ina|yunn?an)/gi)).test(pers1):
                        pers1 = pers1.replace(/((general)\s)?(ju(v|b)ina|yunn?an)/gi, '[[General Juvina|Yunan]]');
                        break
        
                    case ((/((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?/gi)).test(pers1):
                        pers1 = pers1.replace(/((rey)\s)?((an)?drias)(\s(lev(ia|ai)(than|tan)))?/gi, '[[Rey Andrias]]');
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
