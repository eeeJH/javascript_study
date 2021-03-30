import hword from './hello.js';
import wword from './world.js';
import _ from 'lodash';
import css from './style.css';

document.querySelector('#root').innerHTML = _.join([hword, wword], ' ');

console.log('css', css);