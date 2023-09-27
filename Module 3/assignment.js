function validateANDadd() {
    //* This is afunction where we validate that the user enters a word and then chooses either list 1 or 2
    var theNewWord = document.forms["myform"]["newWord"].value;
    var theNewNumber=document.forms["myform"]["newNumber"].value;
    
    if (theNewWord == "") {
        alert("Please enter a word to check");
        return false;
    }

    else if ((theNewNumber != 1) && (theNewNumber != 2)) {
        alert("please enter a 1 or 2 for the list.");
        document.forms["myform"]["newNumber"].value = "";
        return false;
    }
    else {
        
        //* This is where we add a row and the new word to either list 1 or 2
        if (theNewNumber==1){     
                    var tableRef = document.getElementById("mylist1");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + " " + Palindrome1(theNewWord);
                }
                
        else{
                var tableRef = document.getElementById("mylist2");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + " " + Palindrome2(theNewWord);
            }
            
        
        
        document.forms["myform"]["newWord"].value = "";
        document.forms["myform"]["newNumber"].value = "";
        return true;
        
    }

}
function clearList1() {
    //* This clears list 1 when the user clicks the button
    var tableRef = document.getElementById("mylist1");
    tableRef.innerHTML = " ";
}

function clearList2() {
    //* This clears list 2 when the user clicks the button
    var tableRef = document.getElementById("mylist2");
    tableRef.innerHTML = " ";
}

function Palindrome1(newWord) {
    let lowercaseWord = newWord.toLowerCase()
    let splitString = lowercaseWord.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    
    return (lowercaseWord == joinArray)
}

function Palindrome2(newWord) {
    newWord = newWord.toLowerCase();
    let splitString = newWord.split("");
    splitString.reverse();



    for(let i = 0; i < newWord.length; i++) {
        if (splitString [i] != newWord [i]) {
            return false;
        }
    }

    return true;
}