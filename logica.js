document.addEventListener('DOMContentLoaded', function() {
    const inputTexto = document.getElementById('texto');
    const mensaje = document.getElementById('mensaje');

    inputTexto.addEventListener('input', function() {
        // Obtener el último carácter ingresado
        const ultimoCaracter = inputTexto.value.slice(-1);
        
        // Verificar si es una letra mayúscula estándar (A-Z) o con tilde (ÁÉÍÓÚ)
        if ((ultimoCaracter >= 'A' && ultimoCaracter <= 'Z') || 
            ultimoCaracter === 'á' || ultimoCaracter === 'é' || ultimoCaracter === 'í' || 
            ultimoCaracter === 'ó' || ultimoCaracter === 'ú') {
            mensaje.style.display = 'block';
        } else {
            mensaje.style.display = 'none';
        }
    });
});

// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById('texto').value;
    
    // Verificar si el texto contiene letras mayúsculas estándar o con tilde
    if (/[A-Záéíóú]/.test(texto)) {
        alert('No se puede encriptar texto que contiene letras mayúsculas estándar (A-Z) o con tilde (áéíóú).');
        return;
    }

    // Encriptación personalizada
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar texto encriptado en la sección de información
    const mensajeEncriptado = document.querySelector('.info-section p:first-of-type');
    const resultadoEncriptado = document.querySelector('.info-section p:nth-of-type(2)');
    mensajeEncriptado.innerHTML = `<strong>El texto encriptado:</strong>`;
    resultadoEncriptado.innerHTML = `${textoEncriptado}`;
}


// Función para desencriptar el texto
function desencriptar() {
    const textoEncriptado = document.getElementById('texto').value;
    

    // Verificar si el texto encriptado contiene letras mayúsculas estándar o con tilde
    if (/[A-Záéíóú]/.test(textoEncriptado)) {
        alert('No se puede desencriptar texto que contiene letras mayúsculas estándar (A-Z) o con tilde (áéíóú).');
        return;
    }

    // Desencriptación personalizada
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar texto desencriptado en la sección de información
    const mensajeEncriptado = document.querySelector('.info-section p:first-of-type');
    const resultadoEncriptado = document.querySelector('.info-section p:nth-of-type(2)');
    mensajeEncriptado.innerHTML = `<strong>El texto desencriptado:</strong>`;
    resultadoEncriptado.innerHTML = `${textoDesencriptado}`;
}



const mensajeOriginal = document.getElementById('mensaje').innerHTML;
function limpiar() {
    // Limpiar el campo de entrada
    document.getElementById('texto').value = '';

    // Limpiar los resultados en la sección de información
    const mensajeEncriptado = document.querySelector('.info-section p:first-of-type');
    const resultadoEncriptado = document.querySelector('.info-section p:nth-of-type(2)');
    mensajeEncriptado.innerHTML = 'Sin mensajes';
    resultadoEncriptado.innerHTML = 'Ingrese el texto que desee encriptar o desencriptar';
    document.getElementById('mensaje').innerHTML = mensajeOriginal;
}

