const teste = document.querySelector('.submit')
const itemLista = document.querySelectorAll('.item')

teste.addEventListener('click', () => {
    itemLista.forEach(function(item) {
        const input = item.querySelector('.input')

        item.classList.remove('preenchido')
        item.classList.remove('vasio')

        if (input.value == ''){
            item.classList.add('vasio')
        } else {
            item.classList.add('preenchido')
        }

        event.preventDefault();
    })
})
