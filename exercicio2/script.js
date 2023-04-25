function escondeSenha(event){
    event.preventDefault()
    const input = document.getElementById('password')
    input.setAttribute('type','password')
}
const formulario = document.querySelector('.light')
formulario.classList.remove('light')
formulario.classList.add('dark') 