function calculate(operation, val1, val2) {
    if (val1 > 1000000 || val2 > 1000000) {
        return {
            status: "failure",
            message: "Overflow"
        }
    }
    if (val1 < -1000000 || val2 < -1000000) {
        return {
            status: "failure",
            message: "Underflow"
        }
    }
    if (isNaN(val1) || isNaN(val2)) {
        return {
            status: "faliure",
            message: "Invalid data types"
        }
    }
    if (operation === "add") {
        return {
            status: "success",
            message: "The sum of given two number is",
            result: val1 + val2
        }
    }
    if (operation === "sub") {
        return {
            status: "Success",
            message: "The difference of given two number is",
            result: Math.abs(val1 - val2)
        }
    }
    if (operation === "multiply") {
        return {
            status: "Success",
            message: "The product of the given two numbers is",
            result: val1 * val2
        }
    }
    if (operation === "divide") {
        if (val2 === 0) {
            return {
                status: "error",
                message: "Cannot Divide by 0"
            }
        }
        return {
            status: "Sucess",
            message: "The division of the given numbers is",
            result: val1 / val2

        }
    }
}
module.exports = calculate;