export function load(){
    const content = document.querySelector("#content");

    content.replaceChildren();
    const head = document.createElement("h1");
    head.textContent = "This is the best restaurant ever."
    head.classList.add("title");
    content.appendChild(head);

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/restsaurant.jpeg";
    content.appendChild(image);
    const paragraph = document.createElement("p");
    paragraph.classList.add("para");
    paragraph.textContent ="This is definitely the best restaurant ever because it implements webpack and npm!";
    content.appendChild(paragraph);
}