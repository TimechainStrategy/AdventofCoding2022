/* Solution to #5 */

import fs from 'fs';
const filePath =
    '/Users/markkinney/Documents/GitHub/Personal-Projects/AdventOfCoding2022/src/five.txt';

const five = async () => {
    try {
        //read data in as a string
        const data = fs.readFileSync(filePath, 'utf8');
        //not split into array by new lines
        const array = data.split(/\r?\n/);
        array.pop(); //Get rid of blank last item in Array
        //console.log(array);
        let stacks = parseInitialPosition(array.slice(0, 8));
    } catch (err) {
        console.error(err);
    }
};

const parseInitialPosition = (array) => {
    console.log(array);
    return null;
};

const parseMove = (line) => {};

export default five;
