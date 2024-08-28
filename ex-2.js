//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = operation(array);
  if (count >= 5){
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}
function checkPass(array){
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 70) {
      count = count + 1;
    }
  }
  return count;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;
scoreRoom1Result = atLeastFive(studentScoresRoom1,checkPass);
console.log("นักเรียนห้องที่ 1 " + scoreRoom1Result);
scoreRoom2Result = atLeastFive(studentScoresRoom2,checkPass);
console.log("นักเรียนห้องที่ 2 " + scoreRoom2Result);
scoreRoom3Result = atLeastFive(studentScoresRoom3,checkPass);
console.log("นักเรียนห้องที่ 3 " + scoreRoom3Result);