function pullDown(){

}

const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");
const pullDownChild = document.querySelectorAll(".pull-down-list");
const currentList = document.getElementById("current-list");
const listone = document.getElementById("list1");


pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color: blue;");
});
pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display: block;"){
        pullDownParents.removeAttribute("style", "display: block;");
    } else {
        pullDownParents.setAttribute("style", "display: block;");
    };
    pullDownButton.setAttribute("style", "background-color: green;");
});
pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.setAttribute("style", "background-color: red;");
});

pullDownChild.forEach(function(list){
    list.addEventListener('click', function(){
        const value = list.innerHTML;
        currentList.innerHTML = value;
    })
});

listone.addEventListener("click", function(){
    window.location.href = 'https://docs.google.com/presentation/d/11MBvmqTQVUmDJcMnMBkG1F8Rxh0_dVEZI6QmnGmd8UE/edit#slide=id.g130a2cc957d_1_1';
});


window.addEventListener('load', pullDown)