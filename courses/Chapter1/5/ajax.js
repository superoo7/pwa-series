var ajax = document.getElementById("ajax");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhr.responseText);
        ajax.innerHTML = `origin: ${response.origin}, UserAgent: ${response.headers["User-Agent"]}`;
    }
}

xhr.open("GET", "https://httpbin.org/get", true);
xhr.send();