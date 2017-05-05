// Your code goes here
//variables

 var x = document.getElementsByTagName('button');//return button array
 
//add button clicked
x[0].addEventListener("click", function(){
   
   var age = document.getElementsByName("age")[0].value;//pull age from box
   var relation = document.getElementsByName("rel")[0].value;//pull relation
   //let smoker = document.querySelector('[name=smoker').checked;
   
   //check relation 
   if(relation === "")
   {
       alert("please select a realation"); 
   }
   
   //check to see if age < 0
   if(age < 0 || age === " ")
   {
       alert("age not applicable");
   }
   alert("name");
  submit(age,relation);
   
});

function submit(age, relation, smoker)
{
    alert(age);
    /*
    x[1].addEventListener("click", function(){
       var age = JSON.stringify(entry_age);
       alert(entry_age[1]);
       document.getElementbyClassName("debug").innerHTML = JSON.stringify(entry_relation);
       document.getElementByClass("debug").innerHTML = JSON.stringfy(entry_smoker);  
    });*/
}