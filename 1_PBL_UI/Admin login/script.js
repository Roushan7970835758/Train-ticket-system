
function showHome() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('register-train').style.display = 'none';
  document.getElementById('profile').style.display = 'none';
}

function showRegisterTrain() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('register-train').style.display = 'block';
  document.getElementById('profile').style.display = 'none';
}

function showProfile() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('register-train').style.display = 'none';
  document.getElementById('profile').style.display = 'block';
}

function registerTrain() {
  // Implement registration logic here
  alert('Train registered successfully!');
}

function updateProfile() {
  // Implement profile update logic here
  alert('Profile updated successfully!');
}

function deleteProfile() {
  // Implement profile deletion logic here
  alert('Profile deleted successfully!');
}

function logout() {
  // Implement logout logic here
  alert('Logged out successfully! Redirecting to login page.');

  window.location.href = '../Registration Page/login/index.html';
  // Redirect to login page (you need to implement this part)
}



// Sample data for demonstration
const ticketData = [
{ class: 'First Class', booked: 50 },
{ class: 'Second Class', booked: 80 },
];

const salesData = [
{ quarter: 'Q1', sales: 2000 },
{ quarter: 'Q2', sales: 3500 },
];

// Function to populate the aggregate table
function populateAggregateTable() {
const ticketTable = document.getElementById('ticket-table');
const salesTable = document.getElementById('sales-table');

// Clear existing rows
ticketTable.innerHTML = '';
salesTable.innerHTML = '';

// Add rows for Number of tickets booked per class
ticketData.forEach((data) => {
  const row = ticketTable.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = data.class;
  cell2.textContent = data.booked;
});

// Add rows for Sales done per quarter
salesData.forEach((data) => {
  const row = salesTable.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = data.quarter;
  cell2.textContent = data.sales;
});
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateAggregateTable);



// Sample data for demonstration
const customerData = [
{ id: 1, name: 'John Doe', mobile: '123-456-7890', ticketsBooked: 3 },
{ id: 2, name: 'Jane Doe', mobile: '987-654-3210', ticketsBooked: 5 },
];

// Function to populate the customer table
function populateCustomerTable() {
const customerTable = document.getElementById('customer-table');

// Clear existing rows
customerTable.innerHTML = '';

// Add rows for customer data
customerData.forEach((data) => {
  const row = customerTable.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.textContent = data.id;
  cell2.textContent = data.name;
  cell3.textContent = data.mobile;
  cell4.textContent = data.ticketsBooked;

  // Add a delete button with an event listener
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => deleteCustomer(data.id));
  cell5.appendChild(deleteButton);
});
}

// Function to delete a customer (sample function, replace with your logic)
function deleteCustomer(customerId) {
// Implement your deletion logic here
alert(`Customer with ID ${customerId} deleted.`);
// Refresh the table after deletion
populateCustomerTable();
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateCustomerTable);
