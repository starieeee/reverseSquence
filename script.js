function reverseSquence(num){
    let arr = [];
    for(let i = num; i > 0; i--){
        arr.push(i);
    }
    return arr;
}
console.log(reverseSquence(4));
