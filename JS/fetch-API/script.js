// API="use this api - https://jsonplaceholder.typicode.com/users"


function getuser(){
    fetch("use this api - https://jsonplaceholder.typicode.com/users")
    . then(Response => Response.json)
    . then(data => {t
        let  list = document.getElementById("userlist")
        list.innerHTML ="";
        data.forEach(user => {
            
            
        });
    })
}
