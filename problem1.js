function cubeNumber(number) {
if(typeof number !== "number" || number <= 0){
    return "please provide me a positive number"
}
else{
    const result = Math.pow(number, 3);
    return result;
}

}

console.log(cubeNumber(12))