console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function avgAge(arr){
 
var result= arr.reduce (function(result,value){
  
    return result+value.age  

  },0)
  return result /arr.length
}

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

function longestName(arr)
{
var result=arr.reduce(function(acc,value,i){
  x=arr[0].name.first+arr[0].name.last
  if(x<value.name.first+value.name.last)
   x=value.name.first+value.name.last
return x })
  return result
}

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
var arr=[1,2,4,9,10,11,20,100]
function  maxNumber(arr){
  var result=arr.reduce(function(acc,value){
    if(acc<value)
    acc=value
 return acc
  },arr[0])




  return result
}

/*
4
Create a function called repeatCharch
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",'w') => 1
*/



function repeatChar(st,ch){
  var st1=st.split('')
var result=st1.reduce(function (acc,element){

  if(ch===element)
  return acc + 1
  else 
  return acc

},0)

  return result;
}





//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/


function evenOnly(arr)
{
  var result=arr.filter (function (element){
    return (element%2===0)
    
  })


  return result 
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr){
var result=arr.filter(function (element){
  return (element%4===0)
  

})


  return result 
}

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],'w') => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function  containChar(arr,cha){
var result=arr.filter(function(element){

  return(element.includes(cha))
})

return result

}




/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr){
  var result=arr.filter(function(element,index){
   return(element.length%2===1&&index%2===0)

  })
return result 
}



/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
var arr = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function olderThan(arr,number)
{ var result=arr.filter(function(element){
   var z=element.age>number
   return z
  
  
  
 } )


  return result 
}


/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
var arr= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterThan(arr,number){
  var result=arr.filter(function (element)

  {return (element.length<number)
    
  })

return result
}

// if you finish the exercises review the material of the week and help your classmate
