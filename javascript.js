// Create an object that represents you. It should have the following properties on it.

// First name
// Last name
// Date of birth
// Place of birth
// Current city of residence
// Current state of residence

const person = Object.create(null, {
    firstName: {
        value: "Dominic"
    },
    lastName: {
        value: "Kantrude"
    },
    dateOfBirth: {
        value: "05/14/1991"
    },
    placeOfBirth: {
        value: "Antelope Valley"
    },
    currentCity: {
        value: "Nahville",
        writable: true
    },
    currentState: {
        value: "Tennessee",
        writable: true
    },
    toString: {
        value: function () {
            console.log(`${this.firstName} ${this.lastName} was born in ${this.placeOfBirth}. He was born on ${this.dateOfBirth}
            He currently live in ${this.currentCity}, ${this.currentState}`)
        }
    }
})

person.toString();