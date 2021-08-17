let age = 15;

if(age<6) {
  console.log("free");
} else if (age >= 6 && age < 18) {
  console.log('child discount');
} else if (age >= 18 && age < 27) {
  console.log('student discount');
} else if (age >= 27 && age < 67) {
  console.log('full price');
}
else {
  console.log("senior citizen discount");
}
