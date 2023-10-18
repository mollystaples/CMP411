
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
    
    //return true;
   
    if (newAlgorithm==1){
        document.getElementById("myEncryptedData").innerHTML= algorithm1(jsonData);
    }
    else{
        document.getElementById("myEncryptedData").innerHTML= algorithm2(jsonData);
    }

    return true;
}
function algorithm1(jsonData){
    var newString= "";
    
    for (var para in jsonData) {
        newString+= "<p>";
        for(var char in jsonData[para]) {
           var newChar= jsonData[para][char];
            newChar = String.fromCharCode(newChar.charCodeAt(0)+1);
            newString+= newChar;

        }
        newString+= "</p>";
    }

    return(newString);
    }
       
function algorithm2(jsonData){
    var newString= "";
        
    for (var para in jsonData) {
        newString+= "<p>";
        for(var char in jsonData[para]) {
            var newChar= jsonData[para][char];
            newChar = String.fromCharCode(newChar.charCodeAt(0)-5);
            newString+= newChar;
    
        }
        newString+= "</p>";
    }
    
    return(newString);
    }