export function contact(){
const content =document.querySelector("#content");

content.replaceChildren();
const head = document.createElement("p");
head.classList.add("headercontent");
head.textContent="Contact us at 111-111-1111";
content.appendChild(head);
const image1 = document.createElement("img");
    image1.classList.add("image");
    image1.src = "../src/assets/restsaurant.jpeg";
    content.appendChild(image1);

const head2 = document.createElement("p");
head2.classList.add("headercontent");
head2.textContent="Email us at thebestrestaurant@email.com";
content.appendChild(head2);
const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/restsaurant.jpeg";
    content.appendChild(image);


}