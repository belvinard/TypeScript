// Declaratioin of functions
function intro(name, age, country) {
    if (country) {
        return "My name is ".concat(name, " and my age is ").concat(age, " I live in ").concat(country);
    }
}
// const result = intro("John", 22);
var result = intro("John", 22, "Cameroon");
document.addEventListener("DOMContentLoaded", function () {
    var resultDiv = document.getElementById('result');
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
