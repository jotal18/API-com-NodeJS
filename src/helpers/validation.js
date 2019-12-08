//Validação do Formulário de cadastro/editar
let form = document.querySelector('form')
form.onsubmit = () => validate()

function validate () {
  let nome = document.getElementById('nome')
  let matricula = document.getElementById('matricula')
  let setor = document.getElementById('setor')
  let data = document.getElementById('data')
  let small_nome = document.getElementById('small_nome')
  let small_matricula = document.getElementById('small_matricula')
  let small_setor = document.getElementById('small_setor')
  let small_data = document.getElementById('small_data')
  let length = 3
  
  if (nome.value == '' || nome.value == null || nome.value.length <= length || !isNaN(nome.value)) {
    nome.focus()
    small_nome.classList.remove('grey-text')
    small_nome.classList.add('red-text')
    small_nome.innerHTML = 'O campo nome deve ser preenchido corretamente!' 
    event.preventDefault()
  } else {
    small_nome.innerHTML = ''   
  }
  
  if ((matricula.value == '' || matricula.value == null || matricula.value.length < 7)) {
    matricula.focus()
    small_matricula.classList.remove('grey-text')
    small_matricula.classList.add('red-text')
    small_matricula.innerHTML = 'O campo matrícula não pode ser vazio ou menor que 7 dígitos!' 
    event.preventDefault()
  } else {
    small_matricula.innerHTML = '' 
  }
  
  if (setor.value == '' || setor.value == null || setor.value.length <= length || !isNaN(setor.value)) {
    setor.focus()
    small_setor.classList.remove('grey-text')
    small_setor.classList.add('red-text')
    small_setor.innerHTML = 'O campo setor deve ser preenchido corretamente!' 
    event.preventDefault()
  } else {
    small_setor.innerHTML = '' 
  }
  
  if (data.value == '' || data.value == null || data.value.length < 8) {
    data.focus()
    small_data.classList.remove('grey-text')
    small_data.classList.add('red-text')
    small_data.innerHTML = 'O campo data não pode ser vazio ou incompleto!' 
    event.preventDefault()
  } else {
    small_data.innerHTML = '' 
  }
}