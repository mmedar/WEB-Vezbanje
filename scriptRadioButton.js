$(document).ready(function () {
    var filter = 0;
    var fromTodoId = parseInt($("#fromTodoId").val());
    var toTodoId = parseInt($("#toTodoId").val());
    RetreiveData(filter, fromTodoId, toTodoId);

    $("#showTodosInRange").click(function () {
        var filter = 0;
        var fromTodoId = parseInt($("#fromTodoId").val());
        var toTodoId = parseInt($("#toTodoId").val());
        RetreiveData(filter, fromTodoId, toTodoId);
    });

    $("#showCompleted").click(function () {
        var filter = 1;
        var fromTodoId = parseInt($("#fromTodoId").val());
        var toTodoId = parseInt($("#toTodoId").val());
        RetreiveData(filter, fromTodoId, toTodoId);
    });

    $("#showNotCompleted").click(function () {
        var filter = 3;
        var fromTodoId = parseInt($("#fromTodoId").val());
        var toTodoId = parseInt($("#toTodoId").val());
        RetreiveData(filter, fromTodoId, toTodoId);
    });

    $("#showAll").click(function () {
        var filter = 0;
        var fromTodoId = parseInt($("#fromTodoId").val());
        var toTodoId = parseInt($("#toTodoId").val());
        RetreiveData(filter, fromTodoId, toTodoId);
    });
});



function RetreiveData(filter, fromTodoId, toTodoId) {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((myJson) => {
            var tableData = "";
            var todoTable = document.getElementById("todoTable");
            $.each(myJson, function (index, todoItem) {
                if ((todoItem.id >= fromTodoId) && (todoItem.id <= toTodoId)) {
                    if (filter == 0) {
                        tableData += `<div class="col col-sm-6 col-sm-4 col-lg-4">
                           <div class="card border-${todoColor(todoItem.completed)} mb-3">
                           <div class="card-header">
                           <h3 class="card-title">UserId:${todoItem.userId}</h3></div>
                           <div class="card-body text-${todoColor(todoItem.completed)}">
                           <h5>Id:${todoItem.id} </h5>
                           <p class="card-text">${todoItem.title} </p></div>
                           <div class="card-footer">
                           <div class="text-center"><a href="#" class="btn btn-${todoItemCompleted(todoItem.completed)} </a></div>
                           </div>
                           </div></div>`
                    }
                    if ((filter == 1) && (todoItem.completed == true)) {
                        tableData += `<div class="col col-sm-6 col-sm-4 col-lg-4">
                           <div class="card border-${todoColor(todoItem.completed)} mb-3">
                           <div class="card-header">
                           <h3 class="card-title">UserId:${todoItem.userId}</h3></div>
                           <div class="card-body text-${todoColor(todoItem.completed)} ">
                           <h5>Id:${todoItem.id} </h5>
                           <p class="card-text">${todoItem.title} </p></div>
                           <div class="card-footer">
                           <div class="text-center"><a href="#" class="btn btn-${todoItemCompleted(todoItem.completed)} </a></div>
                           </div>
                           </div></div>`
                    }
                    if ((filter == 3 && todoItem.completed == false)) {
                        tableData += `<div class="col col-sm-6 col-sm-4 col-lg-4">
                           <div class="card border-${todoColor(todoItem.completed)} mb-3">
                           <div class="card-header">
                           <h3 class="card-title">UserId:${todoItem.userId}</h3></div>
                           <div class="card-body text-${todoColor(todoItem.completed)}">
                           <h5>Id:  todoItem.id </h5>
                           <p class="card-text">${todoItem.title}</p></div>
                           <div class="card-footer">
                           <div class="text-center"><a href="#" class="btn btn-${todoItemCompleted(todoItem.completed)} </a></div>
                           </div>
                           </div></div>`
                    }
                }
            });
            todoTable.innerHTML = tableData;
        });
}

function todoItemCompleted(completed) {
    return completed == true ? 'success">Completed' : 'danger">Not Completed';
}
function todoColor(completed) {
    return completed == true ? 'success' : 'danger';
}