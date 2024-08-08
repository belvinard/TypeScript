// Declaratioin of functions

enum AgeUnit{
    years = "years",
    months = "months",
}

type Person = {
    name: string;
    age: number; 
    ageUnit: AgeUnit;
    country: string;
};

const person: Person = {
    name: "Peter",
    age: 30.5,
    ageUnit: AgeUnit.years,
    country: "USA",
};

function convertAgeToMonth (person : Person):Person{
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;

    return person;

}

console.log(convertAgeToMonth(person));
