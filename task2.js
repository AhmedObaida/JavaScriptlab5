var productApi=new XMLHttpRequest();
productApi.open('GET',"https://dummyjson.com/todos");
productApi.send();
productApi.onreadystatechange=function()
{
    if(productApi.readyState==4&&productApi.status==200)
    {
        var todos=JSON.parse(productApi.responseText).todos
       for(var i=0;i<todos.length;i++)
       {
        if(todos[i].completed)
        {
            document.getElementById('list').innerHTML+=
            `
            <li>${todos[i].id} ${todos[i].todo}</li>
             `
        }

       }
    }
}