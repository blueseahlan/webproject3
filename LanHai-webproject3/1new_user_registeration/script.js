function submitForm() {
  var form = document.getElementById("userForm");
  var formData = new FormData(form);

  fetch('/addUser', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      displayMessage('User added successfully');
  })
  .catch(error => {
      displayMessage('There was a problem adding the user');
      console.error('There was a problem adding the user:', error.message);
  });
}

function displayMessage(message) {
  var messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}