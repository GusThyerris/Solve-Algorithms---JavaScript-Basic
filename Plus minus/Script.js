'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let qtdZero = 0;
    let qtdPos = 0;
    let qtdNeg = 0;
    let length = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            qtdZero++
        }
        else if (arr[i] < 0) {
            qtdPos++
        }
        else if (arr[i] > 0) {
            qtdNeg++
        }
    }
    console.log((qtdNeg / length).toFixed(6));
    console.log((qtdPos / length).toFixed(6));
    console.log((qtdZero / length).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
