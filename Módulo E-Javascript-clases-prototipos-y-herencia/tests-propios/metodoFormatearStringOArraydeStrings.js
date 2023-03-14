// Create a method for strings that, given the following format:
// "230312-45-History"
//
// converts the string to this format:
// "230312 45 minutes studying History"
// then adapt that method for arrays

var exampleString = "230312-120-History"

var arrayOfStrings = [
    "230311-45-minutes-History",
    "230312-120-minutes-Chemistry",
    "230312-45-minutes-History",
    "230313-60-minutes-Maths",
]

String.prototype.newFormatString = function() {
    var splitString = this.split("-");
    var date = splitString[0];
    var splitDate = date.split("");
    splitDate.splice(2, 0, "/");
    splitDate.splice(5, 0, "/");
    var formatedDate = splitDate.join("");
    splitString[0] = formatedDate;
    splitString.splice(0, 0, "On");
    splitString.splice(-1, 0, "minutes studying");
    
    var formatedString = splitString.join(" ");
    console.log(formatedString);
}


Array.prototype.newFormatArray = function() {
    for (let i = 0; i < this.length; i++) {
        this[i].newFormatString();
    }
}

console.log("Formatted String: ")
exampleString.newFormatString();

console.log("Formatted Array: ")
arrayOfStrings.newFormatArray();