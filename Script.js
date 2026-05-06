//let a=10;
//let b = 0;
//let operator = "/";

//switch(operator){
//case "+":
//console.log(a+b);
//break;
//case "-":
//console.log(a-b);
//break;
//case"*":
//console.log(a*b);
//break;
//case"/":
//a !==0 && b!==0 ? console.log(a/b) : console.log("Division by zero is not allowed");
//break;
//default:
// console.log("Invalid operator");
//}

//Create a variable `marks` to store student marks (0–100).

// Add bonus marks using an assignment operator (+=).

// Determine the grade using if-else:
// 90–100 → Grade A
// 70–89 → Grade B
// 50–69 → Grade C
// Below 50 → Grade F

// Determine Pass/Fail using a ternary operator:
// (marks >= 50 ? "Pass" : "Fail")

// Give remarks based on grade using a switch statement:
// A → "Excellent!"
// B → "Good"
// C → "Average"
// F → "Needs Improvement"

// Print the results in the console:
// Marks, Grade, Result, Remark

let marks = 60;
let bonusMarks = 0;
let grade;
let result;
let remarks;
let totalmarks = 0;

if (marks <= 0) {
  console.log("invalid mark");
} else if (marks >= 90 && marks <= 100) {
  grade = "A";
  bonusMarks += 3;
  totalmarks = marks + bonusMarks;
  result = "passed";
  console.log("marks:", marks);
  console.log("grade:", grade);
  console.log("result:", result);
  console.log("bonusMarks:", bonusMarks);
  console.log("totalmarks:", totalmarks);
} else if (marks >= 70 && marks <= 89) {
  grade = "B";
  bonusMarks += 2;
  result = "passed";
  totalmarks = marks + bonusMarks;
  console.log("marks:", marks);
  console.log("grade:", grade);
  console.log("result:", result);
  console.log("bonusMarks:", bonusMarks);
  console.log("totalmarks:", totalmarks);
} else if (marks >= 50 && marks <= 69) {
  grade = "C";
  bonusMarks += 1;
  result = "passed";
  totalmarks = marks + bonusMarks;
  console.log("marks:", marks);
  console.log("grade:", grade);
  console.log("result:", result);
  console.log("bonusMarks:", bonusMarks);
  console.log("totalmarks:", totalmarks);
} else if (marks >= 50 ? (result = "Passed") : (result = "Failed")) {
  grade = "F";
  totalmarks = marks;
  console.log("marks:", marks);
  console.log("grade:", grade);
  console.log("result:", result);
  console.log("totalmarks:", totalmarks);
}

switch (grade) {
  case "A":
    remarks = "Excellent";
    console.log("remarks:", remarks);
    break;

  case "B":
    remarks = "Good";
    console.log("remarks:", remarks);
    break;

  case "C":
    remarks = "Average";
    console.log("remarks:", remarks);
    break;

  case "F":
    remarks = "Need Improvement";
    console.log("remarks:", remarks);
    break;

  default:
    console.log("invalid grade value");
}
