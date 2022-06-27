//store the products array in localstorage as "data"
function data(b,n,pr,i)
{
  this.brand=b;
  this.name=n;
  this.price=pr;
  this.image=i;
}

function myfun(e)
{
  e.preventDefault();
 var form=document.getElementById("product_form");
 var brand=form.product_brand.value;

 var name=form.product_name.value;

 var price=form.product_price.value;

 var image=form.product_image.value;

 var s=new data(brand, name, price , image)
 console.log(s)
 var product=JSON.parse(localStorage.getItem("productS"))||[];
 product.push(s);
 localStorage.setItem("productS",JSON.stringify(product))



}

var show= document.getElementById("show_products");
show.addEventListener("click",function(){
 window.location.href="inventory.html";
})