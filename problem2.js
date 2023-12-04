function matchFinder(string1, string2) {
   if(typeof string1 !== "string" || typeof string2 !== "string"){
    return "please provide me two valid string"
   }
   else{
    
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
   }
}
// let string1 ="JavaScript";
// let string2 = "Code";
// let result = matchFinder(string1, string2);
// console.log(result);

console.log(matchFinder("Peter Parker","pet"));