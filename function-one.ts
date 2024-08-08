// Declaratioin of functions

function intro(name: string, age: number, country?: string): string {
    if(country){
        return `My name is ${name} and my age is ${age} I live in ${country}`;
    }
}

// const result = intro("John", 22);
const result = intro("John", 22, "Cameroon");

document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerText = result;
    }
});



/*const intro2 = function intro(name:string, age: number): string{
    return `My name is ${name} and my age is ${age}`;
} ;

const intro3 = (name:string, age: number):string => {
    return `My name is ${name} and my age is ${age}`;
};*/