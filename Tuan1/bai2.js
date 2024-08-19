console.log('Bai2');
//Data 1:
let weightMark = 78;
let heightMark = 1.69;
let BMIMark = weightMark / (heightMark ** 2);

let weightJohn = 92;
let heightJohn = 1.95;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI == true) {
    console.log("BMI của Mark cao hơn BMI của John");
} else {
    console.log("BMI của John cao hơn BMI của Mark");
}

//Data 2:
weightMark = 95;
heightMark = 1.88;
BMIMark = weightMark / (heightMark ** 2);

weightJohn = 85;
heightJohn = 1.76;
BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI == false) {
    console.log("BMI của John cao hơn BMI của Mark");
} else {
    console.log("BMI của Mark cao hơn BMI của John");
}