const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//Step 1
let locationStart = "";
if (emblemClue1 === "Eagle") { //the base name of the location
    locationStart = "Forum";
} else if (emblemClue1 === "Lion") {
    locationStart = "Colosseum";
} else {
    locationStart = "Villa";
}
console.log("Step 1 - Location after first clue:", locationStart);

// Step 2
if (emblemClue2 === "Laurel" && locationStart === "forum") {
locationStart += "Augustus";
} else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
locationStart += "of Pompey";
}
console.log("Step 2 - Location after second clue:", locationStart);

//step 3
switch (emblemClue3) {
    case 7:
        locationStart += " North";
        break;
    case 3:
        locationStart += " South";
        break;
    case 8:
        locationStart += " East";
        break;
    case 4:
        locationStart += " West";
        break;
}

//Question: Why is it important to be careful when using ==  (double equals) instead of === (triple equals) in our conditionals?
ANS:
 * == (double equals) performs type coercion, meaning it converts different data types to match before comparing.
 * === (triple equals) strictly checks both type and value, preventing unintended behavior.