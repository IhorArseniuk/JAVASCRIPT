// task 11-1 #HmvAfRQM //
/*{   const divCartsContainer = document.getElementById('carts-container');
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(res => {console.log(res)
            let{carts}=res
            for(const cart of carts){
                let divCart=document.createElement('div');
                divCart.className='div-cart';

                const id=document.createElement('h3');
                 id.innerText='ID'+' ' + cart.id;

                const productsDiv=document.createElement('ol');
                productsDiv.className='products-div';

                const productP=document.createElement('h4')
                productP.innerText='Products:';

                productsDiv.appendChild(productP);

                const {products}=cart;

                for(const product of products){
                    const productInfo=document.createElement('li');
                     productInfo.innerText=product.title;

                     const productImg=document.createElement('img');
                     productImg.className='product-img';
                     productImg.src=product.thumbnail;

                     const productPrice=document.createElement('p');
                     productPrice.innerText=product.price+'$';

                    productsDiv.append(productInfo,productImg,productPrice);
                }

                const totalPrice=document.createElement('p');
                totalPrice.className='total-price';
                totalPrice.innerText='Price:'+ ' ' +cart.total+'-USD';

                const discountedTotalPrice=document.createElement('p');
                discountedTotalPrice.className='discounted-price';
                discountedTotalPrice.innerText='Discounted price:'+' '+cart.discountedTotal+'-USD';

                const userId=document.createElement('h4');
                userId.innerText='User id '+' ' + cart.userId;

                const totalProducts=document.createElement('p');
                totalProducts.innerText='Total products:'+' '+cart.totalProducts;

                const totalQuantity=document.createElement('p');
                totalQuantity.innerText='Total Quantity:'+' '+cart.totalQuantity;

                divCart.append(id,productsDiv,totalPrice,discountedTotalPrice,userId,totalProducts,totalQuantity);
                divCartsContainer.appendChild(divCart);
            }

        })
}*/
// task 11-2  #whXxOBlYS0H //
{
const recipesContainer=document.getElementById('recipes-container');

    let recipe=fetch('https://dummyjson.com/recipes')
        .then(res=>res.json())
        .then(res => {
            console.log(res)

            let {recipes} = res
            for(const recipe of recipes){
                const divRecipe =document.createElement('div');
                divRecipe.className='div-recipe';

                const recipeId=document.createElement('h2');
                recipeId.innerText=recipe.id;

                const recipeName=document.createElement('h3');
                recipeName.innerText=recipe.name;

                const recipeIngredients=document.createElement('ol');

                const ingredientsH3=document.createElement('h3')
                ingredientsH3.innerText='Ingredients:';
                recipeIngredients.appendChild(ingredientsH3);

                for(const ingredient of recipe.ingredients){
                    const ingredien=document.createElement('li');
                    ingredien.innerText=ingredient
                    recipeIngredients.appendChild(ingredien)
                }

                const recipeInstruction=document.createElement('p');
                recipeInstruction.innerText='Instruction:'+' '+recipe.instructions;

                const recipePreperingTime=document.createElement('p');
                recipePreperingTime.innerText='Prepering Time:'+' '+recipe.prepTimeMinutes;

                const recipeCookingTime=document.createElement('p');
                recipeCookingTime.innertext='Cooking Time:'+' '+recipe.cookTimeMinutes;

                const recipeServering=document.createElement('p');
                recipeServering.innerText='Servering:'+' '+recipe.servings;

                const recipeDifficulty=document.createElement('h4');
                recipeDifficulty.innerText='Difficulty:'+' '+recipe.difficulty;

                const recipeCuisine=document.createElement('p');
                recipeCuisine.innerText='Cuisine:'+' ' +recipe.cuisine;

                const recipeCalories=document.createElement('b');
                recipeCalories.innerText='Calories:'+' '+recipe.caloriesPerServing;

                const recipeTags=document.createElement('div');
                recipeTags.innerText='Tags:'+' '

                for(const tag of recipe.tags){
                    const tg=document.createElement('span');
                    tg.innerText='#'+tag;
                    recipeTags.appendChild(tg);
                }
                const recipeUserId=document.createElement('h6');
                recipeTags.innerText='User:'+' '+recipe.userId;

                const recipeImg=document.createElement('img');
                recipeImg.src=recipe.image;

                const recipeRating=document.createElement('p');
                recipeRating.innerText=' ✯'+' '+recipe.rating;

                const recipeReview=document.createElement('p');
                recipeReview.innerText='Review:'+' '+recipe.reviewCount;

                const recipeType=document.createElement('h5');
                recipeType.innerText='Type:'+' ';
                for(const type of recipe.mealType){
                    const tp=document.createElement('span');
                    tp.innerText=type
                    tp.style.margin='0 5px';
                    recipeType.appendChild(tp);
                }

                divRecipe.append(recipeId,recipeName,recipeIngredients,recipeInstruction,recipePreperingTime,recipeCookingTime,recipeServering,recipeDifficulty,recipeCuisine,recipeCalories, recipeTags,recipeUserId,recipeImg,recipeRating,recipeReview,recipeType);

                recipesContainer.appendChild(divRecipe);
            }
        })

     let prevBtn = document.getElementById('prev');
    let  nextBtn = document.getElementById('next');

    let objectsPerPage=10;
    let curentObjects=0;

    /*function showObject(page){
        recipesContainer.innerHTML='';
        const startIndex=page*objectsPerPage;
        const endIndex=startIndex+objectsPerPage;
         const objectOnPage=recipe.splice(startIndex,endIndex);

         prevBtn.disabled= page===0
        nextBtn.disabled= endIndex >= recipe.length


    }

    document.addEventListener('DOMContentLoaded',()=>{showObject(curentObjects)})

    nextBtn.addEventListener('click',()=>{
        curentObjects++;
        showObject(curentObjects);});

    prevBtn.addEventListener('click',()=>{
        curentObjects--;
        showObject(curentObjects);
    })*/

}
