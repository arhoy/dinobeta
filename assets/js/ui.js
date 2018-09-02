
import { API } from './api.js';

export const DOM = {
    resultDiv: document.querySelector('#result__mainpage'),
    inputDiv: document.querySelector('#input_mainpage'),
    modalEl:  document.querySelector('.btn .btn-modal'),
    search: document.querySelector('#search')
}



export class UI {
    constructor(){

    }
  
    // takes list of drinks in an array and displays them to the results section.
    displayCocktails(drinks){
        let html = ``;
      
            drinks.forEach(drink => {
                html += `
                <div class="cocktails" style = "background-image: url(${drink.strDrinkThumb})">
                        <div class="cocktails__content">
                            <h4 class="cocktails__header">${drink.strDrink}</h4>
                        </div>
                        <button type="button" data-id = "${drink.idDrink}" class="btn btn-modal" data-toggle="modal" data-target="#recipe">Show Ingredients</button>
                       
                        <div class="modal fade" id="recipe" tabindex="-1" role="dialog"  aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modalc modal-content">

                              </div>
                              </div>
                        </div><!--.modal-->
                </div>

         
          

                `;
            });
            // display the results to the HTML
            DOM.resultDiv.innerHTML=html;
        }


                           
    
    // displays single recipe in the modal
    displaySingleRecipe(drink){
        console.log(drink);
        let html = ``;
        html += `
  
                    <div class="modal-header">
                        <h2 class="modalc__title modal-title">${drink.strDrink}</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <h3 class="modalc__instructions">Instructions:</h3>
                            <div class="description-text mb-4">${drink.strInstructions}</div>
    
                            <h3  class="modalc__ingredients">Ingredients:</h3>
                            <div class="ingredient-list">
                                    <ul class="list-group">
                                    ${this.displayIngredients(drink)}
                                    </ul>
                            </div>
                        <div class="ingredients mt-3">
    
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
     
        `;
        document.querySelector(`.modal-content`).insertAdjacentHTML('afterbegin',html);

       // Display the ingredients
            //  modalIngredients.innerHTML = this.displayIngredients(drink);
    
    }

        // Prints the ingredients and Measurements
        displayIngredients(drink) {
        // console.log(drink);

        let ingredients = [];
        for(let i = 1; i < 16; i++) {
                const ingredientMeasure = {};
                if( drink[`strIngredient${i}`] !== '' ) {
                    ingredientMeasure.ingredient = drink[`strIngredient${i}`];
                    ingredientMeasure.measure = drink[`strMeasure${i}`];
                    ingredients.push(ingredientMeasure);
                }
        }

        // console.log(ingredients);
        // Build the template

        let ingredientsTemplate = '';
        ingredients.forEach(ingredient => {
                ingredientsTemplate += `
                    <li class="list-group-item">${ingredient.ingredient} - ${ingredient.measure}</li>
                `;
        });

        return ingredientsTemplate;
    }

    clearModalContent(){
        // custom bootstrap js for modal

        $(function () {
            // when the modal is closed
            $('.modal').on('hidden.bs.modal', function () {
                // remove the bs.modal data attribute from it
                console.log('trying to clear modal');
                $(this).removeData('bs.modal');
                // and empty the modal-content element
                $('.modal-content').empty();
            });
        });
    }
  
}