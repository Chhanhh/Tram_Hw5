let arr = [1,2,3,4,5,6,7,8,9,10];
let odd_arr = arr.filter(num => num % 2 != 0);  // filter out elements not divisible by 2 == that are odd
let div_by_2or5 = arr.filter(num => (num % 2 == 0) || (num % 5 == 0));  // filter out number divisible by 2 or 5
let div_by_3_squared = arr.filter(num => num % 3 == 0).map(num => num * num);   // filter out numbers divisible by 3, and then square them
let sum_sqrs_num_div_by_5 = arr.filter(num => num % 5 == 0).map(num => num * num).reduce((a, b) => a+b);    // filter out numbers divisible by 5, then square them, then add them

console.log('Original Array: ', arr);
console.log('Odd numbers: ', odd_arr);
console.log('Numbers divisible by 2 or 5: ', div_by_2or5);
console.log('square of Numbers divisible by 3:', div_by_3_squared);
console.log('Sum of squares of numbers divisible by 5: ', sum_sqrs_num_div_by_5);