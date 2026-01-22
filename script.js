function scrollNext() {
    document.getElementById("timeline")
        .scrollIntoView({ behavior: "smooth" });
}


// Show welcome message
function showMessage() {
    alert("Welcome to Empliz Innovation Pvt. Ltd!");
}
function showmessage() {
    alert("go to next page");
}
const img = document.getElementById("followImg");

document.addEventListener("mousemove", (e) => {
  img.style.left = e.pageX + "px";
  img.style.top = e.pageY + "px";
});


// Contact form handling
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("Firstname").value.trim();
        //const name = document.getElementById("Lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("status");

        if (!name ||  !email || !message) {
            status.textContent = "Please fill all fields.";
            status.style.color = "red";
            return;
        }

        status.textContent = "Thank you! We received your message.";
        status.style.color = "green";

        form.reset();
    });
}

