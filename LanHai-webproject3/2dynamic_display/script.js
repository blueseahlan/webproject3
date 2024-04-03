document.addEventListener("DOMContentLoaded", function() {
  fetch('/getUsers')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          displayUsers(data);
      })
      .catch(error => {
          console.error('There was a problem fetching users:', error.message);
      });
});

function displayUsers(users) {
  var userList = document.getElementById("userList");
  userList.innerHTML = ''; 

  users.forEach(user => {
      var listItem = document.createElement("li");
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
  });
}