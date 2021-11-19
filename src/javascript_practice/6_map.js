const instructors = [
    {name: 'Quincy', speciality: 'Quantam Mechanics'},
    {name: 'Kenn', speciality: 'Norse Mythology'},
    {name: 'Carolyn', speciality: 'Kung Fu'},
    {name: 'Paul', speciality: 'Entomology'},
];

//iterate over the array and print just the names with a forEach() method
let instructor_names = [];      //create empty array

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);


//same as above but this is the .map() function

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);



const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo)

const instructorInfo = `${instructors.map(i => ${i.name}: ${i.speciality} )}`;
console.log(instructorInfo)

//.map() and react

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});