// DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
    
    //Selecting the HTML documents
    const loginForm = document.getElementById("login-form"); 
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const logoutBtn = document.getElementById("logout-button");
    const systemMessageContainer = document.getElementById("system-message");
    const intelligenceForm = document.getElementById("intelligence-form");
    const pageNumberInput = document.getElementById("page-number-input");
    const hackersContainer = document.getElementById("hackers");


    // Set up variables
    const api = "https://reqres.in/api";
    let token = "";


    // Login Function
    loginForm.addEventListener("submit", async function (e) { 
        e.preventDefault(); 

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();


        try {
            const res =  await axios.post(`${api}/login`, { email, password}, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });

            token = res.data.token;
            systemMessageContainer.textContent = `Loggen in! Token: ${token}`;
        } catch (err) {
            const message = err.response?.data?.error || "Something went wrong.";
            systemMessageContainer.textContent = `Login failed: ${message}`;
        }

        // Reset fields after attempt
        loginForm.reset();
    });

    // handle logout
    logoutBtn.addEventListener("click", () => {
        token = "";
    messageBox.textContent = " You have logged out.";
        hackersBox.innerHTML = "";
    });

    // Fetch Users
    intelligenceForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        if (!token) {
            systemMessageContainer.textContent = " You must login to access hacker list.";
            return;
        }
        const page = pageNumberInput.value.trim || 1;

        try {
            const res = await axios.get(`${api}/users`,{
                params: { delay: 1, page },
                headers: { 'x-api-key': 'reqres-free-v1' }
            });

            const hackers = res.data.data;
            hackersContainer.innerHTML = "";

             for (const hacker of hackers) {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${hacker.first_name} ${hacker.last_name}</strong></p>
        <p>Email: ${hacker.email}</p>
        <img src="${hacker.avatar}" width="100" alt="Avatar of ${hacker.first_name}">
        <hr>
      `;
      hackersContainer.appendChild(div);
    }

  } catch (err) {
    hackersContainer.innerText = ` Failed to load hackers.\n${err.message}`;
  }

  intelligenceForm.reset();
});
});

 //Assisted by ChatGPT (OpenAI)
//  Role: Debugging partner, tutor, and code explainer.
// Support: Helped with async/await logic, API integration, event listener setup,
