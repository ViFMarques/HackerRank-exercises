//1 - Plus Minus
function plusMinus(arr) {
    var numbersPositives = 0
    var numbersNegatives = 0
    var numbersZero = 0
    let total = arr.length;
    let i = 0;

    while (i < total) {
        (arr[i]);

        if (arr[i] > 0) {
            numbersPositives++
        } else if (arr[i] < 0) {
            numbersNegatives++
        } else {
            numbersZero++
        }
        i++;
    }
    console.log((numbersPositives / total).toFixed(6));
    console.log((numbersNegatives / total).toFixed(6));
    console.log((numbersZero / total).toFixed(6));
}

//2 - Staircase
function staircase(n) {
    let x = 0
    var qntHashtag = 1

    while (x < n) {
        var txtLinha = ""
        var qntEspacos = n - qntHashtag

        let i = 0
        while (i < qntEspacos) {
            txtLinha = txtLinha + " "
            i++;
        }

        let o = 0
        while (o < qntHashtag) {
            txtLinha = txtLinha + "#"
            o++;
        }

        console.log(txtLinha)
        qntHashtag++;
        x++;
    }
}

//3 - Camelcase
function camelcase(s) {
    var quantityUpperCase = 1
    for (var i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
            quantityUpperCase += 1
        }
    }
    return (quantityUpperCase)
}

//4 - The Full Counting Sort

function countSort(arr) {
    let strings = [];
    arr.forEach((value, index) => {
        let i = strings[value[0]];
        const str = index < arr.length / 2 ? '-' : value[1]
        if (!i) strings[value[0]] = [str];
        else i.push(str);
    });

    console.log(strings.flat().join(' '));
}


//5 - A Very Big Sum

function aVeryBigSum(ar) {

    var sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return (sum)
}


//6 - Diagonal Difference

function diagonalDifference(arr) {
    const len = arr.length;
    let diagonalSum = 0;
    let counterDiagonalSum = 0;

    for (let i = 0; i < len; i++) {
        for (let k = 0; k < len; k++) {
            if (i === k) {
                diagonalSum += arr[i][k];

            }
            if (i + k == len - 1) {
                counterDiagonalSum += arr[i][k];
            }

        }
    }
    var diagonalDifference = (diagonalSum - counterDiagonalSum);
    if (diagonalDifference < 0) {
        diagonalDifference = diagonalDifference * -1
    }

    return (diagonalDifference);
}


//7 - Solve me first

function solveMeFirst(a, b) {
    return (a + b);
}
