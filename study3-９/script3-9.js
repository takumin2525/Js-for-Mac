window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists");
    console.log(pullDownButton);
});

lists.addEventListener('mouseover', function(){
    const pullDownButton = document.getElementById("lists");
    console.log("乗った");
});
lists.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists");
    console.log("クリック");
});
lists.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists");
    console.log("外れた");
});