/*
/	PURPOSE: 
/		This file contains the needed functionality for application to dynamically change based on user input.
/		In addition, this file contains lists of classes which satisfy specific requirements that are stored in arrays.
/		The file also includes the functions to help us with cookies.
/	
/	MAINTENANCE INSTRUCTIONS:
/
/		If you wish add another core requirement this can easily be done by adding the corresponding course catalog number (Example "COEN 10",)
/		into the respected requirement array.
/		
/		If you wish to add another major requirement you will need to add these lines with the respective class
/						IN THE HTML FILE, in the respective box
/						<tr>
/							<td>INSERT CATALOG NAME</td>
/							<td name="requirement" id="INSERT CATALOG NAME">NO!</td> 
/						</tr>
/						
/						IN THE JS FILE, in the generate() function
/						else if(x == "INSERT CATALOG NAME"){
/							document.getElementById("INSERT CATALOG NAME").innerHTML = "YES!"; 
/							document.getElementById("INSERT CATALOG NAME").style.backgroundColor = "rgb(46, 204, 113)";
/							elective = 1;}
/						}
/
/		If you wish to remove another major requirement you will need to delete these lines with the respective class
/						
/						IN THE HTML FILE, in the respective box
/						<tr>
/							<td>CATALOG NAME</td>
/							<td name="requirement" id="CATALOG NAME">NO!</td> 
/						</tr>
/						
/						IN THE JS FILE, in the generate() function
/						else if(x == "CATALOG NAME"){
/							document.getElementById("CATALOG NAME").innerHTML = "YES!"; 
/							document.getElementById("CATALOG NAME").style.backgroundColor = "rgb(46, 204, 113)";
/							elective = 1;}
/						}
*/

//These arrays hold the class list and the list of technical and nontechnical electives
var courses = [];
var technicalElectives = [];
var electives = [];
var specialCases = [];

var doubledip = 0;

//These variables check for cores and classes that are able to be filled by multiple classes
var CheckSocialScience = 0;
var CheckEthics = 0;
var CheckRtc3 = 0;
var CheckRtc2 = 0;
var CheckElsj = 0;
var CheckDiversity = 0;
var CheckCi3 = 0;
var CheckMath53 = 0;
var CheckAmth108 = 0;
var CheckChem11 = 0;
var CheckAmth106 = 0;

// double dippers: POLI 2, POLI 3, TESP 45, TESP 159, ANTH 3, COMM 107A, LBST 106, ETHN 160, ETHN 161, PHIL 5A
//		   PHIL 70, POLI 134, POLI 140, POLI 145, PSYC 114EL, RSOC 99, SCTR 128, TESP 43, TESP 46, TESP 64
//		   TESP 65, TESP 133, TESP 157, TESP 183

//The various arrays of all classes in the course catalog
var CI1 = [
  "ANTH 11A",
  "ARTH 11A",
  "ARTH 11H",
  "CLAS 11A",
  "ENGL 11A",
  "ENVS 11A",
  "HIST 11A",
  "HIST 11H",
  "ITAL 11A",
  "MUSC 11A",
  "PHIL 11A",
  "SOCI 11A",
  "THTR 11A",
  "WGST 11A",
];
var CI2 = [
  "ANTH 12A",
  "ARTH 12A",
  "CLAS 12A",
  "ENGL 12A",
  "ENVS 12A",
  "HIST 12A",
  "HIST 12H",
  "ITAL 12A",
  "MUSC 12A",
  "PHIL 12A",
  "SOCI 12A",
  "THTR 12A",
  "WGST 12A",
];
var CI3 = [
  "TESP 133",
  "POLI 3",
  "ANTH 50",
  "ANTH 152",
  "ARTH 27",
  "ARTH 160",
  "ECON 134",
  "ENGL 153",
  "ENGL 156",
  "FREN 114",
  "HIST 92",
  "HIST 116S",
  "HIST 137",
  "HIST 142",
  "HIST 147B",
  "HIST 150",
  "MGMT 80",
  "MUSC 130",
  "POLI 2",
  "POLI 50",
  "POLI 137",
  "RSOC 136",
  "SPAN 112",
  "WGST 104",
  "WGST 122",
  "WGST 124",
  "WGST 126",
  "ANTH 156",
  "ANTH 159",
  "ANTH 172",
  "ANTH 181",
  "ANTH 184",
  "ANTH 185",
  "ANTH 186",
  "ANTH 187",
  "ANTH 188",
  "ARAB 137",
  "ARTH 24",
  "ARTH 25",
  "ARTH 26",
  "ARTH 152",
  "ARTH 161",
  "ARTH 162",
  "ARTH 163",
  "ARTH 164",
  "ARTH 170",
  "CLAS 60",
  "COMM 105A",
  "COMM 183A",
  "COMM 184A",
  "COMM 187A",
  "COMM 188A",
  "COMM 189A",
  "DANC 68",
  "ENGR 177",
  "ENGL 56",
  "ENGL 66",
  "ENGL 31A",
  "ENGL 120",
  "ENGL 157",
  "FREN 111",
  "FREN 112",
  "FREN 113",
  "FREN 174",
  "HIST 64",
  "HIST 91",
  "HIST 95",
  "HIST 102S",
  "HIST 104",
  "HIST 107",
  "HIST 112",
  "HIST 122",
  "HIST 136",
  "HIST 140S",
  "HIST 141",
  "HIST 143S",
  "HIST 144S",
  "HIST 145",
  "HIST 146A",
  "HIST 146B",
  "HIST 147A",
  "HIST 151",
  "HIST 152",
  "HIST 154B",
  "HIST 157",
  "HIST 161",
  "HIST 162",
  "HIST 163",
  "HIST 164S",
  "HIST 166",
  "MUSC 136",
  "POLI 126",
  "POLI 136",
  "POLI 140",
  "POLI 145",
  "POLI 148",
  "SOCI 134",
  "SOCI 135",
  "SOCI 138",
  "SPAN 137",
  "SPAN 147",
  "SPAN 149",
  "WGST 120",
  "WGST 123",
  "WGST 125",
  "WGST 128",
  "WGST 172",
  "WGST 175",
];
var ctw1 = ["ENGL 1A", "ENGL 1H"];
var ctw2 = ["ENGL 2A", "ENGL 2H", "PHIL 2A", "WGST 2A"];
var diversity = [
  "TESP 64",
  "ANTH 157",
  "ARTH 143",
  "ARTH 185",
  "COMM 107A",
  "ENGL 38",
  "ENGL 67",
  "ENGL 125H",
  "ETHN 5",
  "ETHN 30",
  "ETHN 40",
  "ETHN 132",
  "ETHN 144",
  "ETHN 153",
  "ETHN 157",
  "ETHN 165",
  "ETHN 178",
  "HIST 178",
  "LBST 106",
  "MUSC 132",
  "POLI 153",
  "POLI 154",
  "PSYC 182",
  "SOCI 33",
  "SOCI 153",
  "WGST 34",
  "WGST 50",
  "WGST 115",
  "WGST 155",
  "WGST 156",
  "WGST 163",
  "ANTH 146",
  "ANTH 148",
  "ANTH 149",
  "ANTH 170",
  "ARTH 140",
  "ARTH 146",
  "COMM 121A",
  "COMM 164A",
  "COMM 168A",
  "DANC 62",
  "DANC 162",
  "DANC 66",
  "DANC 166",
  "ECON 166",
  "ENGL 31G",
  "ENGL 35",
  "ENGL 35G",
  "ENGL 36",
  "ENGL 39",
  "ENGL 68",
  "ENGL 69",
  "ENGL 79G",
  "ENGL 122",
  "ENGL 122AW",
  "ENGL 125",
  "ENGL 129",
  "ENGL 132G",
  "ENGL 135",
  "ENGL 136",
  "ENGL 138",
  "ENGL 152",
  "ETHN 10",
  "ETHN 20",
  "ETHN 35",
  "ETHN 36",
  "ETHN 41",
  "ETHN 50",
  "ETHN 51",
  "ETHN 65",
  "ETHN 70",
  "ETHN 95",
  "ETHN 96",
  "ETHN 120",
  "ETHN 123",
  "ETHN 125",
  "ETHN 130",
  "ETHN 134",
  "ETHN 135",
  "ETHN 139",
  "ETHN 141",
  "ETHN 142",
  "ETHN 145",
  "ETHN 149",
  "ETHN 152",
  "ETHN 154",
  "ETHN 155",
  "ETHN 156",
  "ETHN 160",
  "ETHN 161",
  "ETHN 162",
  "ETHN 163",
  "HIST 84",
  "HIST 153",
  "HIST 156A",
  "HIST 156B",
  "HIST 158",
  "HIST 172",
  "HIST 174",
  "HIST 177",
  "HIST 180",
  "HIST 181",
  "HIST 182",
  "HIST 183",
  "HIST 185",
  "HIST 187",
  "HIST 188S",
  "ITAL 185",
  "LEAD 10",
  "MUSC 20",
  "MUSC 134",
  "MUSC 196",
  "PHIL 70",
  "PHIL 156",
  "POLI 134",
  "POLI 171",
  "POLI 195DW",
  "PSYC 156",
  "PSYC 189",
  "PSYC 196",
  "SOCI 150",
  "SOCI 162",
  "SOCI 175",
  "SOCI 180",
  "SPAN 176",
  "THTR 65",
  "THTR 151",
  "THTR 161",
  "TESP 65",
  "WGST 14",
  "WGST 15",
  "WGST 51",
  "WGST 56",
  "WGST 57",
  "WGST 101",
  "WGST 110",
  "WGST 111",
  "WGST 112",
  "WGST 113",
  "WGST 114",
  "WGST 116",
  "WGST 117",
  "WGST 118",
  "WGST 134",
  "WGST 134AW",
  "WGST 136",
  "WGST 138",
  "WGST 144",
  "WGST 164",
  "WGST 173",
  "WGST 174",
  "WGST 180",
  "WGST 188",
];
var elsj = [
  "TESP 133",
  "TESP 45",
  "POLI 3",
  "ANTH 3",
  "BIOL 188",
  "BUSN 151B",
  "BUSN 195EL",
  "COMM 107A",
  "COMM 141B",
  "ELSJ 22",
  "ELSJ 23",
  "ELSJ 135",
  "ENGR 111",
  "ENVS 131",
  "LBST 106",
  "MGMT 8",
  "PSYC 115EL",
  "PSYC 185EL",
  "SCTR 128",
  "SOCI 30",
  "SPAN 21EL",
  "TESP 46",
  "BUSN 188",
  "BUSN 189",
  "COMM 40EL",
  "DANC 59",
  "DANC 159",
  "DANC 69",
  "DANC 169",
  "DANC 189",
  "ENGL 106EL",
  "ENGL 111",
  "ENGL 145EL",
  "ENGL 150EL",
  "ENGL 176",
  "ENVS 155",
  "ETHN 60",
  "ETHN 160",
  "ETHN 161",
  "ELSJ 30",
  "ELSJ 50",
  "ELSJ 111",
  "ELSJ 197",
  "ELSJ 198",
  "ELSJ 199",
  "INTL 139",
  "INTL 139BF",
  "LEAD 10",
  "LEAD 17",
  "PHIL 5A",
  "PHIL 70",
  "POLI 158",
  "POLI 198EL",
  "PSYC 113EL",
  "PSYC 114EL",
  "PSYC 117EL",
  "PSYC 190EL",
  "PSYC 196",
  "PHSC 31",
  "PHSC 131",
  "PHSC 170",
  "RSOC 99",
  "RSOC 135",
  "SOCI 148",
  "SOCI 165",
  "SPAN 22EL",
  "SPAN 23EL",
  "ARTS 151",
  "TESP 43",
  "TESP 129",
  "TESP 157",
  "TESP 158",
  "TESP 183",
];
var ethics = [
  "TESP 159",
  "ENGR 19",
  "MGMT 6",
  "PHIL 5",
  "PHIL 6",
  "PHIL 7B",
  "PHIL 9",
  "PHIL 10",
  "WGST 189",
  "CLAS 149",
  "PHIL 2",
  "PHIL 3A",
  "PHIL 4A",
  "PHIL 4B",
  "PHIL 5A",
  "PHIL 7",
  "PHIL 8",
  "PHIL 111",
  "PHIL 113",
  "PHIL 115",
  "PHIL 116",
  "PHIL 121",
  "PHIL 122A",
  "PHIL 122B",
  "PHIL 123",
  "PSYC 114EL",
  "PHSC 7",
  "WGST 58",
  "WGST 184",
];
var rtc1 = [
  "RSOC 9",
  "RSOC 10",
  "RSOC 10H",
  "RSOC 12",
  "SCTR 15",
  "SCTR 19",
  "TESP 2",
  "TESP 4",
  "RSOC 7",
  "RSOC 19",
  "SCTR 11",
];
var rtc2 = [
  "TESP 64",
  "TESP 45",
  "TESP 43",
  "CLAS 63",
  "COMM 175A",
  "RSOC 27",
  "RSOC 51",
  "RSOC 91",
  "SCTR 33",
  "SCTR 39",
  "TESP 46",
  "TESP 50",
  "TESP 60",
  "WGST 47",
  "ANTH 150",
  "ARAB 171",
  "CLAS 12A",
  "CLAS 65",
  "CLAS 67",
  "CLAS 68",
  "CLAS 69",
  "COMM 179A",
  "ENGL 161",
  "ENGL 162",
  "ENGR 143",
  "ENVS 84",
  "HIST 16",
  "HIST 17",
  "HIST 103",
  "HIST 117",
  "HIST 120",
  "HIST 126",
  "HIST 129",
  "HIST 152",
  "MUSC 189",
  "PHIL 60",
  "POLI 139",
  "PSYC 193",
  "RSOC 33",
  "RSOC 38",
  "RSOC 46",
  "RSOC 54",
  "RSOC 64",
  "RSOC 67",
  "RSOC 81",
  "RSOC 85",
  "RSOC 86",
  "RSOC 87",
  "RSOC 88",
  "RSOC 90",
  "RSOC 96",
  "RSOC 99",
  "SCTR 26",
  "SCTR 27",
  "SCTR 28",
  "SCTR 30",
  "SCTR 35",
  "SCTR 45",
  "SCTR 48",
  "SCTR 58",
  "SCTR 65",
  "TESP 41",
  "TESP 65",
  "TESP 71",
  "TESP 72",
  "TESP 77",
  "TESP 79",
  "TESP 82",
  "TESP 86",
  "TESP 88",
  "WGST 46",
  "WGST 48",
];
var rtc3 = [
  "TESP 133",
  "TESP 159",
  "ELEN 160",
  "RSOC 111",
  "RSOC 115",
  "RSOC 134",
  "RSOC 136",
  "RSOC 174",
  "SCTR 128",
  "SCTR 132",
  "SCTR 157",
  "TESP 108",
  "TESP 109",
  "TESP 119",
  "TESP 124",
  "TESP 131",
  "TESP 137",
  "TESP 185",
  "WGST 149",
  "WGST 152",
  "BIOL 171",
  "ENVS 152",
  "ETHN 129",
  "RSOC 106",
  "RSOC 119",
  "RSOC 113",
  "RSOC 119",
  "RSOC 121",
  "RSOC 123",
  "RSOC 130",
  "RSOC 131",
  "RSOC 135",
  "RSOC 139",
  "RSOC 140",
  "RSOC 154",
  "RSOC 157",
  "RSOC 159",
  "RSOC 168",
  "RSOC 170",
  "RSOC 182",
  "RSOC 184",
  "RSOC 188",
  "RSOC 190",
  "RSOC 191",
  "RSOC 194",
  "SCTR 100",
  "SCTR 110",
  "SCTR 139",
  "SCTR 158",
  "SCTR 165R",
  "SCTR 170",
  "SCTR 175",
  "TESP 106",
  "TESP 118",
  "TESP 138",
  "TESP 143",
  "TESP 153",
  "TESP 121",
  "TESP 157",
  "TESP 163",
  "TESP 164",
  "TESP 165",
  "TESP 175",
  "TESP 176",
  "TESP 183",
  "TESP 184",
  "TESP 187",
  "TESP 190",
  "WGST 145",
  "WGST 148",
  "WGST 151",
];
var socialScience = [
  "ANTH 2",
  "ANTH 3",
  "ECON 1",
  "ECON 2",
  "LBST 100",
  "POLI 2",
  "POLI 40",
  "POLI 99",
  "PSYC 1",
  "PSYC 2",
  "SOCI 1",
  "ANTH 196",
  "CLAS 172",
  "ECON 1E",
  "ECON 129BF",
  "HIST 107",
  "POLI 134",
  "POLI 140",
  "POLI 143",
  "POLI 145",
];
var amth106 = [
  "MATH 22",
  "AMTH 106",
  "CHEM 12",
  "BIOL 21",
  "MATH 101",
  "MATH 102",
  "MATH 103",
  "MATH 105",
  "MATH 111",
  "MATH 112",
  "MATH 113",
  "MATH 122",
  "MATH 123",
  "MATH 125",
  "MATH 133",
  "MATH 134",
  "MATH 144",
  "MATH 153",
  "MATH 154",
  "MATH 155",
  "MATH 165",
  "MATH 166",
  "MATH 170",
  "MATH 172",
  "MATH 174",
  "MATH 175",
  "MATH 176",
  "MATH 177",
  "MATH 178",
  "BIOL 18",
  "CHEM 1",
  "ENVS 21",
];
var chem11 = ["CHEM 1", "BIOL 18", "CHEM 11", "ENVS 21", "PHYS 34"];
var upperDiv = [
  "COEN 120",
  "COEN 123",
  "COEN 127",
  "COEN 129",
  "COEN 145",
  "COEN 148",
  "COEN 150",
  "COEN 152",
  "COEN 160",
  "COEN 161",
  "COEN 162",
  "COEN 163",
  "COEN 164",
  "COEN 165",
  "COEN 166",
  "COEN 168",
  "COEN 169",
  "COEN 172",
  "COEN 173",
  "COEN 178",
  "COEN 180",
  "ELEN 115",
  "ELEN 133",
  "ELEN 134",
];
var math53 = ["MATH 53", "AMTH 118", "MATH 166"];
var amth108 = ["AMTH 108", "MATH 122"];

/*
/ This function resets the variables and arrays associated with the student's class list
/ It also marks the requirements as incomplete
/
*/
function clearCourses() {
  //Resets the classes that can be fulfilled by multiple classes
  CheckSocialScience = 0;
  CheckEthics = 0;
  CheckRtc2 = 0;
  CheckRtc3 = 0;
  CheckElsj = 0;
  CheckDiversity = 0;
  CheckCi3 = 0;
  CheckAmth108 = 0;
  CheckMath53 = 0;
  CheckAmth106 = 0;
  CheckChem11 = 0;
  doubledip = 0;

  //Sets the indicator box to a incomplete
  var x = document.getElementsByName("requirement");
  var arrayLength = x.length;
  for (var i = 0; i < arrayLength; i++) {
    x[i].innerHTML = "NO!";
    x[i].style.backgroundColor = "rgb(242, 38, 19)";
  }

  //Deletes the electives table
  var t = electives.length;
  for (var j = 0; j < t; j++) {
    document.getElementById("electiveRow").deleteCell(0);
  }

  //Resets the course arrays
  electives = [];
  technicalElectives = [];
  courses = [];
  specialCases = [];

  //Populates the course with the new lists
  populate();
}

/*
/ This function adds a space between the course and course number if the user did not include one
*/
function addSpace(x) {
  //Records the length of the string
  var stringLength = x.length;
  var copy = [];

  //These cases do not need an added space
  if (stringLength <= 4) {
    return x;
  } else if (x.charAt(4) == " ") {
    return x;
  }

  //Adds a space to the user input
  else {
    for (var i = 0; i < stringLength; i++) {
      if (i == 4) {
        copy += " ";
      }
      copy += x.charAt(i);
    }
    return copy;
  }
}

/*
/ This function is called when the page is loaded and it fills in the table cells with their needed background colors
*/
function colorFill() {
  var x = document.getElementsByName("requirement");
  var arrayLength = x.length;
  document.getElementById("Double").style.backgroundColor = "rgb(82, 179, 217)";
  document.getElementById("Incomplete").style.backgroundColor =
    "rgb(242, 38, 19)";
  document.getElementById("Satisfied").style.backgroundColor =
    "rgb(46, 204, 113)";
  for (var i = 0; i < arrayLength; i++) {
    x[i].innerHTML = "NO!";
    x[i].style.backgroundColor = "rgb(242, 38, 19)";
  }
}

/*
/ removeThis() is called when the user presses Enter in the Remove Course box or presses the Remove Course button
/ It santizes the user input by adding a white space if needed and converts the characters to uppercase
/ It uses regex to determine if the user input was entered in the correct format
/ The function will splice out the specified class and repopulates the webpage with the updated class list
/ It will return "Cannot Remove" if the class was unable to be removed
*/
function removeThis() {
  var spaced = addSpace(document.getElementById("removeMe").value);
  var Sanitize2 = spaced;
  var upperCase = Sanitize2.toUpperCase();
  var re = /^[A-Z]{4}\s{1}[A-Z0-9]+/;
  if (re.test(upperCase) == 0) {
    alert("Not a Valid Input. Please follow this format: COEN 10");
    document.getElementById("removeMe").innerHTML = "";
    return;
  }

  var y = upperCase;
  var d = courses.indexOf(y);
  if (courses.indexOf(y) >= 0) {
    courses.splice(d, 1);
    populate();
    reset();
    populate();
  } else {
    alert("Cannot Remove");
  }
}

/*
/ addCourse() is called when the user presses Enter in the Add Course box or presses the Add Course button
/ It santizes the user input by adding a white space if needed and converts the characters to uppercase
/ It uses regex to determine if the user input was entered in the correct format
/ The function will push the specified class into the array and repopulates the webpage with the updated class list
*/
function addCourse() {
  var spaced = addSpace(document.getElementById("input").value);
  var Sanitize1 = spaced;
  var upperCase = Sanitize1.toUpperCase();
  var re = /^[A-Z]{4}\s{1}[A-Z0-9]+/;
  if (re.test(upperCase) == 0) {
    alert("Not a Valid Input. Please follow this format: COEN 10");
    document.getElementById("input").innerHTML = "";
    return;
  }

  if (courses.indexOf(upperCase) != -1) {
    alert("This Course has Already Been Entered");
    return;
  }
  courses.push(upperCase);
  populate();
}

/*
/ The reset() function is used to clear the webpage and restart from the beginning.
/ The variables to check for multi fulfilling classes are cleared.
/ It will then loop through the document and reset the requirements field back to incomplete.
/ Then the function clears the special cases and technical electives arrays
*/
function reset() {
  CheckSocialScience = 0;
  CheckEthics = 0;
  CheckRtc2 = 0;
  CheckRtc3 = 0;
  CheckElsj = 0;
  CheckDiversity = 0;
  CheckCi3 = 0;
  CheckAmth108 = 0;
  CheckMath53 = 0;
  CheckAmth106 = 0;
  CheckChem11 = 0;
  doubledip = 0;

  var x = document.getElementsByName("requirement");
  var arrayLength = x.length;
  for (var i = 0; i < arrayLength; i++) {
    x[i].innerHTML = "NO!";
    x[i].style.backgroundColor = "rgb(242, 38, 19)";
  }
  technicalElectives = [];
  specialCases = [];
}

/*
/ populate() will populate the entire online degree tracker with the user's classes
/ It resets the arrays used to store technical electives and special cases
/ It resets the variables used to check for multi fulfilling classes
/ populate() will clear the elective section of the webpage
/ Next it loops and generates the classes
/ It handles the special cases
/ Then creates a cookie based on the courses entered
*/
function populate() {
  technicalElectives = [];
  specialCases = [];
  CheckSocialScience = 0;
  CheckEthics = 0;
  CheckRtc2 = 0;
  CheckRtc3 = 0;
  CheckElsj = 0;
  CheckDiversity = 0;
  CheckCi3 = 0;
  CheckAmth108 = 0;
  CheckMath53 = 0;
  CheckAmth106 = 0;
  CheckChem11 = 0;
  doubledip = 0;
  var t = electives.length;
  for (var j = 0; j < t; j++) {
    document.getElementById("electiveRow").deleteCell(0);
  }
  electives = [];

  var arrayLength = courses.length;

  for (var i = 0; i < arrayLength; i++) {
    generate(courses[i]);
  }
  handleSpecialCases();
  createCookie("cookieCourse", courses, 365);
}
/*
/ handleSpecialCases() takes into the special cases involving specific requirements
/ This allows the program to give priority to classes that match their requirement name
*/
function handleSpecialCases() {
  var temp;
  if (specialCases.indexOf("AMTH 108") != -1) {
    document.getElementById("AMTH 108").innerHTML = "AMTH 108";
    document.getElementById("AMTH 108").style.backgroundColor =
      "rgb(46, 204, 113)";
    CheckAmth108 = 1;
  }
  if (specialCases.indexOf("AMTH 106") != -1) {
    document.getElementById("AMTH 106").innerHTML = "AMTH 106";
    document.getElementById("AMTH 106").style.backgroundColor =
      "rgb(46, 204, 113)";
    CheckAmth106 = 1;
  }
  if (specialCases.indexOf("MATH 53") != -1) {
    document.getElementById("MATH 53").innerHTML = "MATH 53";
    document.getElementById("MATH 53").style.backgroundColor =
      "rgb(46, 204, 113)";
    CheckMath53 = 1;
  }
  if (specialCases.indexOf("CHEM 11") != -1) {
    document.getElementById("CHEM 11").innerHTML = "CHEM 11";
    document.getElementById("CHEM 11").style.backgroundColor =
      "rgb(46, 204, 113)";
    CheckChem11 = 1;
  }

  for (var i = 0; i < specialCases.length; i++) {
    temp = specialCases[i];
    if (chem11.indexOf(temp) != -1 && CheckChem11 == 0) {
      document.getElementById("CHEM 11").innerHTML = temp;
      document.getElementById("CHEM 11").style.backgroundColor =
        "rgb(46, 204, 113)";
      CheckChem11 = 1;
    } else if (amth108.indexOf(temp) != -1 && CheckAmth108 == 0) {
      document.getElementById("AMTH 108").innerHTML = temp;
      document.getElementById("AMTH 108").style.backgroundColor =
        "rgb(46, 204, 113)";
      CheckAmth108 = 1;
    } else if (amth106.indexOf(temp) != -1 && CheckAmth106 == 0) {
      document.getElementById("AMTH 106").innerHTML = temp;
      document.getElementById("AMTH 106").style.backgroundColor =
        "rgb(46, 204, 113)";
      CheckAmth106 = 1;
    } else if (math53.indexOf(temp) != -1 && CheckMath53 == 0) {
      document.getElementById("MATH 53").innerHTML = temp;
      document.getElementById("MATH 53").style.backgroundColor =
        "rgb(46, 204, 113)";
      CheckMath53 = 1;
    } else if (
      temp == "CHEM 11" ||
      temp == "MATH 53" ||
      temp == "AMTH 106" ||
      temp == "AMTH 108"
    ) {
      continue;
    } else {
      fillTable(temp);
    }
  }
}

/* 
/ generate() compares its input with the list of requirements
/ If the input matches the requirement, it will light up in its corresponding way
/ Includes the use of booleans to check for double dips
/ If the elective boolean remains zero then the course will get passed to the elective table
*/
function generate(x) {
  var elective = 0;
  var ci3Double = 0;
  var diversityDouble = 0;
  var elsjDouble = 0;
  var rtc2Double = 0;
  var rtc3Double = 0;
  var ethicsDouble = 0;
  var socSciDouble = 0;

  //Major Requirements
  if (x == "ENGL 181") {
    document.getElementById("ENGL 181").innerHTML = "YES!";
    document.getElementById("ENGL 181").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "ENGR 1") {
    document.getElementById("ENGR 1").innerHTML = "YES!";
    document.getElementById("ENGR 1").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 10") {
    document.getElementById("COEN 10").innerHTML = "YES!";
    document.getElementById("COEN 10").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 11") {
    document.getElementById("COEN 11").innerHTML = "YES!";
    document.getElementById("COEN 11").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 12") {
    document.getElementById("COEN 12").innerHTML = "YES!";
    document.getElementById("COEN 12").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 19" || x == "MATH 51") {
    document.getElementById("COEN 19").innerHTML = "YES!";
    document.getElementById("COEN 19").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 20") {
    document.getElementById("COEN 20").innerHTML = "YES!";
    document.getElementById("COEN 20").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 21") {
    document.getElementById("COEN 21").innerHTML = "YES!";
    document.getElementById("COEN 21").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 70") {
    document.getElementById("COEN 70").innerHTML = "YES!";
    document.getElementById("COEN 70").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 122") {
    document.getElementById("COEN 122").innerHTML = "YES!";
    document.getElementById("COEN 122").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 146") {
    document.getElementById("COEN 146").innerHTML = "YES!";
    document.getElementById("COEN 146").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 171") {
    document.getElementById("COEN 171").innerHTML = "YES!";
    document.getElementById("COEN 171").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 174") {
    document.getElementById("COEN 174").innerHTML = "YES!";
    document.getElementById("COEN 174").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 175") {
    document.getElementById("COEN 175").innerHTML = "YES!";
    document.getElementById("COEN 175").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 177") {
    document.getElementById("COEN 177").innerHTML = "YES!";
    document.getElementById("COEN 177").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 179") {
    document.getElementById("COEN 179").innerHTML = "YES!";
    document.getElementById("COEN 179").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 194") {
    document.getElementById("COEN 194").innerHTML = "YES!";
    document.getElementById("COEN 194").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 195") {
    document.getElementById("COEN 195").innerHTML = "YES!";
    document.getElementById("COEN 195").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "COEN 196") {
    document.getElementById("COEN 196").innerHTML = "YES!";
    document.getElementById("COEN 196").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "MATH 11") {
    document.getElementById("MATH 11").innerHTML = "YES!";
    document.getElementById("MATH 11").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "MATH 12") {
    document.getElementById("MATH 12").innerHTML = "YES!";
    document.getElementById("MATH 12").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "MATH 13") {
    document.getElementById("MATH 13").innerHTML = "YES!";
    document.getElementById("MATH 13").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "MATH 14") {
    document.getElementById("MATH 14").innerHTML = "YES!";
    document.getElementById("MATH 14").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "PHYS 31") {
    document.getElementById("PHYS 31").innerHTML = "YES!";
    document.getElementById("PHYS 31").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "PHYS 32") {
    document.getElementById("PHYS 32").innerHTML = "YES!";
    document.getElementById("PHYS 32").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "PHYS 33") {
    document.getElementById("PHYS 33").innerHTML = "YES!";
    document.getElementById("PHYS 33").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "ELEN 50") {
    document.getElementById("ELEN 50").innerHTML = "YES!";
    document.getElementById("ELEN 50").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (x == "ELEN 153") {
    document.getElementById("ELEN 153").innerHTML = "YES!";
    document.getElementById("ELEN 153").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (rtc1.indexOf(x) != -1) {
    document.getElementById("RTC I").innerHTML = x;
    document.getElementById("RTC I").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (ctw1.indexOf(x) != -1) {
    document.getElementById("CTW I").innerHTML = x;
    document.getElementById("CTW I").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (ctw2.indexOf(x) != -1) {
    document.getElementById("CTW II").innerHTML = x;
    document.getElementById("CTW II").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (CI1.indexOf(x) != -1) {
    document.getElementById("CandI I").innerHTML = x;
    document.getElementById("CandI I").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  } else if (CI2.indexOf(x) != -1) {
    document.getElementById("CandI II").innerHTML = x;
    document.getElementById("CandI II").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
  }

  //Testing for double dips

  if (CI3.indexOf(x) != -1 && CheckCi3 == 0) {
    document.getElementById("CandI III").innerHTML = x;
    document.getElementById("CandI III").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
    CheckCi3 = 1;
    ci3Double = 1;
  }
  if (diversity.indexOf(x) != -1 && CheckDiversity == 0) {
    document.getElementById("DIVERSITY").innerHTML = x;
    document.getElementById("DIVERSITY").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
    CheckDiversity = 1;
    diversityDouble = 1;
  }
  if (elsj.indexOf(x) != -1 && CheckElsj == 0) {
    document.getElementById("ELSJ").innerHTML = x;
    document.getElementById("ELSJ").style.backgroundColor = "rgb(46, 204, 113)";
    elective = 1;
    CheckElsj = 1;
    elsjDouble = 1;
  }
  if (rtc2.indexOf(x) != -1 && CheckRtc2 == 0) {
    document.getElementById("RTC II").innerHTML = x;
    document.getElementById("RTC II").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
    CheckRtc2 = 1;
    rtc2Double = 1;
  }
  if (rtc3.indexOf(x) != -1 && CheckRtc3 == 0) {
    document.getElementById("RTC III").innerHTML = x;
    document.getElementById("RTC III").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
    CheckRtc3 = 1;
    rtc3Double = 1;
  }
  if (ethics.indexOf(x) != -1 && CheckEthics == 0) {
    document.getElementById("ETHICS").innerHTML = x;
    document.getElementById("ETHICS").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
    CheckEthics = 1;
    ethicsDouble = 1;
  }
  if (socialScience.indexOf(x) != -1 && CheckSocialScience == 0) {
    document.getElementById("SOC SCI").innerHTML = x;
    document.getElementById("SOC SCI").style.backgroundColor =
      "rgb(46, 204, 113)";
    elective = 1;
    CheckSocialScience = 1;
    socSciDouble = 1;
  }

  if (
    ci3Double +
      diversityDouble +
      elsjDouble +
      rtc2Double +
      rtc3Double +
      ethicsDouble +
      socSciDouble >=
    2
  ) {
    if (ci3Double == 1) {
      document.getElementById("CandI III").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
    if (diversityDouble == 1) {
      document.getElementById("DIVERSITY").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
    if (elsjDouble == 1) {
      document.getElementById("ELSJ").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
    if (rtc2Double == 1) {
      document.getElementById("RTC II").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
    if (rtc3Double == 1) {
      document.getElementById("RTC III").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
    if (ethicsDouble == 1) {
      document.getElementById("ETHICS").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
    if (socSciDouble == 1) {
      document.getElementById("SOC SCI").style.backgroundColor =
        "rgb(82, 179, 217)";
    }
  }

  //Checks the technical electives
  if (upperDiv.indexOf(x) != -1) {
    technicalElectives.push(x);
    var techLength = technicalElectives.length;
    elective = 1;
    if (techLength == 1) {
      document.getElementById("T.E. I").innerHTML = technicalElectives[0];
      document.getElementById("T.E. I").style.backgroundColor =
        "rgb(46, 204, 113)";
    } else if (techLength == 2) {
      document.getElementById("T.E. I").innerHTML = technicalElectives[0];
      document.getElementById("T.E. I").style.backgroundColor =
        "rgb(46, 204, 113)";
      document.getElementById("T.E. II").innerHTML = technicalElectives[1];
      document.getElementById("T.E. II").style.backgroundColor =
        "rgb(46, 204, 113)";
    } else if (techLength == 3) {
      document.getElementById("T.E. I").innerHTML = technicalElectives[0];
      document.getElementById("T.E. I").style.backgroundColor =
        "rgb(46, 204, 113)";
      document.getElementById("T.E. II").innerHTML = technicalElectives[1];
      document.getElementById("T.E. II").style.backgroundColor =
        "rgb(46, 204, 113)";
      document.getElementById("T.E. III").innerHTML = technicalElectives[2];
      document.getElementById("T.E. III").style.backgroundColor =
        "rgb(46, 204, 113)";
    } else {
      document.getElementById("T.E. I").innerHTML = technicalElectives[0];
      document.getElementById("T.E. I").style.backgroundColor =
        "rgb(46, 204, 113)";
      document.getElementById("T.E. II").innerHTML = technicalElectives[1];
      document.getElementById("T.E. II").style.backgroundColor =
        "rgb(46, 204, 113)";
      document.getElementById("T.E. III").innerHTML = technicalElectives[2];
      document.getElementById("T.E. III").style.backgroundColor =
        "rgb(46, 204, 113)";
      elective = 0;
    }
  }

  //Checks for special cases and then pushes the course to the specialCases array
  if (
    amth106.indexOf(x) != -1 ||
    chem11.indexOf(x) != -1 ||
    math53.indexOf(x) != -1 ||
    amth108.indexOf(x) != -1
  ) {
    specialCases.push(x);
    elective = 1;
  }

  //If input is an elective, add to elective table
  if (elective == 0) {
    fillTable(x);
  }
}

/*
/ Adds the input into the elective section
*/
function fillTable(x) {
  electives.push(x);
  var row = document.getElementById("electiveRow");
  var cell1 = row.insertCell(0);
  cell1.innerHTML = x;
  cell1.style.backgroundColor = "rgb(46, 204, 113)";
}

/*
/ createCookie() takes a name, value, and days to live
/ It will create a JSON string with the array entered
/ Then sets a expiration date
/ Formats the cookie with the information provided
*/
var createCookie = function (name, value, days) {
  var expires;
  var string = JSON.stringify(value);

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + string + ";" + expires + ";path=/";
};

//Checks if cookie exists
//Finds the start of the cookie
//If no error in start of cookie
//Skip the name section
//Limits to the "string" part of cookie
//Returns the string
function getCookie(name) {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + "=");
    if (start != -1) {
      start = start + name.length + 1;
      end = document.cookie.indexOf(";", start);
      if (end == -1) {
        end = document.cookie.length;
      }
      return unescape(document.cookie.substring(start, end));
    }
  }
  return "";
}

/*
/ Loads the Cookie and places into the array
/ If there is a cookie
/ Parses the cookie into the course list, resets the page, and repopulate the classes
*/
function loadCookieArray() {
  if (document.cookie.length > 0) {
    courses = JSON.parse(getCookie("cookieCourse"));
    reset();
    populate();
  }
  return "";
}

//Detects the enter key
function buttonPressAdd(e) {
  if (e.keyCode == 13) {
    addCourse();
  }
}
function buttonPressRemove(e) {
  if (e.keyCode == 13) {
    removeThis();
  }
}
