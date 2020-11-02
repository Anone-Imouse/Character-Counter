function letter_number()
//Anything under is defining the function
{
  var inp=document.getElementById("inp").value;
  //This is saying that the variable inp is going to be the content in the input bar from the html file with the id set as inp.
  var pa=document.getElementById("pa");
  //This is saying that the variable pa is going to be the content in the paragraph from the html file with the id set as pa. It does not need the ".value" at the end because of the fact that the input is an interactive element and you have to enter text there so that's why.
pa.innerHTML="There were "+inp.length+ " characters in your last search.";
  //It's saying that the innerHTML so basically what you normally determine will be the text "There were " followed by inp.length(the number of characters in the input bar) proceeded by " carachters in your last search." Giving by example, if you wrote hey, it would write: "There were 3 characters in your last search."
}

console.log("If you can see this you are an absolute legend and you literally deserve an award");
