// task 11-2  #whXxOBlYS0H //
{
    let  recipesBtn = document.getElementById('recipesShow');


    recipesBtn.addEventListener('click',(event)=>{

        fetch('https://dummyjson.com/recipes')
            .then(res=>res.json())
            .then(res => {
                console.log(res)
                Container.innerHTML=''
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
                    recipeCookingTime.innerText='Cooking Time:'+' '+recipe.cookTimeMinutes;

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
                    const recipeUserId=document.createElement('h4');
                    recipeUserId.innerText='User:'+' '+recipe.userId;

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

                    Container.appendChild(divRecipe);
                }
            })
    })
}
