import hword from './hello.js';
import wword from './world.js';
import css from './style.css';

document.querySelector('#root').innerHTML = wword + '  ' + hword;

console.log('css', css);