let check = document.getElementById("check")

check.addEventListener("change", proceed)

function proceed(){
    if(check.checked){
        let buttonProceed = document.getElementById("buttonProceed").disabled = false
    }else{
        buttonProceed.disabled = true
    }
}


buttonProceed.addEventListener("click", loadQuiz)

function loadQuiz(){
    location.href ="indexBenchMark.html"
}
