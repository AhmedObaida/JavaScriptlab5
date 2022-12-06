

var userName = document.getElementById("username");
var password = document.getElementById("pass");
var btn = document.getElementById("btn");

var myList ;
function addToLocalStorage()
{
    myList= [];
    myList.push(
        {
        Name:userName.value  , 
        pass:password.value    
        }
        ) 
    localStorage.setItem("list",JSON.stringify(myList));
   
}




// localStorage.setItem("arr",x);

// localStorage.removeItem("name")
// function handelr()
// {
//     if(apiUser.readyState==4&&apiUser.status==200)
//     {
//      var users=JSON.parse(apiUser.responseText).users

//      localStorage.setItem("userData",JSON.stringify(users))
//      for(var i=0;i<users.length;i++)
//      {
//        var div=document.createElement("div");
//        div.innerHTML=`<span>${users[i].firstName}</span>
//        <span >${users[i].gender}</span>
//        <span>${users[i].age}</span>`
//        document.body.appendChild(div)
//      }
//     }
// }
