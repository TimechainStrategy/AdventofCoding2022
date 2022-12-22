/* Solution to #2 */

import fs from 'fs';
const filePath =
    '/Users/markkinney/Documents/GitHub/Personal-Projects/AdventOfCoding2022/src/two.txt';

const two = async () => {
    try {
        //read data in as a string
        const data = fs.readFileSync(filePath, 'utf8');
        //not split into array by new lines
        const array = data.split(/\r?\n/);
        let totalScoreOne = 0;
        let totalScoreTwo = 0;
        for (let index = 0; index < array.length; index++) {
            //for (let index = 0; index < 10; index++) {
            const element = array[index];
            totalScoreOne =
                totalScoreOne + findScorePartOne(element[0], element[2]);
            totalScoreTwo =
                totalScoreTwo + findScorePartTwo(element[0], element[2]);
        }
        console.log('Total Score Part One is: ' + totalScoreOne);
        console.log('Total Score Part Two is: ' + totalScoreTwo);
    } catch (err) {
        console.error(err);
    }
};

const findScorePartTwo = (them, me) => {
    let gScore = gameScore2(me);
    let tScore = typeScore2(them, me);
    const totalScore = gScore + tScore;
    console.log(
        'Them: ',
        them,
        '   Me: ',
        me,
        '   gameScore: ',
        gScore,
        '   typeScore: ',
        tScore,
        '    totalScore: ',
        totalScore
    );
    return totalScore;
};

const typeScore2 = (them, me) => {
    let score = 0;
    them === 'A' && me === 'X' ? (score = 3) : null;
    them === 'A' && me === 'Y' ? (score = 1) : null;
    them === 'A' && me === 'Z' ? (score = 2) : null;
    them === 'B' && me === 'X' ? (score = 1) : null;
    them === 'B' && me === 'Y' ? (score = 2) : null;
    them === 'B' && me === 'Z' ? (score = 3) : null;
    them === 'C' && me === 'X' ? (score = 2) : null;
    them === 'C' && me === 'Y' ? (score = 3) : null;
    them === 'C' && me === 'Z' ? (score = 1) : null;
    return score;
};

const gameScore2 = (me) => {
    let score = 0;
    me === 'X' ? (score = 0) : null;
    me === 'Y' ? (score = 3) : null;
    me === 'Z' ? (score = 6) : null;
    return score;
};

const findScorePartOne = (them, me) => {
    let gScore = gameScore(them, me);
    let tScore = typeScore(me);
    const totalScore = gScore + tScore;
    console.log(
        'Them: ',
        them,
        '   Me: ',
        me,
        '   gameScore: ',
        gScore,
        '   typeScore: ',
        tScore,
        '    totalScore: ',
        totalScore
    );
    return totalScore;
};

const typeScore = (me) => {
    let score = 0;
    me === 'X' ? (score = 1) : null;
    me === 'Y' ? (score = 2) : null;
    me === 'Z' ? (score = 3) : null;
    return score;
};

const gameScore = (them, me) => {
    let score = 0;
    them === 'A' && me === 'X' ? (score = 3) : null;
    them === 'A' && me === 'Y' ? (score = 6) : null;
    them === 'A' && me === 'Z' ? (score = 0) : null;
    them === 'B' && me === 'X' ? (score = 0) : null;
    them === 'B' && me === 'Y' ? (score = 3) : null;
    them === 'B' && me === 'Z' ? (score = 6) : null;
    them === 'C' && me === 'X' ? (score = 6) : null;
    them === 'C' && me === 'Y' ? (score = 0) : null;
    them === 'C' && me === 'Z' ? (score = 3) : null;
    //console.log('Them: ' + them, '   Me: ' + me, '   Game Score: ', score);
    return score;
};

export default two;
