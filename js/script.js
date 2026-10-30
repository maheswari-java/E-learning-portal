console.log("LearnHub loaded");

// Student Registration
function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let course = document.getElementById("course").value;
    let message = document.getElementById("message");

    if (!name || !email || !password || !course) {
        message.textContent = "Please fill all fields.";
        return false;
    }

    if (password.length < 6) {
        message.textContent = "Password must contain 6 characters.";
        return false;
    }

    message.textContent = "Registration successful!";
    return false;
}

// Student Login
function loginUser() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("loginMessage");

    if (!email || !password) {
        message.textContent = "Please enter email and password.";
        return false;
    }

    message.textContent = "Login form submitted successfully!";
    return false;
}

// Course Progress
function showProgress() {
    document.getElementById("summary").textContent =
        "Keep learning! Check your course progress above.";
}

// Online Quiz
function checkQuiz() {
    let score = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === "b")
        score++;

    if (document.querySelector('input[name="q2"]:checked')?.value === "a")
        score++;

    if (document.querySelector('input[name="q3"]:checked')?.value === "c")
        score++;

    document.getElementById("result").textContent =
        "Your score: " + score + "/3";

    return false;
}

// Contact Form
function sendMessage() {
    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let message = document.getElementById("contactMessage").value.trim();
    let result = document.getElementById("contactResult");

    if (!name || !email || !message) {
        result.textContent = "Please fill all fields.";
        return false;
    }

    result.textContent = "Message submitted successfully!";
    return false;
}

// Student Feedback
function submitFeedback() {
    let name = document.getElementById("studentName").value.trim();
    let rating = document.getElementById("rating").value;
    let feedback = document.getElementById("feedbackText").value.trim();
    let result = document.getElementById("feedbackResult");

    if (!name || !rating || !feedback) {
        result.textContent = "Please complete all fields.";
        return false;
    }

    result.textContent = "Thank you for your feedback, " + name + "!";
    return false;
}