var openBtn = document.querySelector("open-btn");
var closeBtn = document.querySelector("close-btn");

openBtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});
closeBtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
});