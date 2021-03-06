// Scroll function that changes navbar colour based on where user is on site
// Also changes color of current section that user is on
function scroll() {
    // Get scroll length and navbar variables
    var t = window.scrollY;
    var nav = document.getElementById("navbar");
    var navLinks = document.getElementById("nav-links");

    // variables to hold links of navbar.
    var brand = document.getElementById("navbar-brand");
    var title = document.getElementById("navbar-title");
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
    l1.style.color = "#2B2B2B";
    l2.style.color = "#2B2B2B";
    l3.style.color = "#2B2B2B";
    l4.style.color = "#2B2B2B";
    brand.style.color = "#2B2B2B";
    title.style.color = "#2B2B2B";
    hamburger.style.color = "#2B2B2B";

    // Conditional that checks which section of the page the user is currently on
    // Less 50px to account for transition animation time of 1s 
    if (t > t4 - 50) {
        l4.style.color = "#6C63FF";
        nav.style.backgroundColor = "white";
        navLinks.style.backgroundColor = "white";
    } else if (t > t3 - 50) {
        l3.style.color = "#6C63FF";
        nav.style.backgroundColor = "white";
        navLinks.style.backgroundColor = "white";
    } else if (t > t2 - 50) {
        l2.style.color = "#6C63FF";
        nav.style.backgroundColor = "#EAEAEA";
        navLinks.style.backgroundColor = "#EAEAEA";
    } else if (t > t1 - 50) {
        l1.style.color = "#6C63FF";
        nav.style.backgroundColor = "lightblue";
        navLinks.style.backgroundColor = "lightblue";
    } else {
        hamburger.style.color = "#2B2B2B";
        title.style.color = "#6C63FF"
        nav.style.backgroundColor = "white";
        navLinks.style.backgroundColor = "white";
    }
}