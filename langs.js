let puntero = document.getElementById('rayita');
let consola = document.getElementById('consola');
let todo = document.getElementById('texto');

setTimeout(() => {
    puntero.innerHTML = "<br>LENGUAJES:<br><br> [1] Python<br> [2] Arduino (C)<br> [3] C#<br> [4] JavaScript<br> [5] PHP<br> [6] CSS<br> [7] HTML<br>";
    puntero.className = "cambio_puntero";
    consola.className += "agrandar_consola";
    todo.innerHTML += " <span class='terminal_usuario'>user@web</span><span class='terminal_puntitos'>:</span><span class='terminal_ubicacion'>~/inicio</span><span class='terminal_simbolo'> $</span> <span id='rayita_oculta'>_</span>"
} , 5050);