export function menu(){
    const content = document.querySelector("#content");

    content.replaceChildren();

    const head = document.createElement("h1");
    head.textContent="This is the best menu ever because it was exported here!";
    head.classList.add("title");
    content.appendChild(head);

    const menu1 = document.createElement("p");
    menu1.textContent="Black Pepper Beef Tenderloin";
    menu1.classList.add("menu")
    content.appendChild(menu1);
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/restsaurant.jpeg";
    content.appendChild(image);

    const menu2 = document.createElement("p");
    menu2.textContent="Salt and Pepper Shrimp";
    menu2.classList.add("menu")
    content.appendChild(menu2);

    const image1 = document.createElement("img");
    image1.classList.add("image");
    image1.src = "../src/assets/restsaurant.jpeg";
    content.appendChild(image1);
}