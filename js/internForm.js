/*	InternForm.js
 *		Handles the functionality of the internship signup form
*/

$(document).ready(function() {

	$('#internForm').submit(function() {
      console.log("Submitted");
      $(".submit-button").attr("value","Submitting...");
      return false;
   });
});

