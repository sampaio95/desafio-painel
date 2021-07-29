function validateForm() {
  var x = document.getElementById("nome");
 "" || x == null) {
    alert("Favor preencher o campo nome");
    return false;
  }
}

function Enviar() {

    var nome = document.getElementById("enviar");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + '  os seus dados foram encaminhados com sucesso');
    }

}
