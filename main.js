array
let x=null
const items=['coca cola', 'pepsi', 'soda']
// for..of (array, string)
for(const item of items) {
    console.log(item)
}
// object
const student={id: 64130500069, firstname:'Purin'}
// for..in (object)
for(const prop in student){
    console.log(student[prop]) 
    //objectname.propertyKey //objectName[propertyKey]
}

//nullish coalescing

let x
console.log(x??10)

let arr=['coca-cola']
arr = arr??[]
console.log(arr)

let num='a'
let grade
switch(num){
    case 1: grade='A'
            break
    case 2: grade='B'
            break
    case 3: grade='C'
            break
    default: grade='F'
}

function isEvenNumber(num){
    return num%2===0?true:false
}
console.log(isEvenNumber(2))
console.log(isEvenNumber(5))














