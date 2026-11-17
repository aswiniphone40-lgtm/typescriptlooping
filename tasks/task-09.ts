/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let numberOfA = 0;
let numberOfB = 0;
let numberOfC = 0;
let numberOfD = 0;
let highest = students[0].score;
let lowest = students[0].score;
let average = 0;
let totalScore= 0;

for( const student of students ){

    totalScore = totalScore + student.score
    
    if ( student.score >= 90 && student.score <= 100){
        numberOfA++;
    } else if (student.score >= 80 && student.score <= 89){
        numberOfB++;
    } else if(student.score>= 70 && student.score <= 79){
        numberOfC++;
    } else{
        numberOfD++;
    } 

    if( student.score > highest){
        highest = student.score;
    }
        if( student.score < lowest){
            lowest = student.score
        }
} 
console.log("A:", numberOfA);
console.log("B:", numberOfB);
console.log("C:", numberOfC);
console.log("D:", numberOfD);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average score: ", totalScore / students.length)