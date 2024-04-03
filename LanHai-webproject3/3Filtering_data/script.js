document.addEventListener("DOMContentLoaded", function() {
  var filterInput = document.getElementById("filter");
  filterInput.addEventListener("input", applyFilter);

  fetchUsers();
});

function fetchUsers() {
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
}

function displayUsers(users) {
  var userList = document.getElementById("userList");
  userList.innerHTML = ''; 

  users.forEach(user => {
      var listItem = document.createElement("li");
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
  });
}

function applyFilter() {
  var filterValue = document.getElementById("filter").value.trim().toLowerCase();

  fetch(`/getFilteredUsers?filter=${filterValue}`)
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
          console.error('There was a problem fetching filtered users:', error.message);
      });
}