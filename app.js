var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && this.status == 200) {
    (xhr.responseText);
  }
};
xhr.send();