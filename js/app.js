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
// function findOccurrences() {
//     var str = "Please read this application and give me gratuity";
//     var count = 0;
//     var seenVowels = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (seenVowels) {
//               count++;
//               seenVowels = false;
              
//             } else {
//               seenVowels = true;
              
//             }
//             break;
//           }
//         default:
//           seenVowels = false
         
//       }
//     }
  
//     document.write ("The occurence of vowels in STRING is : "+count);
//   }
  
// findOccurrences();


// ************************Task 8
// var km =+prompt("Enter a distance in km ");
// document.write("The distance b/w cities is: "+ km +" km"+"<br/>");
// function meter(){
//   var m = km*1000;
//   document.write("The distance of cities in meter is: "+ m +" m"+"<br/>");
// }
// function feet(){
//   var f = km*3280.84;
//   document.write("The distance of cities in feet is: "+ f +" ft"+"<br/>");
// }
// function inches(){
//   var i = km*39370.08;
//   document.write("The distance of cities in inches is: "+ i+" inch"+"<br/>");
// }
// function centimeter(){
//   var cm = km*100;
//   document.write("The distance of cities in centi-meter is: "+ cm +" cm"+"<br/>");
// }
// meter();
// feet();
// inches();
// centimeter();


// ************************Task 9
// var workingHours = +prompt("Enter the woerking hours of employee");

// function overTime(){
//     if (workingHours>40) {
//       var over_time = workingHours - 40;
//       var overTimePay= over_time * 12;
//       document.write("Over Time pay is: "+ overTimePay+ "<br/>");
//     }
//     else{
//             document.write("You have to work for more than 40 hours to get over time pay");
//     }
 
// }
// overTime();



// ************************Task 10
// var amount = +prompt("Please Enter Amount for Withdraw :");

// function Withdraw(){
//   var hd = amount/100;
//   document.write("The amount of hundred notes will be: "+ Math.floor(hd)+ "<br/>");
//   var fifty = (amount%100)/50;
//   document.write("The amount of fifty notes will be: "+ Math.floor(fifty)+ "<br/>");
//   var ten = (((amount % 100) % 50) / 10)
//   document.write("The amount of ten notes will be: "+ ten+ "<br/>");
//   var remain=  (((amount % 100) % 50) % 10);
//   document.write("The remaining amount of notes will be: "+ remain+ "<br/>"+"<br/>");
//   document.write("you will have "+ Math.floor(hd)+" hundreds notes" +" "+Math.floor(fifty)+" fifty notes "+  ten + " ten notes."+"<br/>");
// }
// Withdraw();



// ====================================== CHAPTER #  43-48   ==============================================
// ************************Task 1 ( HTML included)
// function popup(){
//     alert("welcome");
// }


// ************************Task 2  ( HTML included)
// function popup(){
//     alert("Thanks for purchasing a phone from us!");
// }



// ************************Task 3  ( HTML included)
// function delet(){
//     var td = event.target.parentNode; 
//     console.log(td);
//       var tr = td.parentNode; // the row to be removed
//       tr.parentNode.removeChild(tr);
// }



// ************************Task 4  ( HTML included)
// function afterimg(){
//      var image= document.getElementById ('img');
//      image.src = "images/nokia.jpg";
// }
// function beforeimg(){
//     var image= document.getElementById ('img');
//     image.src = "images/huawei.jpg";
// }


// ************************Task 5  ( HTML included)

// var count =0;
//   function increase(){
//     count++;
//     document.getElementsByTagName("input")[0].value = count;
//     // console.log(count);
//   }
//   function decrease(){
//     count--;
//     document.getElementsByTagName("input")[0].value = count;
//     // console.log(count);
//   }



// ====================================== CHAPTER #  49-52   ==============================================
// ************************Task 1 ( HTML included)

// function signupForm(){

//     //for name;  
    
//     document.getElementById("name1").innerHTML= name;
//     name = document.getElementById("name").value;
   

//      //for phone; 
     
//      document.getElementById("phone1").innerHTML= document.getElementById("phone").value;
    

//     //for email; 
        
//     document.getElementById("email1").innerHTML= document.getElementById("email").value;
    
    
// }



// ************************Task 2 ( HTML included)

// function expandText(){
//     var expandPara= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//     document.getElementById("lessText").innerHTML = expandPara;
// }




// ************************Task 3 ( HTML included)

function studentForm(){
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
  }
  function readFormData(){
    var formData = {};
    formData["stdName"] = document.getElementById("stdName").value
    formData["stdClass"] = document.getElementById("stdClass").value;
    formData["stdMarks"] = document.getElementById("stdMarks").value;
    formData["stdSubj"] = document.getElementById("stdSubj").value;
    return formData;
  }
  function insertNewRecord(data){
    var table=  document.getElementById("displayTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.stdName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stdClass;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stdMarks;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stdSubj;
    cell5 = newRow.insertCell(4);;
    cell5.innerHTML = "<button class='btn btn-danger' onclick='delet()' >Delete</button>";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "<button class='btn btn-success' data-toggle='modal' data-target='#exampleModal' onclick='editRow()'>Edit</button>";

  }

function resetForm(){
  document.getElementById("stdName").value = "";
  document.getElementById("stdClass").value = "";
  document.getElementById("stdMarks").value = "";
  document.getElementById("stdSubj").value = "";
  

}
 
function editRow(e){
  var val = e.parentNode.firstChild.nodeValue;
    console.log(val);
}
// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("stdName").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("stdClass").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("stdMarks").value = selectedRow.cells[2].innerHTML;
//   document.getElementById("stdSubj").value = selectedRow.cells[3].innerHTML;
// }
// function updateRecord(formData) {
//   selectedRow.cells[0].innerHTML = formData.stdName;
//   selectedRow.cells[1].innerHTML = formData.stdClass;
//   selectedRow.cells[2].innerHTML = formData.stdMarks;
//   selectedRow.cells[3].innerHTML = formData.stdSubj;
// }
  function delet(){
    var td = event.target.parentNode; 
    console.log(td);
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
}





// ====================================== CHAPTER #  53-58   ==============================================
// ************************Task 1 ( HTML included)
// function popUp(){
//   var img1 = document.getElementById ('img1');
//   document.getElementById('modal').innerHTML = img1;
  
// }








// ====================================== CHAPTER #  58-67   ==============================================
// ************************Task 1 ( HTML included)
  // var mainDiv = document.getElementById("main-content");
  // console.log(mainDiv.nodeType);




  
  



