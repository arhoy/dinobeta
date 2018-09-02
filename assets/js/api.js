export class API{
    constructor(){

    }
    // get list of drinks
    async getDrinksByName(drink){
        const url =  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
        const res = await url.json();
        return {res};
    }

    //get single recipe
    async getSingleRecipe(id){
        const url = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const res = await url.json();
        return {
            res
        }
    }

}