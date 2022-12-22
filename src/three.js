/* Solution to #3 */

import fs from 'fs';
const filePath =
    '/Users/markkinney/Documents/GitHub/Personal-Projects/AdventOfCoding2022/src/three.txt';

const three = async () => {
    try {
        //read data in as a string
        const data = fs.readFileSync(filePath, 'utf8');
        //not split into array by new lines
        const array = data.split(/\r?\n/);
        array.pop(); //Get rid of blank last item in Array
        /* Part 1
        let totalPriority = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            totalPriority = totalPriority + findPriority(element);
        }
        console.log('Priority for Part 1: ', totalPriority);
        */
        /* Part 2 */
        let gPriority = 0;
        for (let i = 0; i < array.length; i += 3) {
            gPriority =
                gPriority + groupPriority(array[i], array[i + 1], array[i + 2]);
        }
        console.log('Priority for Part 2: ', gPriority);
    } catch (err) {
        console.error(err);
    }
};

const groupPriority = (a, b, c) => {
    const match = findGroupMatch(a, b, c);
    return calculatePriority(match);
};

const findGroupMatch = (a, b, c) => {
    for (let i = 0; i < a.length; i++) {
        if (b.search(a[i]) > -1) {
            if (c.search(a[i]) > -1) {
                return a[i];
            }
        }
    }
};

const findPriority = (item) => {
    const first = item.substring(0, item.length / 2);
    const second = item.substring(item.length / 2, item.length);
    const match = findMatch(first, second);
    return calculatePriority(match);
};

const calculatePriority = (match) => {
    const charCode = match.charCodeAt(0);
    if (charCode < 91) {
        return charCode - 38;
    }
    {
        return charCode - 96;
    }
};

const findMatch = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (b.search(a[i]) > -1) return a[i];
    }
};

export default three;
