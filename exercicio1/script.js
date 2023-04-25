const item0 = document.createElement('li')

const conteudo0 = document.createTextNode('item 0')
item0.appendChild(conteudo0)

const lista = document.getElementById('lista')
lista.insertAdjacentElement('afterbegin',item0)

const item5 = document.createElement('li')
const conteudo5 = document.createTextNode('Item 5')
item5.appendChild(conteudo5)

lista.insertAdjacentElement('beforeend',item5)