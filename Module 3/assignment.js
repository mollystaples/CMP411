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
            let lowercaseWord = theNewWord.toLowerCase()
            var splitString = lowercaseWord.split("");
            var reverseArray = splitString.reverse();
            var joinArray = reverseArray.join("");
            
            for (let i = 0, len = lowercaseWord.length, text = ""; i < len; i++){
                if (lowercaseWord != joinArray){ 
                    var tableRef = document.getElementById("mylist1");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + "false"
                }
                else{
                    var tableRef = document.getElementById("mylist1");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + "true"
                }
            }

        }
        else{
           
            function isPalindrome() {
                let lowercaseWord2 = theNewWord.toLowerCase()
                let splitString = lowercaseWord2.split("");
                let reverseArray = splitString.reverse();
                let joinArray = reverseArray.join("");
                if (theNewNumber == 2){
                    var tableRef = document.getElementById("mylist2");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + "true";
                }
                //*else {
                    //*var tableRef = document.getElementById("mylist1");
                    //*(tableRef.insertRow(tableRef.rows.length)).innerHTML = lowercaseWord2 + "false";
                //*}
            }
            
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