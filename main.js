var allproducts =document.querySelectorAll("#content1-info")
var show= document.querySelector("#show")
var button=document.querySelector("#but1")
var totalprice = 0
var price1= document.querySelector("#price1")


allproducts.forEach(function (item){
item.onclick = function(){
    show.innerHTML += item.textContent + ""
    totalprice += +(item.getAttribute("price"))
    if(show.innerHTML !=""){
        button.style.display = "block" 
    }
}
})
button.onclick = function(){
    price1.innerHTML = totalprice
}