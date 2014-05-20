var target = document.querySelector('#form-target');
var url = target.attr('data-url');

var req = new XMLHttpRequest();
req.open('GET', url, true);
req.onreadystatechange = function () {
    if (req.readyState !== 4) return;
    if (req.status >= 400) {
        console.error(req.responseText);
        return;
    }
    target.innerHTML = req.responseText;
};
req.end();
