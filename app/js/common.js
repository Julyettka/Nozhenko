
function changeHistory(id){
    const historySection = document.getElementById("history");
    let historyChange = new TargetChange(id, "titleHistory", historySection);

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

function changeService(id){
    const servicesSection = document.getElementById("services");
    let serviceChange = new TargetChange(id, "titleService", servicesSection);
}


class TargetChange{
    constructor(targetEl, classTitle, rootElement){ 
        this.rootElement = rootElement;
        this.targetEl = targetEl;
        this.classTitle = classTitle;
        this.changeTitle(targetEl, classTitle);
        this.higlightActive(targetEl, rootElement);
        this.changeText(targetEl, rootElement);
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
        console.log(textId);
        var lastActiveText = rootElement.querySelector(".activeText");
        lastActiveText.classList.remove("activeText");
        lastActiveText.classList.add("hiddenText");
        textId.classList.remove("hiddenText");
        textId.classList.add("activeText");
    }
}

//заменила все document. на rootElement
//  история и сервисы не живут себе приспокойненько в одной среде



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





