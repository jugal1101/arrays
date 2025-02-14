let form=document.getElementById("form");
let todoarray=[];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let taskvalue=document.getElementById("task").value
    let priorityvalue=document.getElementById("priority").value
     
    let todoobject={
        taskname:taskvalue,
        priority:priorityvalue
    }
    todoarray.push(todoobject);
    console.log(todoarray)

});


