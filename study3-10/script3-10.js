window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists");
});

lists.addEventListener('mouseover', function(){
    lists.setAttribute("style", "background-color: blue;");
    const pullDownButton = document.getElementById("lists");
});
lists.addEventListener('click', function(){
    lists.setAttribute("style", "background-color: green;");
    const pullDownButton = document.getElementById("lists");
});
lists.addEventListener('mouseout', function(){
    lists.setAttribute("style", "background-color: red;");
    const pullDownButton = document.getElementById("lists");
});