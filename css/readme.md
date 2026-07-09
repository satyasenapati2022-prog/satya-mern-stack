HTML (STURCTURING THE WEBSITE)
2.CSS (styling the web pages)
     Bootstrap(light weight framework)
     Tailwind(light weight framework)
3.Javascript(building logic  / function)     
    react js(library of js)
    next js(framework of react js)

BACKEND part:-

4.Node Js
     Express Js(framework)

5.MongoDB   
     Mongoose(framework)  

6.restFul API integration
7.Authentication and Authorization

AI:-

8.basic LLM'S model(large language model)
9.prompt Engineering
10.chatgpt/open AI/gemini..etc
11.AI chatbot

Deploymemnt and Devops part:-

12.hosting in vercel,render like cloud platform
13.use Docker /AWS for deployment and pipeline

capstone project:-

14.build end-to-end MERN Stack project
15.AI integration with MERN 

HTML :-
-> HTML Stands for hyper text markup language.

->it is used for sturcturing the websites.

->html is markup language beacuse html contain the skeleton stucture of the web page 
 also it builts on tags so that why we tell them HTML is a markup languauge.

-> all the HTML written through some tag lines.

->

Head:-
-> in head tag we have some tag like <title>  and some meta elements.

-> <title> tag contains our website title in the title bar.

-> meta elements helps us to create responsive with screen size.

-> we also attached some external style sheet  link in the head tag.

Body:-

-> body contain all the page structure of a web page.

-> we can design and development all the things in that body part.

Heading :-

-> heading is major element in our html page.

-> there are 6 types of headers are there like h1 to h6.

-> <h1> is the bigger heading and <h6> is the smaller heading. (ctrl + / for comment out)

paragraph :-

-> paragraph play a major role to describe our data briefly.

-> it is denoted by a element <p>.

 Break :-

 -> it is used to break the line and creating a new line.

 -> it is denoted by <br>.

 -> it is a single tag.

 Horizontal Tag :-

 -> it is used for creating a horizontal line.

 -> it is denoted by <hr>.

 -> it is also a single tag.

 Image tag :-

 -> when we put a image in our website we just need a <img> tag for put our image.

 -> <img> is also a single tag.

 -> in that <img> tag we have some elements to configure our image in a right direction
    so we need some attributes.

-> attributes means it is an behaviour of an html element.

-> in<img> tag we some attributes like src(image source),alt,height,width.

Anchor Tag:-

-> it is used to attached some outside links in our web pages.

-> it contains two attributes like href(hyper refference) and target(open in a separate     page).target have two values _self (it opens in our own website)
                             _blank(open in another page).

-> it is denoted by <a>.

HTML formatting :-

-> to format our text in a proper way.

-> there are 10 types of formatting are present...
   1.<b>
   2.<i>
   3.<em> = emphasized the text
   4.<small> = smaller the text
   5.<ins> = inserted the text
   6.<del> = delete the text
   7.<mark> = marked the text
   8.<strong> = stronger the text
   9.<sup> = superscript the text
   10.<sub> = subscript the text


HTML Table:-

-> As we darw a normal table to maintain our data so html also provide a table like structure.

-> <table> is the main tag of html table.

-> inside html table we have 

    - <tr> -> table row

    - <td> -> table data

    - <th> -> table heading

HTML List:-

-> As our day to day life, when we store some data inside a proper format that we called our list of data.

-> HTML also provide a list to store some data inside it.

-> in HTML there are 2 types list are there...

1. Unordered list:

-> when we store that data in a un-organized from that called our unordered list.

-> it is denoted by <ul>

-> inside <ul> tag we have <li> tag.(<li> -> list item)

2. Ordered list:

-> when we store that data in a organized from that called our ordered list.
-> it is denoted by <ol>
-> inside <ul> tag we have <li> tag.(<li> -> list item)

Block level element and inline element in HTML:-

Block level element ->

-> a Block level element always starts on a new line, and the browser automatically add some space 
before and after the element.
-> a Block level element always takes up the full width available.
ex. <div>,<p>,<main>,<form>,<section> etc....

Inline element ->

-> an inline element does not starts on a new line.
-> an inline element only takes up as much with as neccessary....
<span>,<label>,<button>,<sup>,<br>

Form in HTML:-

-> an HTML form is used to collect some user input from the data storage purpose.
-> <form> is the main tag we have lavel & input tag for take the user input.
-> inside <form> tag we have lavel & input tag for take the user input.
-> there are some input tags like ..

1. <input type="text">
2. <input type="button">
3. <input type="checkbox">
4. <input type="color">
5. <input type="date">
6. <input type="email">
7. <input type="file">
8. <input type="hidden">
9. <input type="image">
10. <input type="month">
11. <input type="number">
12. <input type="password">
13. <input type="radio">
14. <input type="range">
15. <input type="search">
16. <input type="submit">
17. <input type="time">
18. <input type="url">
19. <input type="week">
20. <input type="tel">



CSS:-

-> CSS stands for cascadding style sheet.
-> Basically CSS works for designing and styling our web pages.
-> CSS is not a programming language, it's a styling language.
-> syntax:-

selector{
     properties:value;
}

ex.

h1{
     color:red;
}

-> in the avove example h1 is the selector,color is the properties and red is the value of that properties.
-> there are 3 types of CSS are present. like...

1. Inline CSS:-

-> we used inline css inside the tag name.
-> inline css have highest priority by compare with other types of css.
-> we can put our styling by creating a "style" attribute inside the tag.

2. Internal css:-

-> we used internal css inside <head> tag, by creating a <style> tag inside it.
-> internal css used many cases for small codebase.

3. External css :-

-> we used external css by creating a separate css file and link that file in our HTML page.
-> we can link the external css file by <link> tag.
-> it is most properly used because everyone wants to see the clean code so all files have to be separated.
selector in css:-
we use css selector for selecting on html element for the shake desining .
there are basically 5 types of selector in:
css:-
1.id selector.
2.class selector.
3.universal selector.
4.group selector.
5.element selector.

id selector:-id selector is a type a selector that used for unique design.
it is denoted by '#'.

class selector:-class selector is a type of selector that used for similar design in multiple element.
it is denoted by '.'  .

group selector:-is a type of selector that used for design more than one element b y chating a group .

universal selector:-universal selector is a type of selector that used for design whole element html element in a single design.
it is denoted by '*'.
element selector :-element selector is a type of selector that used for design single-single element separetaly.

properties in css:-
1.color:-red/blue/green,etc....
2.background color:-red /green/blue.etc......
3.text-align:-left/right/center.
4.text decoration:-underline/overline/line through.
5.font-weight:-normal/bold/bolder/100/300..etc
6.font family:-italic/robuto/cursiver.
7.line height:-1/2/3/ etc.
8.text transform:-uppercase/lowercase/capatilaze.etc,

box model:-
1.height.
2.width.
3.padding (left,right,top,down)
4.margin (left,right,top,down)
5.border (left,right,top,down)
box model is used for properly placed the element in right direction.it measures all the size of that particular element and placed them.
there are 5 types of box model are there.....

display properties of css:-
we used display property to show case our element in a proper form to display.

basically there are 4 types of display properties.
like..
1.display-inline.
2.display-block.
3.display-inline-block.
4.display-none.

1.display-inline:-takes only the space requried by the elements.

2.display-block:-takes full space avialbale in width.

3.display-inline-block:-similar to display inline but different is that when we play padding ov er here.

4.display none:-to remove element from the document flow.(none-nothing). 






1.display flex:-
2.flex direction:-
























css grid-layout is a two dimentional layout system for the web.
-a grid is a collection of horizontal and vertical lines creating a pattern against which we can line-up our design element.
- some imp.properties of grid-layout...

1.display :grid;
2.grid-template-column:repeat(4,1fr)/100 200 300:
3.grid gap:20px/30px etc...
4.grid-auto-rows:1000px/200px etc....

css units:-
- basically there are multiple units in css but we will discuss some in units .

1.px(pixel)-fixed 
2.%(percentage)-percentage fully depends upon their parent element 

ex.

satya-100 ->20% ->20
soumya-1000 ->20% ->200


3.vh(viewpoint height) & vw(veiwpoint width)
4.vmax(veiwport maxmium)-if the screen size can be squized to a phone screen so our cotent can be small so it break that and create a new line of content.
5.


















3.absoiute- the element positionsed relative to its ancestors.
4.fixed- the element is position relative to the browser window.
5. stickly- the element is positioned based on the user scroll position.


animation in css:-

animation(transition):- to change the state of an object.

- transition enables you to define the transition between two states of an element.
- some important transition properties are ......

1.transition-property :-property you want to position(font-size,color,bg color)
2.trasition-duration:2s/3s/4s etc.....;
3.transition-timing-function: ease-i /ease-out/ease-in-out/liner/steps(4)etc.....
4.trasition-dealy:2s/3s/4s etc.....;

- transition shorthand(property names/dutstion/timing-function/dealy)trasition:font-size 2s ease-in 5s;

animation(transform):-

it is used to apply 2d,3d transform to an elemen t.

1.transform(rotate)->
- transform: rotate(45deg/90deg etc...)
- ritate:45 deg;
- rotatex:45deg;
- rotatey:45deg;
- rotatez:45deg;

2.transform (scale)->

- transform:scale(2/3 etc...)
- transform:scale(1,2)
- taransform:scalex(0.5)
- transform:scaley(0.5)

3.transform(skew)->
-trasform:skew(45deg); 
-trasform:skewx(45deg);
-trasform:skewy(45deg);
-trasform:skewz(45deg);

animation (keyframe) -> 

- it is a special css rule that define the different  




syntax:-
@keyframe spinscale{

}
0%{}



in keyframes the properties are:-
- animation-duration.
- animation-timing-function.
- animation-delay.
- animation-iteration count.
- animation - direction.


java script:-

- javascript is used building logics of a web pages.
- javascript is a high level programinig language,used in both client side(fronted) as well as server side(backend).
- javascript comes from echma script so we see the latest vesion of javascript in terms of echma script.
- the latest version of javascript is ES16.
- node js is the run time environment of javascript.


variable in javascript :-
- variable is a container to store some digital data inside it.
- in javascript there are 3 types of variable are there .....

1.var :-
- var is a type of variable which is used  for chasing the  variable value in later state.
- var is used in older browser so now in these days we will don't use the var the most of the cases.

2.let :-

-  let is a type of variable which is also used for changining the variable value in later stage.
-  let is a function/scope so we have been  used let most  of the cases.

3. const-constant

-------------------------
--------------------------
var age=25
---------------------------
function{
     person=age......
}

rules for creating the variable name:-
- variables names are case sensative "a" & "A" is different.
- only  letter,digits,underscore & special character is allowed .(do not keep white space  over here)
- only letter,underscore or special character ($,_) should be the 1st character only.
-  reserved words cann not be a  variable name.
 ex.for,while,var,let,console.

 data types in javascript:-
 - ata types is an attribute associated with a piece of data that tells a computer system how to interprit  it's value.
 - in data types we used "typeof" operator to know what type of data it is.
 - mainly in javascript there are 2 types of datatypes is 
 1.primitive data types.

- in javascript there are 7 types of primitive data types are there .....
1.number - number are the type of data types those it contain some numerical valus.
2.boolean- in boolean datatype  we got boolean value like true/false.
3.null -  nothing.
4.bigINT- big integer value.
5.undefined-the data is not define.
6.string - sequense of characters.
7.symbol  - in symbol we got one symbol of more than one value.


 2.non-primitive data types.
 - reference datatypes are the types of datatypes which can hold multiple element in a single frame.
 - there are 3 types of reference dartatypes are there.....
 1.array- array is a collection of similsr type of data stored in conttigious memory location.
 - array index starts from "0"
 ex :-42,58,30,63,64.

 2 object- object is a data types where we can store  more than one element in a single frame.
 - mainly objects are working on (key:value) pair'
 ex.
 let hari ={
     "name"="hari babu",
     "phone-no" = 7896541230,
     "adress" = "bbsr",
     "carrier":"good"
 }  
 3.function- function is a block of code that perform specific task.
 - function reduce our code completely , time &  space complexity.
 - syntax:-

 function condition ->
 function my_schedule(){
     console.log("i wake up at 5 am")
     console.log("than take a good shower")
     console.log("eat breakfast with a cup of tea")
 }

 function calling->
 

semantic tag in html :-

- writing semantic markup means understanding the hirechy of your content and how both are 





 operator in javascript :-
 - operator are key features to do some task or operate some task.
 - ex . A + B
 - in the above  example A & B are the operands & "+" sign is our operator.
 - in javascript , there are 5 types of operetor are there .......
 1. arithematic operator :- (+,-,*,/,%,**)
 2. assignment operator :- (=,+=,-=,*=,/=,%=,**=)
 3. comparision operator :- (==,!==,===,<,>,<=,>=)
 4. logical operator :- (logical AND ,logical OR ) .


 conditional statement :-
 - to implement some conditional in the code.
 - there are 3 types of conditional statement are there .....

 1.if-condition :-
 - if condition is true then statement is true .
 - syntax :-
 if(condition){
     statement
 }

 2. if-else condition :-
 - if condition is true than statement is true otherwise false.
 - syntax :- 
 if (condition){
     statement
 }
 else{
     statement
 }

 3.if-elif condition :-
 - it's check the condition multiple times ,where the condition is true ,it returns the statement.
 - syntax :-

 if(condition){
     statement
 } else


 loops in javascript :- 
 - loops are used to execute a piece of code again 7 again .
 - there are 5  types of loops are there .....

 1.for loop ->
 - syntax :-

 for(initialization;condition;updation){
     statement
 }
 ex.we want to print "javascript" 5 times .....

 for (let i = 1;i<=5; i++){
     console.log("javascript")
 }

 working ->
 i = 1 -> javascript
 i = 2 -> javascript
 i = 3 -> javascript
 i = 4 -> javascript
 i = 5 -> javascript

 2. while loop
 3. do-while loop
 4. for-in loop
 5. for-of loop









 stringnin javascript:-
 - basically string is a sequence of character used  to represent text.
 - create a string ->





 string literals & interpolation ->
 - it's a way to have embeded expresion in string.
 - it;s denoted by symbol --.

 string interpolation :-

 - to create string by doin g substitution of placeholder.
 - ex. -> string text ${expresion} string text.

 escape symbol in string :-
 1.\n -> new line
 2. \t -> new tab

 string method :-
 1.str.touppercase()
 2.str.tolowercase()
 3.str.trim()
 4.str.slice(start,(end-1))
 5.str1.contact(str2)
 6.str.replace(oldval,newval)
 7.str.replaceAll(oldval,newval)
 8.str.charAt(idx)


 Array in java script->

 - array is a collection of items.
 - ex. let arr=["iron man","bat man","spyder man"]
 - array index starts from "0".
 - indexing of array-> arr[0],arr[1], etc....


 looping over an array->
 - loop -> iteration
 syntax -> for (let i=0; i< arr.length();i++){
    statement
 }

 methods of array:-
 1. push() -> add an element to end of an array
 2. pop() -> remove from the end of an array
 3. toString() -> convert array to string
 4. concat() -> add to or remove array/ join multiple array
 5. unshift() -> add an element to the start of an array
 6. shift() -> remove an element to the start of an array
 7. slice() -> return a piece of the array
 8. splice() -> change original array(add,remove,replace)

 practice question ->
 1. for a given array with marks of students ->[78,90,54,32,98,70].
 find the average marks of the student.

 2. for a given array with price of items ->[789.543,590,432,489].
 all items have an offer of 10% of them  .change the array to store  final price after appliying offer.

 function :-
 - it is a block of code that perform specific task.can be onvolved or called whenver wwe need.
 - ex. (in-build  function)

 1. console.log("hello") -> in this code .log() is a function.
 2. "abc".touppercase() -> in this code .touppercase() is a function.
 3. [1,2,3].push(4) -> in this code.push()is a function.

 - there are 2 types of function in javascript.
 1.normal function  ->
 - type A function .
 // function creation ->

 function  function_name(){
    // do some task
 }

 // function calling ->
 function_name()


- type B function ->

// function creation  ->
function function_name(parameter_1,parameter_2){
    // do some task
}
// function calling ->
function_name(arg_1,arg_2)


 2.arrow function ->

 - it is a compact way of writing a function.
 - it uses map() function to retrive the backend data,filter() function for filterise our data etc ....

 // function creation  ->

 const function_name = (para_1,para_2) => {
    // do some task
 } 

 // function calling ->
 function_name(arg_1,arg_2)

 normal function ->
 function  sum(a,b){
    return a + b;
 }
 sum (2,3)

 arrow function ->
 const sum = (a,b) =>{
    return a + b;
 }
 sum(2,3)

 practice question ->
 1. create a function using the "function" keyword that takes a string as an arugument & return the number of vowels in that string.
 function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example
let result = countVowels("Hello World");
console.log(result); // Output: 3






advance js :-

1. dom
2. event & event handling
3. sync & async code (promise,.then,.catch,async & await)
4. API handiling

DOM in  javascript:-
- dom stands for document object model.
- when a web page is loaded the broweser create a document object model of that page.
- the html dom model is constructed as a tree like structure.

windows -> document -> html -> head -> meta tags & title
-> body -> h1,h2,img etc ......


why used dom in javascript :-

- javascript can change all the html element in the page .
- javascript can create,delete or edit any html page directlly through dom.
- javacript can also acess css styling directlly .


window object :-

- the window  object represents an open window in a  browser.
- it is a browser object & it automatically created by browser.
- it is also a global object with lots of properties & methods .



dom manipulation :-
"
1. selecting with ID -> document.getelementBy ID("my id")

2. selecting with class -> document.getelementByClassName("my class")

3. selecting with tag -> document.getelementByTagName("p")


4. query selector -> 

- document.query selector("id/class/tag")
- document,query selectorAll("id/class/tag")

5. attributes ->
- getattributes(attr)      -> to get attrib ute value.
- setattribute(attr,value) -> to set the attribute value.

6. insert element ->
- node.append(ele) -> adds at the end of the node(inside)
- node.prepend(ele) -> adds at the start of the node(inside)
- node.after(ele) -> adds after the node(outsidde)
- node.before(ele) -> adds before the node(outside)

7. delete element ->
- node.remove(ele) -> remove  the node


event in javascript:-

- the change in the stste of an object is known as event.
- some famous events are .......

1. mouse event(click,dbclick,onmouseover)
2. keyboard event(keypress,keyup,keydown)
3. from event(submit)
4. 

event handiling:-

- syntax:-

node.event = ()=> {
    // handle here
}

event object:-
- it is a special; object that has details about the event.
- all event handler have acess to the event objects propeerties & methods.
- syntax:-

node.event = (e)=>{
    // handle here
}

- in methods you can get -> e.target,e.type,etc.....

practice task:-
Q.create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.

synchronous :-

- synchronous means the code runs in a particular sequence of instruction given in the program.
- each instruction waits for the privious instruction to complete it's execution.

ex. 
console.log("one")
console.log("two")
console.log("three")

output -> one two three

asynchronous :-
- due to synchronous programing, something imp.instruction get blocked due to some privious instruction,which causes a dealy in the UI.

 


 callback in javascript:-

 - a callback function which passed as an argument of another function.

 callback hell:-

 - it's a nested callback stacked below one after forming a pyramid structure .
 - this style of programing becomes difficult to understand & manage.

 promise in javascript:-
 - it is a solution of callback hell.
 -  syntax:-

 let promise = new promise((resolve,reject)=>{
    // statement
 })

 - a javascript promise object can be ->>

 1. pending ->the result is undefined
 2. resolved-> the result is a value(fulfilled)
 3. react-> the res




 async & await in js :-
 - async function always return a promise.
 - syntax  :-

 async function myfun(){
    // statement
 }

 note :- await pauses the execution of it's surrounding async function untill the promise is selected.

 async -> ststement 1
 await -> statement 2
 await -> statement 3
 await -> statement 4






 API handiling /fetch API :-
 - the fetch API provides an interface for fetching data.
 - it uses request & response object.
 - the fetch() methods is used to fetch a data.
 - syntax :-


 status code of node js :-

 - 200 ->ok
 - 201 ->created
 - 202 ->accepted
 - 300 ->multiple choice
 - 382 ->found 
 - 400 ->bad request
 - 402 ->payment required
 - 404 ->not found
 - 406 ->not accept
 - 408 ->request timeout
 - 500 ->internal server error
 - 502 ->bad gateway
 - 504 ->gateway timeout