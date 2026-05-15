// GLOBAL WEBSITE SCRIPT

// NAV ACTIVE (optional highlight current page)
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


// SIMPLE FORM VALIDATION (works anywhere)
function validateForm() {
    let inputs = document.querySelectorAll("input, select");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Please fill all fields!");
            return false;
        }
    }

    alert("Form submitted successfully!");
    return true;
}


// FOOTER MESSAGE (global effect)
console.log("FANTASTIC HOTEL SYSTEM LOADED SUCCESSFULLY");

// BUTTON HOVER EFFECT (extra JS behavior)
document.addEventListener("mouseover", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.style.transform = "scale(1.05)";
    }
});

document.addEventListener("mouseout", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.style.transform = "scale(1)";
    }
});