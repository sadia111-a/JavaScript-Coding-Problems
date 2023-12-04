function cubeNumber(number) {
    if (typeof number !== "number" || number <= 0) {
        return "please provide me a positive number"
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "please provide me two valid string"
    }
    else {

        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }
}


function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "please provide me an array of length two";
    }

    else if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "please provide me two number";
    }
    else {
        if (arr[0] < 0 || arr[1] < 0) {
            return "Invalid Input"
        }
        else if (arr[0] === arr[1]) {
            return "equal"
        }

        else if (arr[0] > 0 || arr[1] > 0) {
            if (arr[0] > arr[1]) {
                return [arr[0], arr[1]];
            } else if (arr[0] < arr[1]) {
                return [arr[1], arr[0]];
            }
            else {
                return "not equal"
            }
        }
        else {
            return "not possible"
        }
    }
}

function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please provide me a valid object"
    }
    else {
        const street = obj.street || "__"
        const house = obj.house || "__"
        const society = obj.society || "__"
        return street + "," + house + "," + society + ",";
    }
}


function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "this is an Empty array,so please input an array again";
    }
    else if (typeof totalDue !== "number" || totalDue < 0) {
        return "please give me money"
    }
    else {
        let totalMoney = 0;
        for (let i = 0; i < changeArray.length; i++) {
            totalMoney += changeArray[i];
        }
        if (totalMoney >= totalDue) {
            return true;
        }
        else if (totalMoney < totalDue) {
            return false;
        }
        else {
            return totalMoney;
        }
    }
}
