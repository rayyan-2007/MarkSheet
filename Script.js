let a=10;
let b = 0;
let operator = "/";

switch(operator){
    case "+":
        console.log(a+b);
        break;
        case "-":
            console.log(a-b);
            break;
            case"*":
            console.log(a*b);
            break;
            case"/":
            a !==0 && b!==0 ? console.log(a/b) : console.log("Division by zero is not allowed");
            break;
            default:
                console.log("Invalid operator");
}



let marks = 0;
let bonusMarks = 0;
let grade;
let result;
let remarks;

if(marks<0 || marks>100){
    console.log("You Entered a Invalid Mark !")
}

else if(marks>=85 && marks<=100){
    grade="A";
    result = "passed"
    bonusMarks = bonusMarks + 1;
    marks = marks + bonusMarks;
    switch(grade){
        case "A":
              console.log("High Marks with bonus: " + marks);
              console.log("Grade: " + grade);
              console.log("Result : " + result);
              remarks = "Excellent";
              console.log("Remarks: " + remarks);
               break;
    }
  
}
else if(marks>=70 && marks<=89){
    result = "passed";
    grade="B";
    switch (grade) {
        case "B": 
    console.log("Marks :" + marks);
    console.log("Grade: " + grade);
    console.log("Result: " + result);
    console.log("Remarks: Good");
    }
}



else if(marks>=50 && marks<=69){
    result = "passed"
    grade="C";
    switch(grade){
    case "C":
    console.log("Marks: " + marks);
    console.log("Grade: " + grade);
    console.log("Result: " + result);
    console.log("Remarks: Average");
    }
}
    

   else if(marks<=49){
     result = "Failed";
     grade = "F";
     switch(grade){
        case "F":
    console.log("Marks: " + marks);
    console.log("Grade: " + grade);
    console.log("Result: " + result);
    console.log("Remarks: Poor");
     }
}


  else{
    console.log("Invalid Input!")
     }
    


