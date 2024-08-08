// Declaratioin of functions
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["years"] = "years";
    AgeUnit["months"] = "months";
})(AgeUnit || (AgeUnit = {}));
var person = {
    name: "Peter",
    age: 30.5,
    ageUnit: AgeUnit.years,
    country: "USA",
    greet: function (greeting) {
        return "".concat(greeting, " ").concat(person.name);
    }
};
function convertAgeToMonth(person) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;
}
console.log(person.greet("Good Morning")); // Corrected function call
