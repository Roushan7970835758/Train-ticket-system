function submitBooking() {
    // Perform booking submission logic
    // Populate confirmation details in the confirmation box
    document.getElementById("bookingID").innerText = "12345"; // Replace with actual booking ID
    document.getElementById("boardingStation").innerText = "Station A"; // Replace with actual station
    document.getElementById("destinationStation").innerText = "Station B"; // Replace with actual station
    document.getElementById("pnrNumber").innerText = "124678964715"; // pnr no. constant
  
    document.getElementById("bookingConfirmationBox").style.display = "block";
  }
  
  function cancelTicket() {
    // Display cancellation confirmation box
    document.getElementById("cancellationConfirmationBox").style.display =
      "block";
  }
  
  function confirmCancellation() {
    // Perform cancellation logic
    // Close the cancellation confirmation box
    document.getElementById("cancellationConfirmationBox").style.display = "none";
  }
  
  function cancelCancellation() {
    // Close the cancellation confirmation box without performing cancellation
    document.getElementById("cancellationConfirmationBox").style.display = "none";
  }
  
  function togglePasswordFields() {
    // Toggle display of password fields based on checkbox state
    var passwordFields = document.getElementById("passwordFields");
    passwordFields.style.display = document.getElementById(
      "updatePasswordCheckbox"
    ).checked
      ? "block"
      : "none";
  }
  
  function updateDetails() {
    // Perform details update logic
    alert("Details updated successfully!"); // Replace with actual logic
  }
  
  function logout() {
    // Perform logout logic
    alert("Logged out successfully!"); // Replace with actual logic
    // Redirect to login page
    window.location.href = "../Registration Page/login/index.html"; // Replace with actual login page URL
  }
  