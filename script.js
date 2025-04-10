document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    });


    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();
        if (name === "" || message === "") {
        alert("Please fill out all fields.");
        } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        // Optional: reset form
        e.target.reset();
        }
        });