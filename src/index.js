import foo from './foo';
import {a, b} from './bar';

// creates JS module exporting base64-encoded image:
import imgSrc from './img/space-cat.png';

const button = document.createElement('button');
button.innerText = 'BUTTON';


const img = document.createElement('img');
img.src = imgSrc;

document.body.appendChild(button);

document.body.appendChild(img);
