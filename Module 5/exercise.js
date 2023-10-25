async function getQuote() {
    //First build the API call string by starting with the URL
    var apiString= "https://api.quotable.io/quotes/random";
    //next add the parameters to the string using the drop down lists
    var theNewLength = document.getElementById("length").value;
    

    if (theNewLength==1){
        var theNewLength = "?minLength=5&maxLength=100"
    }
    else if (theNewLength==2){
        var theNewLength = "?minLength=101&maxLength=200"
    } 
    else {
        var theNewLength = "?minLength=201"
    }
    

    apiString = apiString + theNewLength;
    alert(apiString);

    //now make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    

    //finally, print the repsonse in the various formats
    document.getElementById("quote").innerHTML= "";
    document.getElementById("author").innerHTML = "";

    var jsonData = await response.json();

    //stringify and print out the JSON object in the RawData section 
    document.getElementById("quote").innerHTML = JSON.stringify(jsonData[0].content);
    
    document.getElementById("author").innerHTML = JSON.stringify(jsonData[0].author);

    

    return true;
}