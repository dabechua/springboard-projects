/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const name = "Eve";
const age = 25;
//using shorthand syntax for object properties 
const studyField = "Biology";
const participant = {
  name,
  age,
  studyField,
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
participant.displayInfo = function () { //`this` refers to the object 
  console.log(`Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
};
// Call the method to display participant info
participant.displayInfo(); 

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
participant.displayInfoArrow = () => 
{
    console.log(`Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
};   
/*
 * Observations:
 * TODO: Explain here.
 * Arrow functions do not bind their own 'this'. 
 * `this.name`, `this.age`, and 1this.studyField` are undefined inside the arrow function. 
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, propName, value) { // Use spread to copy object and dynamically set a property
    return {
        ...obj,
        [propName]: value
};
} 

//test
const updatedParticipant = updateParticipantInfo(participant, "age",30);
console.log(updatedParticipant);  