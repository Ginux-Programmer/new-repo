let shoppedItems = document.querySelector(".shopped-items");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let cartItem = document.querySelector(".cart-item");
let totalPrice = document.getElementById("totalPrice");
let shoppedTotal = document.querySelector(".shopped-total");
let clearBtn = document.querySelector(".clear-btn");

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

 let cartItemsFunc = ()=> {
  if (basket.length !== 0) {     
     return shoppedItems.innerHTML = 
   basket.map((x)=> {
     let {id, img, item} = x //destructuring
     let search = productItems.find((y)=> y.id === id) ;
     if (search) {
       return `
       <div class="shopped-item">
              <div class="shopped-item-img">
                <img src="${search.img}" alt="Shopped-item" />
              </div>
              <div class="shopped-item-details">
                <div class="shopped-item-name"><h3>${search.tag}</h3></div>
                <div class="shopped-item-price"><h3>$${search.price * item} </h3></div>
                <div onclick ="removeFunc(${id})" class="shopped-item-remove"><h4>remove</h4></div>
              </div>
              <div class="shopped-item-btn">
                <div class="btn-arrow-increase">
                  <i  onclick = "increment(${id})" class="fa-solid fa-chevron-up shopped-icon"></i>
                </div>
                <div id=${id} class="btn-number"> ${item}
                
                </div>
               <div class="btn-arrow-decrease">
                  <i onclick = "decrement(${id})"  class="fa-solid fa-chevron-down shopped-icon"></i>
                </div>
              </div>
            </div>
            `   
     }
     else if(search === undefined) {
       return ;
     }
   }).join("");
  } else {
    shoppedTotal.style.display = "none";
    return shoppedItems.innerHTML = ` <div class="emptyCart"> 
    <h2> Cart is EMPTY</h2>
    <a href="comfy.html">   
    <button class="emptyBtn">
     <i class="fa-solid fa-arrow-left"></i> Back to Home
    </button></a>
  </div>
     `;
  }
 
 }

 cartItemsFunc();

 let increment = (id) => {
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
  update(selectedItem.id);
cartItemsFunc();

  localStorage.setItem("data", JSON.stringify(basket));

};


let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  // console.log(basket);
  // localStorage.setItem("data", JSON.stringify(basket)); //i copied to the bottom
  update(selectedItem.id);

  basket = basket.filter((x) => x.item !== 0); //delete the item of 0 from the local storage also reponsible for removing the cart from the cart page
cartItemsFunc();

  localStorage.setItem("data", JSON.stringify(basket));
};


let update = (id)=>{
let search = basket.find((x)=> x.id === id);
document.getElementById(id).innerHTML = search.item;


calculation();
totalAmount();

  
};


let calculation = ()=> {
  let basketMap = basket.map((x)=> x.item);
 let basketReduce =  basketMap.reduce((x, y)=> x+y,0 );
 cartItem.innerHTML = basketReduce;
}

calculation();

let removeFunc =(id)=> {
  let selectedItem = id;
  basket = basket.filter((x)=> x.id !== selectedItem.id);
  cartItemsFunc();
  calculation();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket));


}

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x; //destructure
        let search = productItems.find((y) => y.id === id) || []; //comparing the data from shopitemsdata to the data in the basket
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
      totalPrice.innerHTML = `$${amount}`;

}}
totalAmount();


let clearBtnFunc=()=> {
basket = [];
cartItemsFunc();
calculation();
totalAmount();

localStorage.setItem("data", JSON.stringify(basket));



}

clearBtn.addEventListener("click", clearBtnFunc);
