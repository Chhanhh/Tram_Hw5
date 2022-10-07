const students = [
    {
        name: "Allan Able",
        grades: [95,85,92,98,92.5]
    },
    {
        name: "Amy Alexander",
        grades: [80,88,100,89.3333333333333]
    },
    {
        name: "Betty Barns",
        grades: [70,80,90,100,85]
    },
    {
        name: "Bob Bones",
        grades: [75,85,95,85,85]
    },
    {
        name: "Cindy Chase",
        grades: [95,90,93,98,93.75]
    },
    {
        name: "Charles Chips",
        grades: [88,99,90,92.33333333333333]
    }
];

// Update each grade by 5 point
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].grades.length; j++) {
        students[i].grades[j] += 5;
    }
}

console.log(students);

const studentsResults = [];
for (const student of students) {
    let gradesSum = 0;
    for (const grade of student.grades) {
        gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    studentsResults.push({
        name: student.name,
        avgGrade: averageGrade
    });
};

// Display students average grades
console.log(studentsResults)

console.log(students);

students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Updated grades are: ${student.grades}`);
})