function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = `<textarea readonly id "input-texto">${resultCripto}<textarea><button class="ntn-copiar" id="copiar" onclick="copiar()">copiar<button>`;
}
