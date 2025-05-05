/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

function trackSightings(...animalNames) {
	animalNames.forEach(animal => {
		console.log(`Sighted: ${animal}`);
	});
}

trackSightings("Elephant", "Panda", "Rhino", "Giraffe");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const allHabitats = [...forestHabitats, ...savannahHabitats];
console.log("Combined Habitats:", allHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const updatedRhinosStatus = {
	...rhinoStatus,
	population: 800, 
	habitat: "Protected Reserve"
};
 console.log("Updated Rhino Status:", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const lionWithGenetics = {
	...lionProfile,
	genetics: {
		diversityLevel: "High",
		markerCount: 42
	}
};
/*
 * Observations:
 * TODO: Explain here.
 * The new object is a shallow copy of 'lionProfile', with a new 'genetics' property.
 * Changing top-level props in 'lionWithGenetics' won't affect 'lionProfile'.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const copiedEcosystem = { ...ecosystemHealth };
copiedEcosystem.foodSupply.herbivores = "Low";

console.log("Original Ecosystem:", ecosystemHealth);
console.log("Copied Ecosystem:", copiedEcosystem);
/*
 * Observations:
 * TODO: Explain here.
 * The top-levelobject is shallow copied but 'foodSupply' is a shared nested object.
 * Modifying 'copiedEcosystem.foodSupply.herbivores' also affects 'ecosystemHealth'.
 * deep copy needed to isolate
 */

/*
 * Assisted by ChatGPT (OpenAI)
*/