
function getText(id){
    var item = document.getElementById(id).innerHTML;
    console.log(item);
    var title = document.getElementById("titleHistoryNav");
    title.innerHTML = "";
    title.innerHTML = item;
}




