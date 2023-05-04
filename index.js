// This code is not necessary for the landing page to function, but it can be used to add some interactivity.

// When the page loads, add a listener to the "contact" section.
$("section#contact").on("click", function() {
    // Get the email address from the "contact" section.
    var email = $("p.email").text();
    // Open a new email message with the email address pre-filled.
    window.open("mailto:" + email);
  });