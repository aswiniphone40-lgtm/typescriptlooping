/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount = 0;
let absentCount = 0;

for( const student of attendances){
  if(student.present){
    presentCount++;
  } else{ 
    absentCount++;
    console.log(`Absen name : ${student.name}`)
  }
}

const attendancePresent = presentCount / attendances.length * 100;
const attendanceAbsent = absentCount / attendances.length * 100;

console.log("Present:", presentCount);
console.log("Absent:", absentCount);
console.log("Attendance percentage:", attendancePresent + "%");
console.log("Attendance percentage:", attendanceAbsent + "%");


