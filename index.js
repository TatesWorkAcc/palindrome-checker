const userInput = document.getElementById("input")
// gets the users input from the html
function reverseString(str) {
// convertes the string into an array
return str.split("").reverse().join("")
// no spaces between the quotes beens that it will split between letters         h e l l o  w o r l d
// if it has a space: return str.split(" ") it will split between the words  hello   world
// .reverse() is a function that reverses the elements in an array d l r o w  o l l e h
// .join() is like the split element but the opposite

}

function check(){
    const value = input.value;

    reversedstring = reverseString(value)
    // reverses the strings order
    if (reversedstring == value){
        // checks if the reverse string is still the same as when it wasn't
        alert(value + " is a palindrome")
        
    }
    else{
        alert("This is not a palindrome")
    }

    input.value = ""
    // clears after checking
}