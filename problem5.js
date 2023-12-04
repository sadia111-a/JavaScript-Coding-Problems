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
        else{
            return totalMoney;
        }
    }
}


console.log(canPay([1,5,5], 11))