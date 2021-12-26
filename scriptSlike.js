$(document).ready(function () {

    var fromAlbumItem = parseInt($("#fromAlbumItem").val());
    var toAlbumItem = parseInt($("#toAlbumItem").val());

    RetreiveData(fromAlbumItem, toAlbumItem);

    $("#showAlbumInRange").click(function () {

        fromAlbumItem = parseInt($("#fromAlbumItem").val());
        toAlbumItem = parseInt($("#toAlbumItem").val());
        RetreiveData(fromAlbumItem, toAlbumItem);
    });
});


function RetreiveData(fromItem, toItem) {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((response) => {
            return response.json();
        })
        .then((albumItems) => {
            var tableData = "";
            var todoTable = document.getElementById("todoTable");
            $.each(myJson, function (index, todoItem) {
                tableData += `<div class="col col-sm-6 col-sm-4 col-lg-3">
                    <div class="card mb-3">
                    <a class="d-block w-100" href= ${todoItem.url}"><img src="${todoItem.thumbnailUrl}" class="card-img-top" alt="..."></a>
                    <div class="card-body">
                    <h3>Album Id:  ${todoItem.albumId} </h3>
                    <h5>Photo Id:  ${todoItem.id} </h5>
                    <p class="card-text"> ${todoItem.title} </p>
                    </div>
                    </div></div>`
            });
            todoTable.innerHTML = tableData;
        });
}