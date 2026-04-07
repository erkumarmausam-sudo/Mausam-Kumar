
function calculateResult(){
let n = document.getElementById("subjects").value;
let total = 0;
for(let i=1;i<=n;i++){
let marks = parseFloat(prompt("Enter marks for Subject " + i));
total = total + marks;
}
let average = total / n;
let grade;
let result;
if(average >= 90){
grade = "A+";
}
else if(average >= 75){
grade = "A";
}
else if(average >= 60){
grade = "B";
}
else if(average >= 50){
grade = "C";
}
else{
grade = "F";
}
if(average >= 40){
result = "PASS";
}
else{
result = "FAIL";
}
document.getElementById("result").innerHTML =
"Total Marks: " + total + "<br>" +
"Average Marks: " + average.toFixed(2) + "<br>" +
"Grade: " + grade + "<br>" +
"Result: " + result;
}
