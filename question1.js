const input = {
    Persion1: {
        Name: "ABC",
        Location: "delhi",
        Age: 24,
    },
    Persion2: {
        Name: "def",
        Location: "mumbai",
        Age: 30,
    },
    Persion3: {
        Name: "ghi",
        Location: "delhi",
        Age: 14,
    }
}

let arr = {}

async function outer() {
    let result;
    for (let i in input) {
        result = await inner(input[i])
    }
    console.log(result)
}

async function inner(input) {

    let entries = Object.entries(input)
    let data = entries.map(async([key, val] = entry) => {
        if (key === "Location") {
            let result = await moreInner(arr, val)
            if (result.includes(val)) {
                arr[val] = [...arr[val], input]
            } else {
                arr = {...arr, [val]: [input] }
            }
        }
    });
    return arr
}

async function moreInner(arr, value) {

    let entries = Object.entries(arr)
    let ok;
    let data = entries.map(([key, val] = entry) => {
        return key
    })
    return data
}

outer()