const guests = {
    ANTONY: {
        title: "General",
        region: "Rome",
        dietaryPreference: "Vegetarian",
        pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
        title: "Orator",
        region: "Arpinum",
        dietaryPreference: "Omnivore",
        pastGifts: ["Scroll of Proverbs", "Quill"]
    }
};
// Step 1: Add "BRUTUS" to the guest directory
guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};
// Step 2: Update "CICERO"s past gifts to include "Golden Lyre"
guests.CICERO.pastGifts.push("Golden Lyre")
// Step 3: Retrieve the region of "ANTONY"
const antonyRegion = guests.ANTONY.region;
//Added console.log to check
console.log("Region of Antony:", antonyRegion);
// Step 4: Remove "CICERO" from the guests
delete guests.CICERO;
// Step 5: Assign ANTONY's profile to a new variable and update the region
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";
//Q1: What will be the region of ANTONY in the original 'guests' object?
console.log("Updated region of Antony:", guests.ANTONY.region); //Output: Egypt