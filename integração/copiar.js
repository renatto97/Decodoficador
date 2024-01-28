
function copiar() {
    var textoCop = document.getElementById('input-texto'); // função copiar//
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  