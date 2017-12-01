const fetchElement = document.getElementById("fetch");

fetch("https://httpbin.org/get")
    .then((res) => (res.json()))
    .then((data) => {
        fetchElement.innerHTML = `origin: ${data.origin}, UserAgent: ${data.headers["User-Agent"]}`;
    })
    .catch((err) => {throw err});

