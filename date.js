window.onload = function(){
  document.getElementById('start-date').innerHTML = "06/2023";    
  document.getElementById('end-date').innerHTML = "10/2023";
  //both dates contains month and year only as I want to fetch the 'day' from the HTML File.

  //I added the MMYY for buspass no, incase i need to use this file.
  document.getElementById('start-month').innerHTML = "0623";

  document.getElementById('pass-no').innerHTML = "7504";
  //pass no contains 10-digits, last 3 digits will be fetch from HTML file.
};

//I chose to select half part of these variables from the HTML, so the data will be totally different for all the users. 
