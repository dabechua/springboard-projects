/*
*ChatGPT helped guide, debug, and explain steps for this project
*/

// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = [];
let monitoringTaskId;

//console.log(oneTimeTasks);

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push( { func: func, delay: delay} ) ;
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (const oneTimeTask of oneTimeTasks) {
		setTimeout(oneTimeTask.func, oneTimeTask.delay);
		//console.log(runOneTimeTasks());
	}
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	console.log("Starting system checks...");
	
	monitoringTaskId = setInterval(function() {
		console.log("Checking space station...");
        // Simulated checks
		const oxygenLevel = Math.random() * 100;
		const powerStatus = Math.random() > 0.1 ? "Good" : "Low Power";
		const communicationCheck = Math.random() > 0.05 ? "Signal Storng" : "Signal Lost";

		console.log("Oxygen: " + oxygenLevel.toFixed(2) + "% | Power: " + powerStatus + " | Signal: " + communicationCheck);
	}, 2000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
	console.log("Stopped Monitoring.");
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let timeLeft = duration;

	const countdownId = setInterval(function() {
		console.log("Countdown: " + timeLeft + " seconds remaining");
		timeLeft--;

		if (timeLeft < 0) {
			clearInterval(countdownId);
			console.log("Liftoff!");
		}
	}, 1000)
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	addOneTimeTask (function() {
		console.log("Checking systems...");
	}, 1000);

	addOneTimeTask (function() {
		console.log("Fueling rocket...");
	}, 3000);

	addOneTimeTask (function() {
		console.log("Final system check...");
	}, 5000);

	runOneTimeTasks();

	startMonitoring();

	setTimeout (function() {
		stopMonitoring();
	}, 10000);

	setTimeout (function() {
		startCountdown(5);
}, 11000);
}

scheduleMission(); // Starts the mission.
