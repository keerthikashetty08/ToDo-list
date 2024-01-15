document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task ")
    }
    else{
        document.querySelector('#tasks').innerHTML+= `
        <div class="tasks">
        <span class="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>    
    `;

    var current_task = document.querySelectorAll(".delete");
    for(var i=0;i<current_task.length;i++)
    {
        current_task[i].onclick= function()
        {
            this.parentNode.remove();
        }
    }

    var tasks= document.querySelectorAll(".tasks");
    for(i=0;i<tasks.length;i++)
    {
        tasks[i].onclick=function()
        {
            {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value=""
    }
    }
}