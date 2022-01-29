
    let cartFood  = JSON.parse(localStorage.getItem("cartFood")) ?? [];
    cartShow()
    function cartShow() {
        let t = document.querySelector(".cartno");
          t.innerText =  cartFood.length;
    }
    

 showData(cartFood)

function showData(data) {
let container = document.querySelector(".container");
container.innerHTML = null;

data.forEach((element,index) => {
    
    let mealBox = document.createElement("div");
    mealBox.setAttribute("class","mealBox");

    let img = document.createElement("img");
    img.setAttribute("class","foodImg");
      img.src = element.strMealThumb;
    let price = document.createElement("h3")

        price.innerText =element.price;
    let title = document.createElement("p");
        title.innerText = element.strMeal;

        let remove =  document.createElement("button");
        remove.innerText = "Remove"
        remove.setAttribute("class","addtoCart")
        remove.addEventListener("click", ()=>{
          
            removeFood(index)
        } )
    mealBox.append(img,price,title,remove)

    container.append(mealBox)

});
}
showTotal()

function showTotal() {

let total = cartFood.reduce((t,e)=>{
return t+ e.price
},0)

document.querySelector(".total").innerText = `Total : ${total}`
}

function removeFood(index) {
cartFood.splice(index,1)
localStorage.setItem("cartFood",JSON.stringify(cartFood))
showData(cartFood)
}


