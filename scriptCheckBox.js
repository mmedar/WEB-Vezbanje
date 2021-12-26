$(document).ready(function(){
    var completedChecked= document.getElementById('showCompleted');
    var notCompletedChecked = document.getElementById('showNotCompleted');
    var filter = 0;
    var fromTodoId = parseInt($('#fromTodoId').val());
    var toTodoId = parseInt($('#toTodoId').val());
    RetreiveData(filter, fromTodoId, toTodoId);
    
    $('#showTodosInRange').click(function(){
        var fromTodoId = parseInt($('#fromTodoId').val());
        var toTodoId = parseInt($('#toTodoId').val());
        RetreiveData(filter, fromTodoId, toTodoId);

    });
    $('showCompleted').click(function(){
        if(completedChecked.checked && notCompletedChecked.checked) {
            filter = 0;
        }else if (completedChecked.checked && !notCompletedChecked.checked) {
            filter = 1;
        }else if (!completedChecked.checked && !notCompletedChecked.checked) {
            filter = 2;
        }else {
            filter = 3;
        }

        var fromTodoId = parseInt($('#fromTodoId').val());
        var toTodoId = parseInt($('#toTodoId').val());
        RetreiveData(filter, fromTodoId, toTodoId);
    });
});
function RetreiveData(filter, fromTodoId, toTodoId) {
    fetch('ide link odakle se povezuje ili fajl')
        .then((response) => {
            return response.json
        }).then((myJson) => {
            var todoData = "";
            var todoCards = document.getElementById('todoCards');

            $.each(myJson, function (index, todoItem){
                if(filter == 0 &&  todoItem.id >= fromTodoId && todoItem.id <= toTodoId) {
                    todoData += createCardData(todoItem);
                }
                else if (filter == 1 && todoItem.completed == true && todoItem.id >= fromTodoId && todoItem.id <= toTodoId) {
                    todoData += createCardData(todoItem);
                }
                else if (filter == 2 && todoItem.completed == false && todoItem.id >= fromTodoId && todoItem.id <= toTodoId) {
                    todoData += createCardData(todoItem);
                }
                   
            });
            if(todoData == '') {
                todoData = '<h3 class="text danger">No data fulfils given criteria!</h3>'
            }
            todoCards.innerHTML = todoData;
        });
}
function createCardData(todoItem) {
    return `<div class="col col-sm-56 col-lg-5">
        <div class="card border-${todoColor(todoItem.completed)} mb-3">
            <div class="card-header">
                <h3 class="card-title">UserId: ${todoItem.userId}</h3>
            </div>
            <div class="card-body text-${todoColor(todoItem.completed)}">
                <h5 class="card-title">Id: ${todoItem.id}</h5>
                <p class="card-text">${todoItem.title}</p>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-${todoColor(todoItem.completed)}">${todoItemCompleted
                    (todoItem.completed)}</button>
                    </div>
                </div>
            </div>`
}
function todoItemCompleted(completed) {
    return completed == true ? 'Completed' : 'Not Completed';
}
function todoColor(completed) {
    return completed == true ? 'success' : 'danger';
}