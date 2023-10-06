
async function getBaconIpsum() {
    //First build the API call string by starting with the URL
    var apiString= "https://baconipsum.com/api/";
    //next add the parameters to the string using the drop down lists
    var theNewParagraph = document.getElementById("newParagraph").value;
    apiString = apiString + "?type=all-meat&paras=" + theNewParagraph; 

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
    
    return true;

}