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
console.log(sortMaker([2,3]));