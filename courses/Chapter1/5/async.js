const asyncElement = document.getElementById("async");

function getHttpBin() {
    // let result;
    return fetch("https://httpbin.org/get")
        .then((res) => (res.json()))
        .catch((err) => {throw err});
}

async function replaceElement() {
    const dataJson = await getHttpBin();
    console.log(dataJson);
    asyncElement.innerHTML = `origin: ${dataJson.origin}, UserAgent: ${dataJson.headers["User-Agent"]}`;

}

replaceElement();

// fetchElement.innerHTML = `origin: ${data.origin}, UserAgent: ${data.headers["User-Agent"]}`;
