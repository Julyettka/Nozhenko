function changeHistory(id){
    const historySection = document.getElementById("history");
    let historyChange = new TargetChange(id, "titleHistory", historySection);
}

function changeService(id){
    const servicesSection = document.getElementById("services");
    let serviceChange = new TargetChange(id, "titleService", servicesSection);  
}


/*class for changing elements*/
class TargetChange{
    constructor(targetEl, classTitle, rootElement){ 
        this.rootElement = rootElement;
        this.targetEl = targetEl;
        this.classTitle = classTitle;
        this.changeTitle(targetEl, classTitle);
        this.higlightActive(targetEl, rootElement);
        this.changeText(targetEl, rootElement);
        this.changePhoto(targetEl,rootElement);
    }
    
    changeTitle(targetEl, classTitle){
        var chosenTitle = document.getElementById(targetEl).innerHTML;
        var titleField = document.getElementById(classTitle);
        titleField.innerHTML = "";
        titleField.innerHTML = chosenTitle;
    }

    higlightActive(targetEl, rootElement){
        var lastChosen = rootElement.querySelector(".chosen");
        lastChosen.classList.remove("chosen");
        rootElement.querySelector("#"+targetEl).classList.add("chosen");
    }

    changeText(targetEl, rootElement){
        var textIdFormula = "textof" + targetEl;
        var textId = rootElement.querySelector("#"+textIdFormula);
        var lastActiveText = rootElement.querySelector(".activeText");
        lastActiveText.classList.remove("activeText");
        lastActiveText.classList.add("hiddenText");
        textId.classList.remove("hiddenText");
        textId.classList.add("activeText");
    }
    changePhoto(targetEl, rootElement){
        var imgId = rootElement.querySelector("#imgofitem");
        console.log(imgId);
        var photos = {
            photo1: "/img/photo_old.jpg",
            photo2: "/img/photo_old2.jpg",
            photo3: "/img/photo_old3.jpg",
            photo4: "/img/photo_old4.jpg",
            photo5: "/img/photo_old5.jpg",
            photo6: "/img/photo_old6.jpg",
            photo7: "/img/photo_old7.jpg",
            photo8: "/img/photo_old8.jpg",
            photo9: "/img/photo_old9.jpg"
        }
        switch(targetEl){
            case "item1":
                imgId.src = photos.photo1;
                break;
            case "item2":
                imgId.src = photos.photo2;
                break;
            case "item3":
                imgId.src = photos.photo3;
                break;
            case "item4":
                imgId.src = photos.photo4;
                break;
            case "item5":
                imgId.src = photos.photo5;
                break;
            case "item6":
                imgId.src = photos.photo6;
                break;
            case "item7":
                imgId.src = photos.photo7;
                break;
            case "item8":
                imgId.src = photos.photo8;
                break;
            case "item9":
                imgId.src = photos.photo9;
                break;
            case "service1":
                imgId.src = photos.photo1;
                break;
            case "service2":
                imgId.src = photos.photo2;
                break;
            case "service3":
                imgId.src = photos.photo3;
                break;
            case "service4":
                imgId.src = photos.photo4;
                break;
            case "service5":
                imgId.src = photos.photo5;
                break;
            case "service6":
                imgId.src = photos.photo6;
                break;
            case "service7":
                imgId.src = photos.photo7;
                break;
        }
    }
}


/*gallery*/

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



/*map*/

var map;
      function initMap() {
        var adress = {lat: 50.526469, lng: 30.598022};
        var adress_2 = {lat: 50.521541, lng: 30.465336};
          
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.523901, lng: 30.532542}, 
          zoom: 13
        });
          
        var marker = new google.maps.Marker({
        position: adress,
        map: map
        });
          var marker_2 = new google.maps.Marker({
        position: adress_2,
        map: map
        });
      }
        
initMap();





