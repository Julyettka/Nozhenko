function getText(id){
    var item = document.getElementById(id).innerHTML;
    var title = document.getElementById("titleHistoryNav");
    title.innerHTML = "";
    title.innerHTML = item;
}

 function changeText(id){
    var textIdFormula = "textof" + id;
    var textId = document.getElementById(textIdFormula);
     var lastActive = document.querySelector(".active");
     console.log(lastActive);
     lastActive.classList.remove("active");
     lastActive.classList.add("hidden");
    textId.classList.remove("hidden");
    textId.classList.add("active");
    }
   






