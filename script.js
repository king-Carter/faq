const questions = document.querySelectorAll(".question")



questions.forEach(question =>{
    const answers = question.nextElementSibling;
    question.addEventListener("click",function(){
        answers.classList.toggle("active")

    const plusicon = question.querySelector(".plus-icon")
    const minusicon = question.querySelector(".minus-icon")

        plusicon.classList.toggle("hidden")
        minusicon.classList.toggle("hidden")

    
    const answer = document.querySelectorAll(".answer")

        answer.forEach(ans =>{
            if(ans !== answers){
                ans.classList.remove("active")
                

            }
            
        })

        

    })
})