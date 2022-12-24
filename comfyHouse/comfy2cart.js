let cartItemsFunc = ()=> {
    shoppedItems.innerHTML = 
    basket.map((x)=> {
      let {id, img} = x //destructuring
      let search = productItems.find((y)=> y.id === id) ;
      if (search) {
        return `<div class="shopped-item">
               <div class="shopped-item-img">
                 <img src="${search.img}" alt="Shopped-item" />
               </div>
               <div class="shopped-item-details">
                 <div class="shopped-item-name"><h3>${search.tag}</h3></div>
                 <div class="shopped-item-price"><h3>$${search.price}</h3></div>
                 <div class="shopped-item-remove"><h4>remove</h4></div>
               </div>
               <div class="shopped-item-btn">
                 <div class="btn-arrow-increase">
                   <i onclick="increment(first-${id})" class="fa-solid fa-chevron-up shopped-icon"></i>
                 </div>
                 <div id="first-${id}" class="btn-number">1</div>
                 <div class="btn-arrow-decrease">
                   <i class="fa-solid fa-chevron-down shopped-icon"></i>
                 </div>
               </div>
             </div>
             `   
      }
      else if(search === undefined) {
        return;
      }
    }).join("");
  }
  cartItemsFunc();

  let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
     if (search === undefined){
        basket.push({
        id: selectedItem.id,
        item: 1
            });}
     else {
        search.item += 1;
       }
      //  cartItemsFunc();
       
      localStorage.setItem("data", JSON.stringify(basket)); 
      update(id);
      cartItemsFunc();

};


let decrement = ()=>{};


let update = (id)=>{
let selectedItem = id;
let search = basket.find((x)=> x.id === selectedItem.id);
console.log(document.getElementById(selectedItem.id));
calculation();

};
let calculation = ()=> {
let basketMap = basket.map((x)=> x.item);
let basketReduce =  basketMap.reduce((x, y)=> x+y,0 );
cartItem.innerHTML = basketReduce;
}

calculation();