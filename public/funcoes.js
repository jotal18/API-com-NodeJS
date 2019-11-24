// Ativar o Modal do Materialize
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
})

//Utilizar o jQuery-Mask
$(document).ready(function(){
  $("input[name='data']").mask('00/00/0000');
});

$(document).ready(function(){
  $("input[name='matricula']").mask('0000000');
});


//Validação do Formulário de cadastro/editar
let form = document.querySelector('form')
form.addEventListener('submit', validate, false)


function validate (event) {
  let nome = document.getElementById('nome')
  let matricula = document.getElementById('matricula')
  let setor = document.getElementById('setor')
  let data = document.getElementById('data')
  let observacao = document.getElementById('observacao')

  let length = 3

  // alert(nome)
  // if (nome.value == '' || nome.value == null || nome.value.length <= length || typeof nome.value !== "string") {
  if (!isNaN(nome.value)) {
    alert('Precisa preencher o campo Nome corretamente!!!')
    event.preventDefault()
  }
}