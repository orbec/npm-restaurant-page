import "./styles.css";
import home from "./home";
import menu from "./menu";
import about from "./about";

console.log("Welcome to My restaurant page");
home();

const navButtons = document.querySelector(".nav-buttons");
const buttons = navButtons.querySelectorAll("button");

function open(e) {
    buttons.forEach((button) => button.classList.remove("selected"));
    e.target.classList.add("selected");
    if(e.target.id === "home-button"){
        home();
    }
    if(e.target.id === "menu-button"){
        menu()
    }
    if(e.target.id === "about-button"){
        about();
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        open(e);
    });
});