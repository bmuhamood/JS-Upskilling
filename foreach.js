let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index, array){
    console.log(number * 2);
    console.log('number: ' + number);
    console.log('Index: ' + index);
    console.log('Array: ' + array);
    console.log('-------------------');
})