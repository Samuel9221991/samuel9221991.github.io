let puntero = document.getElementById('rayita');
let consola = document.getElementById('consola');
let todo = document.getElementById('texto');

var i = 1;

setTimeout(() => {
    var puntero_estilos = window.getComputedStyle(puntero);
    var puntero_valor = puntero_estilos.getPropertyValue('width');
    console.log(`${puntero_valor} i: ${i}`);
    puntero.innerHTML = "<p>LENGUAJES:</p> <p>[1] Python</p> <p>[2] Arduino (C)</p> <p>[3] C#</p> <p>[4] JavaScript</p> <p>[5] PHP</p> <p>[6] CSS</p> <p>[7] HTML</p>";
    puntero.className = "cambio_puntero";
    consola.className += "agrandar_consola";
    todo.innerHTML += " <span class='terminal_usuario'>user@web</span><span class='terminal_puntitos'>:</span><span class='terminal_ubicacion'>~/inicio</span><span class='terminal_simbolo'>$</span> <span id='rayita_oculta'>_</span>"
} , 3000);
