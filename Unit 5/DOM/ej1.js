var setPage = () => {
    for (x=0; x<3; x++){
        let newp = document.createElement('p');
        newp.innerHTML = '<a href="https://www.google.es/">ENLACE#'+(x+1)+'</a><br><a href="https://www.google.es/">ENLACE2#'+(x+1)+'</a><br>';
        document.body.appendChild(newp);
    }
    let button = document.createElement('input');
    document.body.appendChild(button);
    button.type = 'submit';
    button.value = 'Info';
    button.onclick = 'darInfo';
}

//Nota: No entra en darInfo() :(

var darInfo = () => {
    let newp = document.createElement('p');
    document.body.appendChild(newp);
    let links = document.getElementsByTagName('a');
    newp.innerHTML = 'Nº de enlaces: ' + links.length;
    newp.innerHTML = '.<br> Direccion del penúltimo enlace: ' + links[(links.length - 2)].href;
    let n_link = comprobar_link(direc);
    newp.innerHTML = '.<br> Nº de enlaces a Google: ' + n_link;
    let parraf = document.getElementsByTagName('p');
    let n_link_3p = comprobar_link(parraf[2]);
    newp.innerHTML = '.<br> Nº de enlaces del 3º párrafo: ' + n_link;
}

function comprobar_link(direc){
    let n = 0;
    for (let link in direc) {
        if (link.href === "https://www.google.es/") {
          n++
        }
    }
    return n
}