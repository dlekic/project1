import React from 'react';

import ReactDOM from 'react-dom';
import './stil.css';

const data = require('./data.json');
var index=1;
var j=0;
var isRequired;
var k;
var ind;
var isFreeSpace=false;

document.body.addEventListener("click", function (evt) {
if((evt.target.tagName!="BUTTON")||((isFreeSpace)&&(evt.target.tagName=="BUTTON")&&(evt.target.id=="jedan"))){
isFreeSpace=true;} else {
isFreeSpace=false;
}

});

function Btn() {
isFreeSpace=true;
index=1; j=0;
ReactDOM.render(wiz1, document.getElementById('root'));
var temp=<span><button class="btn" onClick={getID} id={data.genres[0].id}  >{data.genres[0].name}</button>  </span>;
var i=0;
for (i=1;i<data.genres.length;i++){
var temp1=<span>{temp}<button class="btn" onClick={getID} id={data.genres[i].id}>{data.genres[i].name}</button>  </span>;
temp=temp1;}
temp1=<div class="container" align="center"><div class="board">
<div class="board-inner">{temp}</div><div class="board-inner"><br/><br/></div>
<div class="board-inner"  ><button type="Button" class="btn" id="jedan" onClick={ BtnSub} >Next</button></div>
</div></div>;
  ReactDOM.render(temp1, document.getElementById('root1'));
}



function getID(e){
index=e.target.id;
if (j==0){j=index;}
}

function BtnSub() {
isRequired=false;
k=index;
var temp=<span><button class="btn" onClick={getID}  id={data.genres[index-1].subgenres[0].id}>{data.genres[index-1].subgenres[0].name}</button>  </span>;
var i=0;
for (i=1;i<data.genres[index-1].subgenres.length;i++){
var temp1=<span>{temp}<button class="btn" onClick={getID} id={data.genres[index-1].subgenres[i].id}>{data.genres[index-1].subgenres[i].name}</button>  </span>;
temp=temp1;}
temp1=<div class="container" align="center"><div class="board">
<div class="board-inner">{temp}<span><button type="Button" class="btn" onClick={getID} id="new"   >Add new</button>  </span><br/><br/></div>
<div class="board-inner"></div>
<div class="board-inner"  >
<span><button type="Button" class="btn" id="dva"  onClick={Btn} >Back</button>  </span>
<button type="Button" class="btn" id="jedan"  onClick={AddNew} >Next</button></div>
</div></div>;
if (isFreeSpace==false){
ReactDOM.render(wiz2, document.getElementById('root'));
ReactDOM.render(temp1, document.getElementById('root1'));}
else {alert("Please choose one of given genres.");}
isFreeSpace=true;
}

function AddNew(){
var i;
for (i=0;i<data.genres[j-1].subgenres.length;i++){
if (data.genres[j-1].subgenres[i].id==index){
isRequired=data.genres[j-1].subgenres[i].isDescriptionRequired;
}
}
const sub=<div align="center"><input type="text" id="subgenre" placeholder="Subgenre name"/><br/>
<textarea rows="4" id="description" placeholder="Type the description... &#10;&#128206; &#128279; &#64;"/><br/>
<div class="row"><input type="checkbox" id="check" />Description is required for this subgenre<br/><br/>
<div class="board-inner"  >
<span><button type="Button" class="btn" id="dva"  onClick={BtnSub} >Back</button>  </span>
<button type="Button" class="btn" id="jedan"  onClick={AddBook} >Next</button></div>
</div></div>;
if ((index=="new")&&(isFreeSpace==false)){
index=k;
ind=true;
ReactDOM.render(wiz3, document.getElementById('root'));
ReactDOM.render(sub, document.getElementById('root1'));}
else if (isFreeSpace==false){ 
ind=false;
AddBook();}
else {alert("Please choose one of given subgenres or add new subgenre.");}
}


function AddBook(){
index=k;
if ((ind==true)&&(document.getElementById("check").checked==true)){
isRequired=true;
}
if ((ind==true)&&((document.getElementById("subgenre").value=="")||(document.getElementById("description").value==""))){
alert("Please fill in a form.");
} else{
const book=<div align="center" class="row">
Book title:<br/>
<input type="text" id="title" placeholder="Book title"/><br/>
Author:<br/>
<select  id="author" ><option value="" disabled selected >Author</option></select><br/>
ISBN:<br/>
<input type="text" id="isbn" placeholder="ISBN"/><br/>
Publisher:<br/>
<select  id="publisher" ><option value="" disabled selected >Publisher</option></select><br/>
Date published:<br/>
<input type="date" id="date" /><br/>
Number of pages:<br/>
<input type="text" id="number" placeholder="Number of pages"/><br/>
Format:<br/>
<select  id="format" ><option value="" disabled selected >Format</option></select><br/>
<table>
<tr><td class="tbl">Edition:</td><td class="tbl">Edition language:</td></tr>
<tr><td class="tbl"><input type="text"  id="edition" placeholder="Edition"/></td><td class="tbl"><select  id="language" ><option value="" disabled selected >Edition language</option></select></td></tr>
</table>
Description:<br/>
<textarea rows="4" id="description" placeholder="Type the description... &#10;&#128206; &#128279; &#64;"/>
<div class="board-inner"  >
<span><button type="Button" class="btn" id="dva"  onClick={BtnSub} >Back</button>  </span>
<button type="Button" class="btn" id="jedan"  onClick={Complete} >Next</button></div>
</div>;

ReactDOM.render(wiz4, document.getElementById('root'));
ReactDOM.render(book, document.getElementById('root1'));
}

}

function Complete(){

const finish=<div class="container" >
<div class="board">
<div class="board-inner" align="center" >                      
<span class=" round-tabs success">
                              
<br/>&#10004;<br/></span>
</div></div>
</div>;
const finish2=<div class="row1"  ><br/><br/><br/>Book added successfully<br/><br/>
<button type="Button" class="btnf" id="jedan"  onClick={Btn} >Add another book</button>
</div>;
if ((document.getElementById("description").value=="")&&(isRequired)){
alert("Please add a description.");
}else{

ReactDOM.render(finish, document.getElementById('root'));
ReactDOM.render(finish2, document.getElementById('root1'));}
}


function status(e) {
ReactDOM.render(wiz2, document.getElementById('root'));
}

const wiz1 =

<div class="container" >
<div class="row" align="center">Add book - New book<br/><br/>
<div class="board">
<div class="board-inner"> 
<table class="nav nav-tabs" id="myTab" >
                   
<div class="liner"></div>                      
<tr><td class="active" >
            
<a  data-toggle="tab" title="">
                      
<span class=" round-tabs one1">
                              
1
<br/>Genre</span></a></td>
<td><a  onclick="return(wiz2);" data-toggle="tab" title="">
                     
<span class="round-tabs two">
                         
2<br/>Subgenre</span> </a></td>
<td ><a  data-toggle="tab" title="">
                     
<span class="round-tabs three">
                         
...<br/>More</span> </a>
</td>
</tr><tr></tr></table>
<br/><br/>
</div></div></div></div>;

const wiz2 =

<div class="container">
<div class="row" align="center">Add book - New book<br/><br/>
<div class="board">
<div class="board-inner">   
<table class="nav nav-tabs" id="myTab" >
                   
 <div class="liner"></div>                   
<tr><td class="active">
                     
<a  data-toggle="tab" title="">
                      
<span class="round-tabs one">
                              
1<br/>Genre
</span></a></td>
<td><a  data-toggle="tab" title="">
                     
<span class="round-tabs two1">
                         
2<br/>Subgenre</span> </a>
</td>
<td ><a  data-toggle="tab" title="">
                     
<span class="round-tabs three">
                         
...<br/>More
</span> </a>
</td>
</tr></table>
<br/><br/>
</div></div></div></div>;

const wiz3 =

<div class="container">
<div class="row" align="center">Add book - New book<br/><br/>
<div class="board">
<div class="board-inner">   
<table class="nav nav-tabs" id="myTab" >
                   
 <div class="liner"></div>                   
<tr><td class="active">
                     
<a  data-toggle="tab" title="">
                      
<span class="round-tabs one">
                              
1<br/>Genre
</span></a></td>
<td><a  data-toggle="tab" title="">
                     
<span class="round-tabs two">
                         
2<br/>Subgenre</span> </a>
</td>
<td><a  data-toggle="tab" title="">
                     
<span class="round-tabs three1" >
                         
3<br/>Add_new_subgenre</span> </a>
</td>
<td ><a  data-toggle="tab" title="">
                     
<span class="round-tabs four">
                         
4<br/>Information</span> </a>
</td>
</tr></table>
<br/><br/>
</div></div></div></div>;

const wiz4 =

<div class="container">
<div class="row" align="center">Add book - New book<br/><br/>
<div class="board">
<div class="board-inner">   
<table class="nav nav-tabs" id="myTab" >
                   
 <div class="liner"></div>                   
<tr><td class="active">
                     
<a  data-toggle="tab" title="">
                      
<span class="round-tabs one">
                              
1<br/>Genre
</span></a></td>
<td><a  data-toggle="tab" title="">
                     
<span class="round-tabs two">
                         
2<br/>Subgenre</span> </a>
</td>
<td><a  data-toggle="tab" title="">
                     
<span class="round-tabs three" >
                         
3<br/>Add_new_subgenre</span> </a>
</td>
<td ><a  data-toggle="tab" title="">
                     
<span class="round-tabs four1">
                         
4<br/>Information</span> </a>
</td>
</tr></table>
<br/><br/>
</div></div></div></div>;

function App(){
Btn();
return( wiz1);
}export default App;
