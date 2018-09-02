// note script type must be module in the app.js import on the index file
import {UI,DOM} from './ui.js';
import {API} from './api.js';

// instantiate the ui and api classes
const ui = new UI();
const api = new API();


// create event listeners function
function eventListeners(){
    if(DOM.search){
        DOM.search.addEventListener('click',getCockTails);
    }
    // when you see the result div add event listener.
    if(DOM.resultDiv){
        DOM.resultDiv.addEventListener('click',resultsDelegation); 
    }
}
eventListeners();

// get cocktails function
function getCockTails(e){
    e.preventDefault();
  
    const input = document.getElementById('input_mainpage').value;
    if (!DOM.resultDiv || input === ""){
        console.log(`error`);

        DOM.resultDiv.innerHTML = `<p class = "alert alert-error"> <strong>Please enter a valid input!</strong></p>`;
    }
    else{

        // get the values of the api based on the input. Store then promise inside variable prom
        const prom = api.getDrinksByName(input);
        // traverse the promise to get the values.
        prom
            .then(data=>{
                // array of drinks
                const drinks = data.res.drinks;
                // send drinks array list to function so it display it in ui.
                 ui.displayCocktails(drinks);     
                 
                // clear modal content
                ui.clearModalContent();
            })
  
                
    }   
}

// delegation for the results area
function resultsDelegation(e){
    e.preventDefault();
  
    if(e.target.classList.contains('btn-modal')){
        // send the specific id of the button to the getSingleRecipe api.
        const prom =  api.getSingleRecipe(e.target.dataset.id)
         prom
            .then(recipe=>{
                const drink = recipe.res.drinks[0];
                // display single recipe in modal
                ui.displaySingleRecipe(drink);
            })
    }
}
