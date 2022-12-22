/* Solution to #1 */

import fs from 'fs';
const filePath =
    '/Users/markkinney/Documents/GitHub/Personal-Projects/AdventOfCoding2022/src/one.txt';

const one = async () => {
    try {
        //read data in as a string
        const data = fs.readFileSync(filePath, 'utf8');
        //not split into array by new lines
        const array = data.split(/\r?\n/);
        //Make an array of Sums
        let sumArray = [];
        let current = 0;
        for (let index = 0; index < array.length; index++) {
            const element = Number(array[index]);
            if (element === 0) {
                //if (current > largestSum) largestSum = current;
                sumArray.push(current);
                current = 0;
            } else {
                current = current + element;
            }
        }
        //Sort it in reverse
        sumArray
            .sort(function (a, b) {
                return a - b;
            })
            .reverse();
        const topThreeSum = sumArray[0] + sumArray[1] + sumArray[2];
        console.log('The total of the top elf is: ' + sumArray[0]);
        console.log('The total of the top three are: ' + topThreeSum);
    } catch (err) {
        console.error(err);
    }
};

export default one;
