// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    themeToggle.textContent = currentTheme === "dark" ? "☀️ Toggle Theme" : "🌙 Toggle Theme";
});

// Apply saved theme on load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Toggle Theme";
    } else {
        themeToggle.textContent = "🌙 Toggle Theme";
    }
});

// Post a new message
document.getElementById("postButton").addEventListener("click", () => {
    const message = document.getElementById("postMessage").value;
    const image = document.getElementById("imageUpload").files[0];
    const forumPosts = document.getElementById("forum-posts");

    if (message.trim() !== "" || image) {
        const newPost = document.createElement("div");
        newPost.classList.add("post");

        let postContent = `<p><strong>You</strong> shared a tip</p><p>"${message}"</p>`;
        if (image) {
            const imageURL = URL.createObjectURL(image);
            postContent += `<img src="${imageURL}" alt="Post Image">`;
        }

        newPost.innerHTML = postContent;
        forumPosts.appendChild(newPost);

        document.getElementById("postMessage").value = "";
        document.getElementById("imageUpload").value = "";
    } else {
        alert("Please enter a message or upload an image to post.");
    }
});

// Social Sharing Simulations
document.getElementById("facebook-share").addEventListener("click", () => {
    alert("Shared on Facebook!");
});

document.getElementById("twitter-share").addEventListener("click", () => {
    alert("Shared on Twitter!");
});
