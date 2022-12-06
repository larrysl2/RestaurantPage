import { load } from './load.js';
import { menu } from './menu.js';
import {contact} from './contact.js';

load();

let tabs = (function(){

    const home = document.querySelector(".home");
    home.addEventListener("click",load);
    const menu1 = document.querySelector(".menu");
    menu1.addEventListener("click", menu);
    const contact1 = document. querySelector(".contact");
    contact1.addEventListener("click",contact);    

})();