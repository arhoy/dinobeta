export class API{
    constructor(){

    }
    // get list of drinks
    async getDrinksByName(drink){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url =  await fetch(`${proxy}https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
        const res = await url.json();
        return {res};
    }

    //get single recipe
    async getSingleRecipe(id){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = await fetch(`${proxy}http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const res = await url.json();
        return {
            res
        }
    }

}