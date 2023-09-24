var xhr1 = new XMLHttpRequest(); 
    xhr1.onreadystatechange = function() { 
      if (xhr1.readyState == 4 && xhr1.status == 200) { 
        let data = JSON.parse(xhr1.responseText);
        console.log(data)
        document.getElementById("header_name").innerHTML = data.name + " " + data.surname; 
      } 
    }; 
    xhr1.open("GET", "http://localhost:8080/getname", true); 
    xhr1.send(); 

