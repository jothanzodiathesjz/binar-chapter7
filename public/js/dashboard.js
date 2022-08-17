let dataUser = JSON.parse(getCookie('user'))
let token = dataUser.token
console.log(token)


function GetToken(){
fetch('http://localhost:8000/super-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then(function (response){
                return  response.json()
            }).then((result)=>{
              console.log(result)
              if(result.message == 'gagal'){return window.location.href = '/404'}
              alert(result.message)
            }).catch(console.error())
}

GetToken()



function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteUser(id){
    fetch(`http://localhost:8000/remove/${id}`).then(function (response){
                return  response.json()
            }).then((result)=>{
              console.log(result)
              alert(result.message)
              window.location.reload()
            }).catch(console.error())
}

