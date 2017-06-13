function changeH(id){
    var navId = document.getElementById(id);
    var lastChosen = document.querySelector(".chosen");
    lastChosen.classList.remove("chosen");
    navId.classList.add("chosen");
    
    var item = document.getElementById(id).innerHTML;
    var title = document.getElementById("titleHistoryNav");
    title.innerHTML = "";
    title.innerHTML = item;
    
    var textIdFormula = "textof" + id;
    var textId = document.getElementById(textIdFormula);
    var lastActive = document.querySelector(".activeHistory");
    
    lastActive.classList.remove("activeHistory");
    lastActive.classList.add("hidden");
    textId.classList.remove("hidden");
    textId.classList.add("activeHistory");
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


function changeS(id){
    var navId = document.getElementById(id);
    var lastChosen = document.querySelector(".chosenService");
    lastChosen.classList.remove("chosenService");
    navId.classList.add("chosenService");
    
    var item = document.getElementById(id).innerHTML;
    var title = document.getElementById("titleServicesNav");
    title.innerHTML = "";
    title.innerHTML = item;
    
    var textIdFormula = "textof" + id;
    var textId = document.getElementById(textIdFormula);
    var lastActive = document.querySelector(".activeService");
    lastActive.classList.remove("activeService");
    lastActive.classList.add("hidden");
    textId.classList.remove("hidden");
    textId.classList.add("activeService");
    var imgId = document.getElementById("servicesPhoto");
    switch(id){
        case "service1":
            imgId.src="/img/services_photo.jpg";
            break;
        case "service2":
            imgId.src="/img/photo_old2.jpg";
            break;
        case "service3":
            imgId.src="/img/photo_old3.jpg";
            break;
        case "service4":
            imgId.src="/img/photo_old4.jpg";
            break;
        case "service5":
            imgId.src="/img/photo_old5.jpg";
            break;
        case "service6":
            imgId.src="/img/photo_old6.jpg";
            break;
        case "service7":
            imgId.src="/img/photo_old7.jpg";
            break;
    }
}

//gallery

(function(){
    
    var prevButton = document.getElementsByClassName("prev")[0];
    var nextButton = document.getElementsByClassName("next")[0];
    var photoContainer = document.getElementsByClassName("photoContainer")[0];
    var galleryContent = document.getElementsByClassName("galleryContent")[0];
    
    
    var currentImgIndex = 0;
    var imgTotalCount = galleryContent.children.length;

    prevButton.addEventListener("click", function(){
        currentImgIndex--;
        selectImg(currentImgIndex);
    });
    nextButton.addEventListener("click", function(){
        currentImgIndex++;
        selectImg(currentImgIndex);
    });

     function selectImg(index) {
        if (index < 0) {
            currentImgIndex = imgTotalCount - 1;
        } else if (index >= imgTotalCount) {
            currentImgIndex = 0;
        } else {
            currentImgIndex = index;
        }

        galleryContent.style.transform = 'translateX(-' + currentImgIndex + '00%)';
    }
})();


   






