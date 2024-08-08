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
};
function convertAgeToMonth(person) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;
}
console.log(convertAgeToMonth(person));
