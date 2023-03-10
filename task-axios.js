// How to use axios https://docs.google.com/presentation/d/1JrufeLjxbBKKjWqnj1l32hcouQ3Hw-8rMIn_zzCTF7U/edit#slide=id.gec017bc9e0_0_351
import axios from "axios"
import {writeFileSync} from "fs";
// use this API
const apiUrl = 'https://swapi.dev/api/planets/?format=json'
// TASKS: 
// 1. create function downloadPlanets, which will download the data and return data.results
// 2. create function parsePlanets for extraction names of planets and return sorted array of planet names
// 3. create function savePlanets to save array of strings into file (as param) named planets.txt (you can write file with https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)
// Example of write File sync in presentation https://docs.google.com/presentation/d/1JrufeLjxbBKKjWqnj1l32hcouQ3Hw-8rMIn_zzCTF7U/edit#slide=id.gec017bc9e0_0_284
// You can't pas array to write file, so we need to transform it to string, like this planetsArray.toString()
// The output file should look like this Alderaan,Bespin,Coruscant,Dagobah,Endor,Hoth,Kamino,Naboo,Tatooine,Yavin IV

// 4. Use all these functions, call them and create new file with names of planets
// So, we will call downloadPlanets -> result send to parsePlanets -> result send to savePlanets


// function with no param, returns data.results from JSON 
let downloadPlanets = async () => {
    const response = await axios.get(apiUrl);
    return response.data.results;
};

// function with one param - array of planets from donwloadPlanets
// return sorted array of planet names
let parsePlanets = (planets) => {
    return planets.map(planets => planets.name).sort((a, b) => a.localeCompare(b));
};

// function with 2 params - fileName and array of planets
let savePlanets = (fileName, planets) => {
   writeFileSync(fileName, planets.toString());
};


downloadPlanets()
    .then( res => parsePlanets(res))
    .then( res => savePlanets("neco.txt", res))
    .catch( res => res);


