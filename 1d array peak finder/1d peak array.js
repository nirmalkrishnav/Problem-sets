var arr = [10, 8, 6, 5, 3, 2];

console.log(arr)
var index = findPeak(arr, 0, arr.length - 1, arr.length);
console.log('peak = ', arr[index], 'at', index)

function findPeak(aArray, low, high, n) {
    var mid = Math.floor((low + high) / 2);
    console.log(low, mid, high);

    if (
        (mid == 0 || aArray[mid - 1] <= aArray[mid]) &&
        (mid == n - 1 || aArray[mid + 1] <= aArray[mid])
    ) {
        return mid;
    }

    if (mid - 1 >= 0 && aArray[mid - 1] > aArray[mid]) {
        return findPeak(aArray, low, mid - 1, n);
    }
    return findPeak(aArray, mid + 1, high, n);

}