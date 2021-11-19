const instructors = [
    {name: 'Quincy', speciality: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', speciality: 'Norse Mythology', medals: 5},
    {name: 'Carolyn', speciality: 'Kung Fu', medals: 8},
    {name: 'Paul', speciality: 'Entomology', medals: 4},
];

//for if to get instructors with 5 or more medals

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names);

//filtering to get instructors with 5 or more medals

const instructorNames = instructors.filter(instructors => instructors.medals >= 5);
console.log(instructorNames);

const instructorInfo = instructor.filter(instructor => instructors.name ='Kenn')
console.log(instructorInfo)