document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});
