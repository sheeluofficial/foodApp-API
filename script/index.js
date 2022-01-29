let cartFood = JSON.parse(localStorage.getItem("cartFood")) ?? [];
getFoodData()
    async function getFoodData() {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
        let data = await res.json();

        console.log(data)
        showData(data.meals,cartShow)

        cartShow()
        function cartShow() {
            let t = document.querySelector(".cartno");
              t.innerText =  cartFood.length;
        }
    }


    function showData(data,cartShow) {
        let container = document.querySelector(".container");
        container.innerHTML = null;

        data.forEach(element => {
            
            let mealBox = document.createElement("div");
            mealBox.setAttribute("class","mealBox");

            let img = document.createElement("img");
            img.setAttribute("class","foodImg");
              img.src = element.strMealThumb;
            let price = document.createElement("h3")
            let value =  parseInt(Math.random()*300+100);
                price.innerText =value;
            let title = document.createElement("p");
                title.innerText = element.strMeal;

                let addtoCart =  document.createElement("button");
                addtoCart.innerText = "Add to Cart"
                addtoCart.setAttribute("class","addtoCart")
                addtoCart.addEventListener("click", ()=>{
                    element.price = value;
                    addCart(element,cartShow)
                } )
            mealBox.append(img,price,title,addtoCart)

            container.append(mealBox)

        });
    }


    function addCart(data,cartShow) {
        cartFood.push(data);

        localStorage.setItem("cartFood",JSON.stringify(cartFood));
cartShow()
    }