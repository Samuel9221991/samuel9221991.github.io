let consola_menu = document.getElementById('mini_consola');
let todo_texto = document.getElementById('todo_consola_menu');
let web = document.getElementById('principal');


setTimeout(() => {
    consola_menu.className += "agrandar_consola";
    todo_texto.innerHTML = "<span class='terminal_usuario'>user@web</span><span class='terminal_puntitos'>:</span><span class='terminal_ubicacion'>~/inicio</span> <span class='terminal_simbolo'>$</span><span id='texto_consola'> <span id='rayita_menu'>_</span></span>"
    web.className = "visible";
} , 2300);
