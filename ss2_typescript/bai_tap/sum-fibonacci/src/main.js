function fibonacci(count) {
    if (count <= 2) {
        return count - 1;
    }
    return fibonacci(count - 1) + fibonacci(count - 2);
}
var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(fibonacci(i));
    sum = fibonacci(i);
    sum += sum;
}
console.log("Tổng các số fibonacci : " + sum);
