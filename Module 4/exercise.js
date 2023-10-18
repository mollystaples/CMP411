
async function getBaconIpsum() {
    //First build the API call string by starting with the URL
    var apiString= "https://baconipsum.com/api/";
    //next add the parameters to the string using the drop down lists
    var theNewParagraph = document.getElementById("newParagraph").value;
    var meatOrFiller = document.getElementById("meatOrFiller").value;
    var startWith = document.getElementById("startWith").value;
    var newAlgorithm = document.getElementById("newAlgorithm").value;

    if (meatOrFiller==1){
        var theMeatOrFiller = "?type=all-meat&paras="
    }
    else {
        var theMeatOrFiller = "?type=meat-and-filler&paras="
    } 

    if(startWith==1){
        var theStartWith = "&start-with-lorem=1"
    }
    else{
        var theStartWith = ""
    }

    apiString = apiString + theMeatOrFiller + theNewParagraph + theStartWith;
    alert(apiString);

    //now make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    //finally, print the repsonse in the various formats
    document.getElementById("myRawData").innerHTML= "";
    document.getElementById("myFormattedData").innerHTML = "";

    var jsonData = await response.json();

    //stringify and print out the JSON object in the RawData section 
    document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);

    //loop through the JSON object one paragraph at a time and print each in the FormattedData section
    for (var para in jsonData) {
        document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
    }
    
    
    //create an if statement for which algorithm to use
    if (newAlgorithm==1){
        document.getElementById("myEncryptedData").innerHTML= algorithm1(jsonData);
    }
    else{
        document.getElementById("myEncryptedData").innerHTML= algorithm2(jsonData);
    }

    return true;
}
function algorithm1(jsonData){
    var newString= ""; //make a variable newString that is empty
    
    for (var para in jsonData) { //for each paragraph
        newString+= "<p>"; //this separates paragraphs
        for(var char in jsonData[para]) { //for each character in each paragraph
           var newChar= jsonData[para][char]; //newChar is the character of each paragraph ini the jsonData
            newChar = String.fromCharCode(newChar.charCodeAt(0)+1); //putting the characters back together as a string and changing the ASCII value
            newString+= newChar; //add each character to the string

        }
        newString+= "</p>";
    }

    return(newString);
    }
       
function algorithm2(jsonData){
    var newString= ""; //make a variable newString that is empty
        
    for (var para in jsonData) { //for each paragraph
        newString+= "<p>"; //this separates paragraphs
        for(var char in jsonData[para]) { //for each character in each paragraph
            var newChar= jsonData[para][char]; //newChar is the character of each paragraph ini the jsonData
            newChar = String.fromCharCode(newChar.charCodeAt(0)-5); //putting the characters back together as a string and changing the ASCII value
            newString+= newChar; //add each character to the string
    
        }
        newString+= "</p>";
    }
    
    return(newString);
    }