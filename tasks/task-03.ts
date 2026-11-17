/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */



const scores = [ 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76 ];
let totalScores = 0;
let passCount = 0;
let failCount = 0; 
let averageScore = 0;
for ( const score of scores ){
    console.log(score)

    totalScores = totalScores + score ;

    if(score >= 75 ){
        passCount++;
    } else{
        failCount++;
    }
}
console.log(`total scores : ${totalScores}`)
console.log("avarage scores : ", averageScore = totalScores / scores.length)
console.log(`number of passing students: ${passCount}`)
console.log(`number of failling students: ${failCount}`)