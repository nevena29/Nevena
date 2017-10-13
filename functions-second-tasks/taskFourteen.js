function calculate(yearOfBirth) {
   var a = 2017 - yearOfBirth;

   if (a <= 60) {

    var c= 60 - (2017-yearOfBirth);
       
   }else if ( 65 > a > 60) {

    var c= 65 - (2017-yearOfBirth);
       
   }else{

    console.log("Svaka cast!");

   }
   return c;
}
console.log(calculate(1968));