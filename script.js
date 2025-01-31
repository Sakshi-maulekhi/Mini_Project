document.addEventListener("DOMContentLoaded", function () {
    // Add click event to service buttons
    const buttons = document.querySelectorAll(".service button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("More information coming soon!");
        });
    });
});
