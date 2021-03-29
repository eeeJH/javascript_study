import hword from './hello.js';
import wword from './world.js';
import css from './style.css';

document.querySelector('#root').innerHTML = hword + '  ' + wword;

console.log('css', css);