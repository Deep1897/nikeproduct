var list=JSON.parse(localStorage.getItem("productS"))||[];
list.forEach(el=> {
 var div=document.createElement("div");

 var img=document.createElement("img");
 img.src=el.image;

 var h3=document.createElement("h3");
 h3.innerText=el.brand;

 var p1=document.createElement("p");
 p1.innerText=el.name;

 var p2=document.createElement("p");
 p2.innerText=el.price;

 var btn=document.createElement("button");
 btn.innerText="Remove"
 btn.addEventListener("click",function(el,index){
   removeItem(el,index);

 })

 div.append(img,h3,p1,p2,btn);
 document.getElementById("products_data").append(div)
});


function removeItem(el,index){
 console.log(el,index)
 list.splice(index,1);
 localStorage.setItem("productS",JSON.stringify(list));
 window.location.reload();
}


var add=document.getElementById("add_product");
add.addEventListener("click",function(){
 window.location.href="index.html"
})
