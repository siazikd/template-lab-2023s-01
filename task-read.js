// 1. display (console.log) all names of vehicles from local file data/vehicles.json (folder data, file vehicles.json) (you can use FS readFileSync)
// How to use readFileSync can be found here https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/

import {readFileSync} from 'fs';

let data = JSON.parse(readFileSync('./data/vehicles.json').toString()).map( planet => planet.name);
console.log(data);
