/* Solution to #3 */

import fs from 'fs';
const filePath =
    '/Users/markkinney/Documents/GitHub/Personal-Projects/AdventOfCoding2022/src/four.txt';

const four = async () => {
    try {
        //read data in as a string
        const data = fs.readFileSync(filePath, 'utf8');
        //not split into array by new lines
        const array = data.split(/\r?\n/);
        array.pop(); //Get rid of blank last item in Array
        console.log(array);
    } catch (err) {
        console.error(err);
    }
};

export default four;
