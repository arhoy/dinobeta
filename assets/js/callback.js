

function callback(){
    console.log('we are the people!');

}

function higherOrder(fn){
    console.log('312312');
    fn();
}

higherOrder(callback);


function greet(name,greeting){
    return `Hello ${greeting(name)}`; 
}

const stuff = 1;
console.log(stuff);