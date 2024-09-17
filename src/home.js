import bgImage from "./assets/images/shuriken.svg"

class Home {
    #slogan;
    #abstract;
    
    constructor(){
        this.#slogan = "Great place for enjoying oriental and some american dishes";
        this.#abstract = "This restaurant is  a place where we value the east dishes, but also we offer american dishes for you that are committed to taste delicious plates";
    }

    getSlogan(){
        return this.#slogan;
    }

    getAbstract(){
        return this.#abstract;
    }
}

export default function loadPage(){
    const restaurant = new Home();
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const slogan = document.createElement("h2");
    const abstract = document.createElement("p");
    slogan.innerHTML = restaurant.getSlogan();
    abstract.innerHTML = restaurant.getAbstract();

    content.style.backgroundImage = `url(${bgImage})`;
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundPosition = "center";
    content.style.backgroundSize = "60%";

    slogan.style.fontSize = "2rem";
    slogan.style.fontStyle = "italic";
    slogan.style.fontWeight = "bold";
    slogan.style.textAlign = "center";

    abstract.style.fontSize = "1.5rem";
    abstract.style.lineHeight = "1.5rem";
    abstract.style.textAlign = "center";

    content.appendChild(slogan);
    content.appendChild(abstract);
    

}


