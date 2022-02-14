// Scroll function that changes navbar colour based on where user is on site
// Also changes color of current section that user is on
function scroll() {
    // Get scroll length and navbar variables
    var t = window.scrollY;
    var nav = document.getElementById("navbar");

    // variables to hold links of navbar.
    var brand = document.getElementById("navbar-brand");
    var l1 = document.getElementById("projects-link");
    var l2 = document.getElementById("skills-link");
    var l3 = document.getElementById("about-link");
    var l4 = document.getElementById("contact-link");
    var hamburger = document.getElementById("burger");

    // variables to hold sections of the page.
    var s1 = document.getElementById("projects");
    var s2 = document.getElementById("skills");
    var s3 = document.getElementById("about");
    var s4 = document.getElementById("contact");

    // variables to hold offset from sections to the top of the page.
    var t1 = s1.offsetTop;
    var t2 = s2.offsetTop;
    var t3 = s3.offsetTop;
    var t4 = s4.offsetTop;

    //hold colours of original links to change back to after leaving section
    l1.style.color = "black";
    l2.style.color = "black";
    l3.style.color = "black";
    l4.style.color = "black";
    brand.style.color = "black";
    hamburger.style.color = "black";

    // Conditional that checks which section of the page the user is currently on
    // Less 50px to account for transition animation time of 1s 
    if (t > t4 - 50) {
        l4.style.color = "blue";
        nav.style.backgroundColor = "white"
    } else if (t > t3 - 50) {
        l3.style.color = "blue";
        nav.style.backgroundColor = "white";
    } else if (t > t2 - 50) {
        l2.style.color = "blue";
        nav.style.backgroundColor = "white";
    } else if (t > t1 - 50) {
        l1.style.color = "blue";
        nav.style.backgroundColor = "lightblue";
    } else {
        brand.style.color = "blue";
        hamburger.style.color = "black";
        nav.style.backgroundColor = "white";
    }
}