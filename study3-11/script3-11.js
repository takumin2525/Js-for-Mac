const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");


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