let name = "Mumbai"
name = name.toLowerCase()
let name2
let countStar = ''

for (let i = 0; i <= name.length - 1; i++) {
    for (let j = 0; j <= name.length - 1; j++) {
        if (name[i] === name[j]) {
            name2 = name[i]
            countStar = countStar + '*'
        }
    }
    console.log(name2, ":", countStar)
    countStar = ''
}