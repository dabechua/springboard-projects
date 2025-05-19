// 💡 Project supported by ChatGPT (AI assistant)
// Helped debug API fetch, DOM rendering, and gameplay logic

// You only need to touch comments with the todo of this file to complete the assignment!

/*
=== How to build on top of the starter code? ===

Problems have multiple solutions.
We have created a structure to help you on solving this problem.
On top of the structure, we created a flow shaped via the below functions.
We left descriptions, hints, and to-do sections in between.
If you want to use this code, fill in the to-do sections.
However, if you're going to solve this problem yourself in different ways, you can ignore this starter code.
 */

/*
=== Terminology for the API ===

Clue: The name given to the structure that contains the question and the answer together.
Category: The name given to the structure containing clues on the same topic.
 */

/*
=== Data Structure of Request the API Endpoints ===

/categories:
[
  {
    "id": <category ID>,
    "title": <category name>,
    "clues_count": <number of clues in the category where each clue has a question, an answer, and a value>
  },
  ... more categories
]

/category:
{
  "id": <category ID>,
  "title": <category name>,
  "clues_count": <number of clues in the category>,
  "clues": [
    {
      "id": <clue ID>,
      "answer": <answer to the question>,
      "question": <question>,
      "value": <value of the question (be careful not all questions have values) (Hint: you can assign your own value such as 200 or skip)>,
      ... more properties
    },
    ... more clues
  ]
}
 */

const API_URL = "https://rithm-jeopardy.herokuapp.com/api/"; // The URL of the API.
const NUMBER_OF_CATEGORIES = 6; // The number of categories you will be fetching. You can change this number.
const NUMBER_OF_CLUES_PER_CATEGORY = 5; // The number of clues you will be displaying per category. You can change this number.

let categories = []; // The categories with clues fetched from the API.
/*
[
  {
    "id": <category ID>,
    "title": <category name>,
    "clues": [
      {
        "id": <clue ID>,
        "value": <value (e.g. $200)>,
        "question": <question>,
        "answer": <answer>
      },
      ... more categories
    ]
  },
  ... more categories
]
 */

let activeClue = null; // Currently selected clue data.
let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, and displaying the answer to the question.
/*
0: Empty. Waiting to be filled. If a clue is clicked, it shows the question (transits to 1).
1: Showing a question. If the question is clicked, it shows the answer (transits to 2).
2: Showing an answer. If the answer is clicked, it empties (transits back to 0).
 */

let isPlayButtonClickable = true; // Only clickable when the game haven't started yet or ended. Prevents the button to be clicked during the game.

$("#play").on("click", handleClickOfPlay);

/**
 * Manages the behavior of the play button (start or restart) when clicked.
 * Sets up the game.
 *
 * Hints:
 * - Sets up the game when the play button is clickable.
 */
function handleClickOfPlay ()
{
  // todo set the game up if the play button is clickable
  if (isPlayButtonClickable) {
    isPlayButtonClickable = false;
    $("#play").text("Loading...");
    setupTheGame();
  }
}

/**
 * Sets up the game.
 *
 * 1. Cleans the game since the user can be restarting the game.
 * 2. Get category IDs
 * 3. For each category ID, get the category with clues.
 * 4. Fill the HTML table with the game data.
 *
 * Hints:
 * - The game play is managed via events.
 */
async function setupTheGame () {
  // todo show the spinner while setting up the game
  $("#spinner").removeClass("disabled");

  // todo reset the DOM (table, button text, the end text)
  $("#categories").empty();
  $("#clues").empty();
  $("#active-clue").empty();
  $("#play").text("Loading...");

  // todo fetch the game data (categories with clues)
  const ids = await getCategoryIds();
  const promises = ids.map(id => getCategoryData(id));
  categories = await Promise.all(promises);

  // todo fill the table
  fillTable(categories);
$("#spinner").addClass("disabled");
$("#play").text("Restart the Game!");
}


/**
 * Gets as many category IDs as in the `NUMBER_OF_CATEGORIES` constant.
 * Returns an array of numbers where each number is a category ID.
 *
 * Hints:
 * - Use /categories endpoint of the API.
 * - Request as many categories as possible, such as 100. Randomly pick as many categories as given in the `NUMBER_OF_CATEGORIES` constant, if the number of clues in the category is enough (<= `NUMBER_OF_CLUES` constant).
 */
async function getCategoryIds ()
{
  const ids = []; // todo set after fetching
  const res = await axios.get(`${API_URL}categories?count=100`);
  const all = res.data;

  const filtered = all.filter(c => c.clues_count >= NUMBER_OF_CLUES_PER_CATEGORY);

 // todo fetch NUMBER_OF_CATEGORIES amount of categories
  const random = _.sampleSize(filtered, NUMBER_OF_CATEGORIES);
  return random.map(cat => cat.id);
  }
  // return ids;count=100

/**
 * Gets category with as many clues as given in the `NUMBER_OF_CLUES` constant.
 * Returns the below data structure:
 *  {
 *    "id": <category ID>
 *    "title": <category name>
 *    "clues": [
 *      {
 *        "id": <clue ID>,
 *        "value": <value of the question>,
 *        "question": <question>,
 *        "answer": <answer to the question>
 *      },
 *      ... more clues
 *    ]
 *  }
 *
 * Hints:
 * - You need to call this function for each category ID returned from the `getCategoryIds` function.
 * - Use /category endpoint of the API.
 * - In the API, not all clues have a value. You can assign your own value or skip that clue.
 */
async function getCategoryData (categoryId) {
  // const categoryWithCLues = {
  //   id: categoryId,
  //   title: undefined,
  //   clues: []
  // }

  const res = await axios.get(`${API_URL}category?id=${categoryId}`);
  const data = res.data;

  const clues = data.clues
    .filter(c => c.question && c.answer)
    .slice(0, NUMBER_OF_CLUES_PER_CATEGORY)
    .map((clue, i) => ({
      id: clue.id,
      value: (i + 1) * 100,
      question: clue.question,
      answer: clue.answer
    }));

  return {
    id: data.id,
    title: data.title,
    clues: clues
  };
}
  
  

    // title: undefined, // todo set after fetching
    // clues: [] // todo set after fetching
  //   title: data.title,
  //   clues: data.clues
  //      .filter(c => c.question && c.answer)
  //      .slice(0, NUMBER_OF_CLUES_PER_CATEGORY)
  //      .map((clue, index) => ({
  //       id: clue.id,
  //       value: (index + 1) * 100,
  //       question: clue.question,
  //       answer: clue.answer
  //      }))
  // };

  // todo fetch the category with NUMBER_OF_CLUES_PER_CATEGORY amount of clues
  // const res = await axios.get(`{API_URL}category?id=${cateoryId}`);
  // const data = res.data;


/**
 * Fills the HTML table using category data.
 *
 * Hints:
 * - You need to call this function using an array of categories where each element comes from the `getCategoryData` function.
 * - Table head (thead) has a row (#categories).
 *   For each category, you should create a cell element (th) and append that to it.
 * - Table body (tbody) has a row (#clues).
 *   For each category, you should create a cell element (td) and append that to it.
 *   Besides, for each clue in a category, you should create a row element (tr) and append it to the corresponding previously created and appended cell element (td).
 * - To this row elements (tr) should add an event listener (handled by the `handleClickOfClue` function) and set their IDs with category and clue IDs. This will enable you to detect which clue is clicked.
 */
function fillTable(categories) {
  const $categoriesRow = $("#categories");
  const $cluesRow = $("#clues");
  $categoriesRow.empty();
  $cluesRow.empty();

  // Create a table header <th> and a clues column <td> for each category
  for (let cat of categories) {
    // Add category title to the header row
    $("<th>").text(cat.title).appendTo($categoriesRow);

    // Create a column cell for clues in this category
    const $clueColumn = $("<td>");
    // For each clue, create a row element and append to this column
    for (let clue of cat.clues) {
      const displayValue = clue.value ? `$${clue.value}` : "$0";
      const $clueCell = $("<tr>")
        .addClass("clue")                           // mark as a clue element
        .attr("id", `${cat.id}-${clue.id}`)         // unique ID combining category and clue IDs
        .text(displayValue);
      $clueCell.on("click", handleClickOfClue);     // attach click handler for this clue
      $clueColumn.append($clueCell);
    }
    $cluesRow.append($clueColumn);
  }
}


/**
 * Manages the behavior when a clue is clicked.
 * Displays the question if there is no active question.
 *
 * Hints:
 * - Control the behavior using the `activeClueMode` variable.
 * - Identify the category and clue IDs using the clicked element's ID.
 * - Remove the clicked clue from categories since each clue should be clickable only once. Don't forget to remove the category if all the clues are removed.
 * - Don't forget to update the `activeClueMode` variable.
 *
 */
function handleClickOfClue(event) {
  if (activeClueMode !== 0) return;

  const id = $(event.target).attr("id");
  const [catIdStr, clueIdStr] = id.split("-");
  const catId = +catIdStr;
  const clueId = +clueIdStr;

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === catId) {
      const clueIndex = categories[i].clues.findIndex(c => c.id === clueId);
      if (clueIndex !== -1) {
        activeClue = categories[i].clues[clueIndex];
        categories[i].clues.splice(clueIndex, 1);
        if (categories[i].clues.length === 0) categories.splice(i, 1);
        break;
      }
    }
  }

  activeClueMode = 1;
  $("#active-clue").html(activeClue.question);
  $(event.target).addClass("viewed");
}


/**
 * Manages the behavior when a displayed question or answer is clicked.
 * Displays the answer if currently displaying a question.
 * Clears if currently displaying an answer.
 *
 * Hints:
 * - Control the behavior using the `activeClueMode` variable.
 * - After clearing, check the categories array to see if it is empty to decide to end the game.
 * - Don't forget to update the `activeClueMode` variable.
 */
function handleClickOfActiveClue(event) {
  // Reveal the answer if a question is currently being shown
  if (activeClueMode === 1) {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  }
  // If an answer is currently shown, clear the display
  else if (activeClueMode === 2) {
    activeClueMode = 0;
    $("#active-clue").html(null);  // or .empty() to clear the text

    // If no clues are left, end the game
    if (categories.length === 0) {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}
