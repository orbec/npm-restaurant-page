import bgImage from "./assets/images/ninja-svgrepo-com.svg"

class Menu {
    #abstract;
    
    constructor(){
        this.#abstract = "This is the menu's restaurant";
    }

    getAbstract(){
        return this.#abstract;
    }
}

export default function loadPage(){
    const restaurant = new Menu();
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const abstract = document.createElement("p");
    abstract.innerHTML = restaurant.getAbstract();

    content.style.backgroundImage = `url(${bgImage})`;
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundPosition = "center";
    content.style.backgroundSize = "40%";

    abstract.style.fontSize = "1.5rem";
    abstract.style.lineHeight = "1.5rem";
    abstract.style.textAlign = "center";

    content.appendChild(abstract);
    

}


