// // document.getElementById('root').innerHTML='I Love Javascript';
// // document.getElementsByClassName('root')[0].innerHTML='hello mutherfucker'
// document.write(65*7);
// console.log(5*6);
// console.log("amaro parane jaha chay \n tumi tai tai go amaro parane jaha chay");
// var x;
// x = prompt(" enter your name");
// console.log(x);
// var x=20;
// x++;
// console.log(x);


// // Oparetor 
// var x= 5;
// var y= 7;
// var c,d;

// c=x++; /* age man dibe tarpor barabe ba komabe*/
// d=++y; /*age man barabe tarpor "d" ke dibe*/
// console.log(c);
// console.log(d);

// var x = 20;
// x+=100; /* ekhane +=100 bolte x=x+100 etake bujay*/
// console.log(x);

// var x = 20;
// x*=100; /* ekhane *=100 bolte x=x*100 etake bujay*/
// console.log(x);


// var x = 20;
// x/=100; /* ekhane /=100 bolte x=x/100 etake bujay*/
// console.log(x);

// var x = 20;
// x%=100; /* ekhane %=100 bolte x=x%100 etake bujay*/
// console.log(x);

// var x=10;
// var y= 30;
// x*=y;
// console.log(x);

// var eggPrice = 10;
// var numberOfEggs = 20;
// var totalCostOfEggs =(eggPrice*numberOfEggs);

// console.log( "Total cost is",totalCostOfEggs,"taka");

// var name = "Golam Rabbi";
// console.log("My name is ",name);

// var bdt = 10000;
// var usd = 80;
// var convertBdtToUsd= bdt/usd;
// console.log("Total",convertBdtToUsd,"$");

// string Oparetor

// var line1="Hello";

// var line2="World";

// var result =line1+" "+line2;
// console.log( result);


// // left to right

// var name = "Golam Rabbi";

// var number1= 56;

// var number2= 50;

// var Result= name+number1+number2;

// console.log(Result);


// // right to left
// var number1= 100;
// var number2 = 20;
// var name = "Golam Rabbi";
// var Result = number1+number2+" "+name;
// console.log( Result);

// var number1=20;
// console.log(typeof number1);


/*Comparison Oparetor*/
// (==)= data check
// (===)= data check and data type check
// (!=)=not equal. jor kore true theke false banabe ba false thakle true banabe.
//  


// var x=10;
// var y= 10;
// var result = x == y;
// console.log(result);



// var x = 20;
// var y = 20;
// var result = x === y;
// console.log(result);

// var x = 20;
// var y = "20";
// var result = x === y;
// console.log(result);

// var x = 20;
// var y = 20;
// var result = x != y;
// console.log(result);

// logitcal operator//

// 
// var x= 400;
// var y= 200;
// console.log(x > y);
// var x= 100;
// var y= 200;
// console.log(x < y);

// var x= 500;
// var y= 600;
// console.log(x <= y);
// var x= 200;
// var y = 100;

// console.log(x >= y);

// var  x= (10 > 20);
// var y = ( 20 < 40);

// console.log(x || y);


// var rabbi =( 200 > 100);

// var emon = ( 300< 100);

// console.log(rabbi && emon);


// Conditional Operator

// var rabbi = ( 200 < 100) ? "iam Right" : " Iam false";
// console.log(rabbi);


// var rabbi = ( 200 > 100) ? "iam Right" : " Iam false";
// console.log(rabbi);

// assign operator
// (=)= assign operator

//  var x = ( 20+70-10*40/78);

//  console.log(x);


//  number data type 

// number = 123,1244.

// exponential number= 123e5,5**2;

// string number type ="45","78";

// infinity Number = 25/8;

// number to string
// var number =390;
// var result = number.toString();
// console.log(typeof result);
// convert bynary number
// var number = 490;
// var result = number.toString(2);
// console.log(result);

// convert octal number
// var number = 510;
// var result = number.toString(8);
// console.log(result);

// convert hexadecimal number
// var number = 510;
// var result = number.toString(16);
// console.log(result);

// const time =new Date() .getTime();

// if (time < 10){
//     "hello motherfucker"
// }

// else if( time <20){
//     "iam here"
// }

// else{
//     "iam not"
// }
// const myname = 45;

// if( myname===75){
//   console.log("iam right");
// }
// else{
//   console.log("iam worng");
// }
// const yourname ="jahid"

// if(yourname=="jahid")
// {
//   document.getElementById('root').innerHTML='I Love ';
// }
// else if(yourname =="jahid"){
//   document.getElementById('root').innerHTML='I Love Javascript';
// }


// if(45<20){
//   document.write("ami tomake valobashi");
//   style.color ='red'
// }
// else{
//   document.write("ami to vala nah")
// }

// const tera=5
// switch(tera){
//   case 1:
//     document.write("iam wrong");
//     break;
//   case 2:
//     document.write("iam wrong");
//     break;
//   case 3:
//     document.write("iam wrong");
//     break;
//   case 4:
//     document.write("iam wrong");
//     break;
//   case 5:
//     document.write("iam right");
//     break;
//   case 6:
//     document.write("iam wrong");
//     break;
//   case 7:
//     document.write("iam wrong");
//     break;
// }


// function myfunction(name){
//   console.log(name +" "+"the superstars");
// }
// myfunction("rabbi");
// myfunction("emon");
// myfunction("nayeem");

// const jinis=function(rabbi){
//   console.log(rabbi+" "+"ami valo aci");
// }
// jinis("rabbi")
// jinis("rabbi")
// jinis("rabbi")
// jinis("rabbi")
// jinis("rabbi")


// var myarry = [ 12,34,78,56,85]
 
// console.log( myarry);

// myarry.push("rabbi")

// console.log(myarry);

// myarry.pop();
// console.log(myarry);


// var sum=0;

// for (var i = 0; i < myarry.length; i++){
  
//   setInterval(() => {
//     sum=sum+myarry[i]
    
//   document.write(sum);
//   }, 1000);
// }

// sum = 0;

// for( var i = 2; i < 10000; i++){
//   var square=i*i;
//   console.log(square);
// }


// Loop
// for(var rabbi = 0; rabbi <= 100;rabbi++ ){
//     console.log("ami valo cele");
// }
// var i=0;
// var text;

// while (i <=50) {
//     text = "The number is "+ i;
//     i++;
//     console.log(text);
//   }

//   do {
//     text = "The number is " + i;
//     i++;
//     console.log(text);
//   }
//   while (i < 10);
  

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i=0;
// let text = "";

// for(;i < cars.length; i++) {
//     text=cars[i] + "\t";
//     console.log(text);
// }

// var i=10
// switch(i){
//     case 0:
//         console.log(0);
//         break;
//         case 1:console.log(1);
//         break;
//         case 2:console.log(2);
//         break;
//         case 3:console.log(3);
//         break;
//         case 4:console.log(4);
//         break;
//         case 5:console.log(5);
//         break;
//         case 6:console.log(6);
//         break;
//         // case 10:console.log(10);
//         // break;
//         default:console.log("tmi valo aco??")
// }

// const d =new Date();
// var tui= d.setFullYear(2002)
// console.log(tui);

// var int =d.toString()
// console.log(int);

// const fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits){
// console.log(x);
// }

// Absulatenumber
// var number =-85;
// var result = Math.abs(number);

// console.log(result);


// var number = 10.566666;
// var result = Math.round(number);

// console.log(result);

// var number = 9.125;
// var result = Math.ceil(number); barano

// console.log(result);

// var number = 10.5656;
// var result = Math.floor(number); namano
// console.log(result);




// const myFriends = ["zihad","emon","hridoy","sakil","sayed"]

// for(i=0;  i<myFriends.length;i++){
//     const friend =myFriends[i];
//     console.log(friend);
// }

// var a = prompt("Enter Your First Number ");
// var b = prompt("Enter Your First Number ");

// var inputNumber = parseInt(a)
// var inputSecNumber = parseInt(b)

// var sum=inputNumber+inputSecNumber

// document.write("sumetion"+sum);



// const obj={
//     myName: "Golam",
//     myLastName:"Rabbi",
//     yourFirstName:"emon",
//     yourLastName: "clear",
//     myarry:["ami","tumi","ar woh"]
// }

// console.log(obj.myLastName);
// console.log(obj.myarry[1]);


// var result =1
// for (let i = 1; i < 10; i++) {
//     result=result*i;
//     console.log(result);
    
// }
function fibonaci(n){
    var fibo =[0,1];
    for (var i=2; i <=n; i++) {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

var result=fibonaci (12);
console.log(result);