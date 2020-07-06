const modalOverlay = document.querySelector('.modal__overlay')
const receps = document.querySelectorAll('.recipe__content')


for(let recep of receps){
    recep.addEventListener("click", function(){
        const img = recep.getAttribute("id")
        const recipesName = recep.querySelector(".recipes__name").textContent
        const chefName = recep.querySelector(".chef").textContent
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/${img}.png`
        modalOverlay.querySelector("h4").textContent = recipesName
        modalOverlay.querySelector("p").textContent = chefName
    })
}

// fecha o modal removendo a class active
modalOverlay.addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
