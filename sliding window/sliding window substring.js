
// var lengthOfLongestSubstring = function (s) {
//     var str = s;
//     var global_max = 0;
//     var current_max = 0;
//     var current_sub = '';

//     var windowPointer = 0;
//     var total = str.length - 1;

//     if (total == 1) {
//         return total;
//     }

//     while (windowPointer != total) {
//         if (
//             current_sub.includes(str[windowPointer])
//         ) {
//             current_sub = '';
//         }
//         current_sub += str[windowPointer];
//         current_max = current_sub.length;

//         if (current_max > global_max) {
//             global_max = current_max;
//         }
//         windowPointer++;
//     }
//     return (global_max);


// };
// console.log(lengthOfLongestSubstring('aaaaasssssdddddfffffggggg1234ddddlllllfffffmmmmmvvvvvnnnnn'));


const lengthOfLongestSubstring = s => {
    let longest = 0;
    let start = 0;
    const seen = {};

    [...s].forEach((char, i) => {
        console.log(char, seen, start, start <= seen[char])
        if (char in seen && start <= seen[char]) {
            longest = Math.max(i - start, longest);
            start = seen[char] + 1;
        }

        seen[char] = i;
    });

    return Math.max(s.length - start, longest);
};

console.log(lengthOfLongestSubstring('bbb'));