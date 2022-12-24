let productCont = document.getElementById("productCont");
let cartItem = document.querySelector(".cart-item");
let closeBtn = document.querySelector(".close-btn");
let shoppedSection = document.querySelector(".shopped-section");
let navCart = document.querySelector(".nav-cart");
let pageCont = document.querySelector(".page");
let shoppedIcon = document.querySelectorAll(".shopped-icon");
let btnNumber = document.querySelectorAll(".btn-number");
let displaySec = document.querySelector(".display-sec");


//event-listeners sections
shoppedIcon.forEach((x) => {
  x.addEventListener("click", () => {
    console.log("it's working");
  });
});


let productItems = [
    {
      id: "first",
      img: "images/imagecompressor/pexels-jean-van-der-meulen-1454806-min.jpg",
      tag: "Queen Panel Bed",
      price: "100",
    },
    {
      id: "second",
      img:"images/imagecompressor/pexels-m&w-studios-90317-min.jpg",
      tag: "Royal Apartment",
      price: "145",
    },
    {
      id: "third",
      img: "images/imagecompressor/pexels-medhat-ayad-439227-min.jpg",
      tag: "Comfort Zone",
      price: "180",
    },
    {
      id: "fourth",
      img: "images/imagecompressor/pexels-pixabay-210604-min.jpg",
      tag: "VIP suite",
      price: "200",
    },
    {
      id: "fifth",
      img: "images/imagecompressor/pexels-pixabay-271795-min.jpg",
      tag: "King Panel Bed",
      price: "190",
    },
    {
      id: "sixth",
      img: "images/imagecompressor/pexels-vecislavas-popa-1571453-min.jpg" ,
      tag: "High Class Lodge",
      price: "300",
    },
    {
      id: "seventh",
      img:"images/imagecompressor/pexels-pixabay-210604-min.jpg",
      tag: "Executive Lodge",
      price: "250",
    },
    {
      id: "eigth",
      img:"images/imagecompressor/pexels-m&w-studios-90317-min.jpg",
      tag: "Regular",
      price: "150",
    },
  ];

 
let basket = JSON.parse(localStorage.getItem("data")) || [];
let displayFunc=()=> {
  displaySec.style.display = "none";
  pageCont.style.opacity = 1;
}


// id="${id}"
 let generateCartItems =()=> {
  return  productCont.innerHTML =  productItems.map((x)=> {
    let {id, img, tag, price} = x; //destructing
    let search = basket.find((x) => x.id === id) || [];
    return `<div class="product"id=${id}>
    

    <div class="product-img">
      <img
        src="${img}"
      />
      <div onclick ="increment(${id})" class="product-slide slide-js">
        <span class="fas fa-cart-plus" > </span> add to cart
      </div>
    </div>
    <div class="product-tag"><h4>${tag}</h4></div>
    <div class="product-price">$${price}</div>
  </div> `}
 ).join(""); 
 }
 generateCartItems();




  let increment = (id) => {
    displaySec.style.display = "block";
    pageCont.style.opacity = 0.5;
setTimeout(displayFunc, 500);

    // shoppedSection.style.visibility = "visible";
  
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
    search.item += 1;
    }
    // localStorage.setItem("data", basket); //this can't be read (introducing the concept of JSON.stringify)
    // console.log(basket);
  
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));

  };
  
  
 
let decrement = ()=>{};

let update = (id)=>{
let search = basket.find((x)=> x.id === id);
// document.getElementById(id).innerHTML = search.item;
// console.log(id);

calculation();
    
 };

 
 let calculation = ()=> {
    let basketMap = basket.map((x)=> x.item);
   let basketReduce =  basketMap.reduce((x, y)=> x+y,0 );
   cartItem.innerHTML = basketReduce;
 }

 calculation();

  // the functionality of the aside section
  
  
  
  


