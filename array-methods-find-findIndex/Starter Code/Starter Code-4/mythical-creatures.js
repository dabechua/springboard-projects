const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// task 1
const waterCreature = mythicalCreatures.find(function(creature) {
	return creature.type === "Water";
})

console.log(waterCreature.name)

// task 2
const indexOfGriffin = mythicalCreatures.findIndex(function(creature) {
	return creature.name === "Griffin";
});

console.log(indexOfGriffin);

//task 3
const lastSeenCreature = mythicalCreatures.find(function(creature) {
	return creature.lastSeen === "Enchanted Forest";
});

console.log(lastSeenCreature.name)


