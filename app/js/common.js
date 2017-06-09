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
    lastActive.classList.remove("active");
    lastActive.classList.add("hidden");
    textId.classList.remove("hidden");
    textId.classList.add("active");
    var imgId = document.getElementById("imgofitem");
    switch(id){
        case "item1":
            imgId.src="/img/photo_old.jpg";
            break;
        case "item2":
            imgId.src="/img/photo_old2.jpg";
            break;
        case "item3":
            imgId.src="/img/photo_old3.jpg";
            break;
        case "item4":
            imgId.src="/img/photo_old4.jpg";
            break;
        case "item5":
            imgId.src="/img/photo_old5.jpg";
            break;
        case "item6":
            imgId.src="/img/photo_old6.jpg";
            break;
        case "item7":
            imgId.src="/img/photo_old7.jpg";
            break;
        case "item8":
            imgId.src="/img/photo_old8.jpg";
            break;
        case "item9":
            imgId.src="/img/photo_old9.jpg";
            break;
    }
}
   






