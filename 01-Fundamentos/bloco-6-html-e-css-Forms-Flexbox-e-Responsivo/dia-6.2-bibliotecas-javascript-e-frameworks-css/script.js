const btnMaisInfo = document.getElementById("mais-info");

let myModal = new bootstrap.Modal(document.getElementById('myModal'));

btnMaisInfo.addEventListener('click', function(event) {
    event.preventDefault();
    myModal.show()
})