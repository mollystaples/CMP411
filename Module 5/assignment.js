async function getStrings() {
    //First build the API call string by starting with the URL
    var apiString= "https://ciprand.p3p.repl.co/api?";
    //next add the parameters to the string using the drop down lists
    var theNewLength = document.getElementById("length").value;
    var theNewNumber = document.getElementById("number").value;
    

    if (theNewLength==1){
        var theNewLength = "len=20"
    }
    else if (theNewLength==2){
        var theNewLength = "len=50"
    } 
    else {
        var theNewLength = "len=100"
    }

    if (theNewNumber==1){
        var theNewNumber = "&count=5"
    }
    else if (theNewNumber==2){
        var theNewNumber = "&count=10"
    }
    else {
        var theNewNumber = "&count=15"
    }
    

    apiString = apiString + theNewLength + theNewNumber;
    alert(apiString);

    //now make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    

    //finally, print the repsonse in the various formats
    document.getElementById("strings").innerHTML= "";

    var jsonData = await response.json();

    //stringify and print out the JSON object in the RawData section 
    document.getElementById("strings").innerHTML = JSON.stringify(jsonData.Strings);
    for (var aString in jsonData.Strings) {
        document.getElementById("strings").innerHTML += "<p>" + jsonData.Strings[aString] + "</p>";
    }
    


    return true;
}