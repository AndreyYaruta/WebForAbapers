function custom_popup() {
    var userid = prompt("Enter your user ID. Please be honest.");
    var transponent = "";
    var mixed_case = "";

    //  Check if input user ID string contains any digit
    if (parseInt(userid)) {
        // Go through input user ID symbol by symbol
        // User ID contains digits - transpose it
        for (i = 0; i < userid.length; ++i) {
            // Concatenate symbols in reverse direction
            transponent = userid[i] + transponent;
        }
        alert(transponent);
    } else {
        // Go through input user ID symbol by symbol
        // User ID doesn't contain digits - translate it to mixed case
        for (i = 0; i < userid.length; ++i) {
            if ((i % 2) == 0) {
                // Convert symbols with even positions ( 0 , 2 , etc. ) to upper case
                mixed_case = mixed_case + userid[i].toUpperCase();
            } else {
                // Convert symbols with odd positions ( 1 , 3 , etc. ) to lower case
                mixed_case = mixed_case + userid[i].toLowerCase();
            }
        }
        alert(mixed_case);
    } /* End of else for "if (parseInt(userid))"  */

} /* End of function */

function refresh_page() {
    location.reload(true);
}