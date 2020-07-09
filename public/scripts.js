const recepes = document.querySelectorAll('.recipe__content')


for(let recipe of recepes){
    recipe.addEventListener("click", function(){
        const pegaId = recipe.getAttribute("id")
        window.location.href=`/receita/${pegaId}`
    })
}