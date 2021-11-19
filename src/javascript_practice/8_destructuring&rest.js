//without destructuring you have to manually make new variables and trget a value from the array
const array = ['thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar, nanVar);
// double commas allow you to skip indexes
let [string, num, , obj, , nan] = array;
console.log(string, num, obj, nan);

//spread operator

let newArr = ['a', 1, undefined, ...array];
console.log(newArr);

const testObj = {
    testString: 'stringy thingy',
    testNum: 2,
    testBool: true,
    testObject: {key: 'walugi'},
    testArray: [1, 2, 3, 4, undefined],
    testNan: NaN
}

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNan;

console.log(objString, objNum, objObj, objNan);

let {testString, testNum, testObject, testNan} = testObj;
console.log(testString, testNum, testObject, testNan);

//inserting properties into new object

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);