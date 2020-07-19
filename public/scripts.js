const recepes = document.querySelectorAll('.recipe__content')


for(let recipe of recepes){
    recipe.addEventListener("click", function(){
        const pegaId = recipe.getAttribute("id")
        window.location.href=`/receita/${pegaId}`
    })
}

const hide = document.querySelectorAll('.hide')
const buttons = document.querySelectorAll('.button')


for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(buttons[i].innerHTML == 'Esconder'){
            hide[i].classList.remove('active')
            buttons[i].innerHTML = 'Mostrar'
        }else{
            hide[i].classList.add('active')
            buttons[i].innerHTML = 'Esconder'
        }
    })
}
