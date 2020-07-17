// ====================================== CHAPTER #  38-42 ==============================================
// ************************Task 1
// function power(a,b){
//     var a = prompt("Enter a base number...");
//     var b = prompt("Enter a exponent number...");
//     var result = Math.pow(a,b);
//     document.write("The result of "+ a +"^" +b +" is: "+result);
// }
// power();



// ************************Task 2
// var year = +prompt("Enter a year...Check whether it is Leap or not");

// function leapYear(){
// 		//three conditions to find out the leap year
// 		if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
// 		{
// 			alert(year+" is a leap year");  
// 		}
// 		else
// 		{
// 			alert(year+" is not a leap year");  
// 		}
// 	}

// leapYear();


// ************************Task 3
// var a= +prompt("Enter side a of a triangle");
// var b= +prompt("Enter side b of a triangle");
// var c= +prompt("Enter side c of a triangle");

// function area_triangle(){
//     //calculate the sides
//     //sides = (a+b+c)/2
//     var sides= ((a+b+c)/2);

//     //calculate the area
//     //area = S(S − a)(S − b)(S − c)
//     var area= Math.sqrt( sides* (sides - a) * (sides - b) * (sides - c));
//     document.write(area);
// }

// area_triangle();


// ************************Task 4
// var subject1= +prompt("Enter your subject 1 marks");
// var subject2= +prompt("Enter your subject 2 marks");
// var subject3= +prompt("Enter your subject 3 marks");
// function main(){
   
//     function avg(){
//         var total = (subject1+subject2+subject3);
//         var average= (total)/3.0;
//         document.write("The average marks is: "+ average+ "<br/>");
//     }
//     function percn(){
//         var totalMarksPerSub = 100;
//         var totalSubj= 3;
//         var totalmarks = totalMarksPerSub*totalSubj;
//         var total = (subject1+subject2+subject3);
//         var totalPercent= (total/totalmarks)*100 +"%";
//         document.write("The percantage of marks is: "+ totalPercent);
//     }
//     avg();
//     percn();
// }
// main();



// ************************Task 5
// var target =prompt("Enter a small letter from a to d any single letter to find index");
// var collection = ['a', 'b', 'c', 'd'];

// function myIndexOf(collection, target) {
//     for(var val=0; val<collection.length; val++){
//        if(collection[val] === target){
//           alert ("The index of "+ target +" is: "+val);
//         }
//     }
// //if couldn't find any match: it will return index -1:
//     return -1;
// }
// myIndexOf(collection, target )



// ************************Task 6
// var strings = prompt("Enter a string contain atleast 25 characters");
// // var strings = ["apple", "banana", "orange", "leachy", "stawberry","cherry"];  
// var ar = strings.split(', ');
// //string.map method creates new array:
// var stringsWithOutVovels =  ar.map(function(item){
// //regex expression
//     return item.replace( /[aeiou]/g, '' ); 
// });

// alert(stringsWithOutVovels);

// ************************Task 7
function findOccurrences() {
    var str = "Please read this application and give me gratuity";
    var count = 0;
    var haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
              
            } else {
              haveSeenVowel = true;
              
            }
            break;
          }
        default:
          haveSeenVowel = false
         
      }
    }
  
    return count.toString();
  }
  
  console.log(findOccurrences());



