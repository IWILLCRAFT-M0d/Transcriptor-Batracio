const din = document.getElementById('dinamico');
const ids = din.children;

const menuBox = document.getElementById('menuBox');
const menuOptions = document.getElementById('menuOptions');
const transparentBackground = document.getElementById('transparentBackground');
const showSectionSelect = document.getElementById('show_section_select');
const showResults = document.getElementById('show_results');
const menuBoxButton01 = document.getElementById('menuBoxButton101');
const menuBoxButton02 = document.getElementById('menuBoxButton102');
const menuBoxButton11 = document.getElementById('menuBoxButton201');
const menuBoxButton12 = document.getElementById('menuBoxButton202');
const menuBoxLabel = document.getElementById('menuBoxLabel201');

var langVal = 1
var modeVal = 1

// Detener al usuario de recargar o cerrar la página.
window.onbeforeunload = function() {
    return '0';
};

// Deshabilita las casillas de mezclar diálogos iniciales al cargar la página.
window.onload = function() {
    document.getElementById('mezclarA0').setAttribute('disabled', '');
    document.getElementById('mezclarB0').setAttribute('disabled', '');
    document.getElementById('per0').style.height = null;
    document.getElementById('ding0').style.height = null;
    document.getElementById('desp0').style.height = null;
    document.getElementById('per0').value = null;
    document.getElementById('ding0').value = null;
    document.getElementById('desp0').value = null;
}

// Funciones necesarias para eventos cronometrados del boton para mostrar o ocultar el menu opciones.
function timeout0() {menuOptions.style.backgroundColor = 'transparent'}
function timeout1() {menuBox.style.opacity = 1}
function timeout2() {menuBox.style.display = 'none'}

// Funcion para visibilitar o ocultar el menu de opciones
menuOptions.addEventListener('click', () => {
    if (menuBox.style.display === 'none'){
        menuOptions.innerHTML = 'Ocultar opciones'
        menuBox.style.display = null;
        setTimeout(timeout0, 150)
        setTimeout(timeout1, 0)
    } else {
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
    }
})

// Muestra el fondo transparente y oculta cualquier elemento en caso de no haber sido ocultado.
function closeTransBack() {
    transparentBackground.style.display='none'
    showSectionSelect.style.display='none'
    showResults.style.display='none'
}

// Muestra la pantalla de resultados y ejecuta la función necesaria.
function resultsMode() {
    transparentBackground.removeAttribute('style')
    showResults.removeAttribute('style')
    document.getElementById('resultadosTextarea').value = '';
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
    for (let i = 0; i < din.children.length; i++) {
        let pers1 = document.getElementById('per' + i).value;
        let ingl1 = document.getElementById('ding' + i).value;
        let espa1 = document.getElementById('desp' + i).value;
        mostrarResultados(pers1, espa1, ingl1)
    }
}

// Modo de cambiar idiomas
function changeBoxMode() {
    switch (modeVal) {
        case 1:
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].style.gridColumn = null;
                ids[i].children[1].placeholder = 'Diálogo en inglés';
                ids[i].children[1].style.width = null;
                ids[i].children[2].style.display = null;
                //Boton: Agregar
                ids[i].children[3].style.gridColumn = null;
                ids[i].children[3].style.gridRow = null;
                //Label: Número de línea
                ids[i].children[4].style.gridColumn = null;
                ids[i].children[4].style.gridRow = null;
                //Boton: Eliminar
                ids[i].children[5].style.gridColumn = null;
                ids[i].children[5].style.gridRow = null;
                //Boton: Mezclar diálogos
                ids[i].children[6].innerHTML = 'Mezclar diálogos inglés';
                ids[i].children[6].style.gridColumn = null;
                ids[i].children[6].style.gridRow = null;
                ids[i].children[7].style.display = null;
            }
            break

        case 2:
            for (let i = 0; i < ids.length; i++) {
                ids[i].children[1].style.gridColumn = '2 / 4';
                ids[i].children[1].placeholder = 'Diálogo';
                ids[i].children[1].style.width = '500px';
                ids[i].children[2].style.display = 'none';
                //Boton: Agregar
                ids[i].children[3].style.gridColumn = '1';
                ids[i].children[3].style.gridRow = '2';
                //Label: Número de línea
                ids[i].children[4].style.gridColumn = '2';
                ids[i].children[4].style.gridRow = '2';
                //Boton: Eliminar
                ids[i].children[5].style.gridColumn = '3';
                ids[i].children[5].style.gridRow = '2';
                //Boton: Mezclar diálogos
                ids[i].children[6].innerHTML = 'Mezclar diálogos';
                ids[i].children[6].style.gridColumn = '2';
                ids[i].children[6].style.gridRow = '3';
                ids[i].children[7].style.display = 'none';
            }
            break
    }
}

// Las siguientes dos funciones cambian el color del fondo del menu y boton del menu de opciones y cambia la bandera dependiendo del idioma elegido.
menuBoxButton01.addEventListener('click', () => {
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
menuBoxButton02.addEventListener('click', () => {
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

// Las siguientes dos funciones cambian el modo de filas dependiendo de la opcion elegida.
menuBoxButton11.addEventListener('click', () => {
    modeVal--
    switch (modeVal) {
        case 1:
            menuBoxLabel.innerHTML = 'Dual'
            break

        case 0:
            modeVal = 2
        case 2:
            menuBoxLabel.innerHTML = 'Solo'
            break
    }
    changeBoxMode()
})
menuBoxButton12.addEventListener('click', () => {
    modeVal++
    switch (modeVal) {
        case 3:
            modeVal = 1
        case 1:
            menuBoxLabel.innerHTML = 'Dual'
            break

        case 2:
            menuBoxLabel.innerHTML = 'Solo'
            break
    }
    changeBoxMode()
})

// Función para cargar subtítulos o transcripciones
document.getElementById('menuBoxButton311').addEventListener('change', function (){
    if (/\.srt\b/i.test(document.getElementById('menuBoxButton311').files[0].name) === true) {
        loadFileMode()
    } else {
        let fileLoad = new FileReader();
        fileLoad.readAsText(document.getElementById('menuBoxButton311').files[0]);
        fileLoad.onload = function () {
        let res0 = fileLoad.result;
        if (/{{(.*?)}}/.test(res0) === false) {
            console.log('error')
            return
        }
        transMetod(res0)
        }
    }
})