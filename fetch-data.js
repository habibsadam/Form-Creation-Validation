

async function fetchUserData(){
    const apiUrl = fetch('https://jsonplaceholder.typicode.com/users') 
    const dataContainer = document.getElementById("api-data") 
   

    dataContainer.innerHTML='';
    try{
        const response = await apiUrl 
        const users = await response.json() 
        const userList = document.createElement('ul'); 
        users.forEach(user => { 
            const listItem = document.createElement('li');  
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        }); 
       
        dataContainer.appendChild(userList);
    } 
    catch(error){ 
        dataContainer.innerHTML='';
        dataContainer.textContent = "Failed to load user data"
    }
} 
document.addEventListener('DOMContentLoaded', fetchUserData);
