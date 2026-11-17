/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let studentSubmitted = 0;
let studentNotSubmit = 0;
let studentPassed = 0;
let studentRevise = 0;
let totalscore = 0;
let averageScore = 0;

for(const submission of submissions){
    totalscore = totalscore + submission.score

    if(submission.submitted){
        studentSubmitted++; 
        if( submission.score >= 75){
            studentPassed++;
        } else{
            studentRevise++;
            console.log(`${submission.student} : Are need to revise`)
        }
    }else{
        studentNotSubmit++;
        console.log(`${submission.student} : Are not submitted`)
    }
}

console.log("--------------------------")
console.log(`Student submitted: ${studentSubmitted}`)
console.log(`Student didnt submit: ${studentNotSubmit}`)
console.log(`Student Passed: ${studentPassed}`)
console.log(`Student Revise: ${studentRevise}`)
console.log("Average score: ",totalscore / submissions.length)