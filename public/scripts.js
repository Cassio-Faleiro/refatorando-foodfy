const recepes = document.querySelectorAll('.recipe__content')


for(let recipe of recepes){
    recipe.addEventListener("click", function(){
        const pegaId = recipe.getAttribute("id")
        window.location.href=`/receita/${pegaId}`
    })
}

const content = document.querySelectorAll('.content_igredients')
const buttons = document.querySelectorAll('.button')

for(let button of buttons){
    button.addEventListener("click", function(){  
        if(content.classList.contains('active') === false){
            content.classList.add('active')       
        }else{
            content.classList.remove('active')   
        }
    })
}

// buttons.textContent = 'Esconder'
// buttons.textContent = 'Mostrar'