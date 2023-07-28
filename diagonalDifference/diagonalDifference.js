function diagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - i - 1];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

let matrixArr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

console.log(diagonalDifference(matrixArr))
