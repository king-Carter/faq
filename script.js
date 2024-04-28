document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        const answers = question.nextElementSibling;
        const plusIcon = question.querySelector(".plus-icon");
        const minusIcon = question.querySelector(".minus-icon");

        question.addEventListener("click", function() {
            answers.classList.toggle("active");

            plusIcon.classList.toggle("hidden");
            minusIcon.classList.toggle("hidden");

            const answerss = document.querySelectorAll(".answer");
            answerss.forEach(ans => {
                if (ans !== answers && ans.classList.contains("active")) {
                    ans.classList.remove("active");
                    const correspondingQuestion = ans.previousElementSibling;
                    const correspondingPlusIcon = correspondingQuestion.querySelector(".plus-icon");
                    const correspondingMinusIcon = correspondingQuestion.querySelector(".minus-icon");
                    correspondingPlusIcon.classList.remove("hidden");
                    correspondingMinusIcon.classList.remove("hidden");
                }
            });
        });
    });
});
