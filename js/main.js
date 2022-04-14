function addTask(){
    var inputTask = document.getElementById("task").value;

    if(inputTask == ""){
        var divAlert = document.getElementById("alert");
        divAlert.className = "alert alert-danger alert-dismissible fade show";

        var pAlert = document.createElement("p");
        var pText = document.createTextNode("Task Input Can NOT be Empty!");
        pAlert.setAttribute("id", "palert");
        pAlert.appendChild(pText);
        
        var btnAlert = document.createElement("button");
        btnAlert.className = "btn-close";
        btnAlert.setAttribute("type", "button");
        btnAlert.setAttribute("data-bs-dismiss", "alert");
        btnAlert.setAttribute("aria-label", "Close");
        btnAlert.setAttribute("id", "btnalert");

        divAlert.appendChild(pAlert);
        divAlert.appendChild(btnAlert);

    }
    else
    {
        var divAlert = document.getElementById("alert");
        var pAlert = document.getElementById("palert");
        if(pAlert != null)
        {
            var btnAlert = document.getElementById("btnalert");

            divAlert.removeChild(pAlert);
            divAlert.removeChild(btnAlert);
            divAlert.classList.remove('alert');
        }

        document.getElementById("task").value = "";

        var tasks = document.getElementById("tasks");

        var pTask = document.createElement("p");
        var spanTask = document.createElement("span");
        var textTask = document.createTextNode(inputTask + "     ");
        spanTask.appendChild(textTask);
        pTask.appendChild(spanTask);
        tasks.appendChild(pTask);

        var btnRm = document.createElement("button");
        var textRm = document.createTextNode("Done");
        btnRm.className = "btn btn-outline-warning";
        btnRm.appendChild(textRm);

        pTask.appendChild(btnRm);

        btnRm.addEventListener("click", taskDone);

        function taskDone(){
            pTask.style.textDecoration = "line-through";
            pTask.className = "text-warning";
            btnRm.setAttribute("disabled", "desabled");
        }
    }
}

