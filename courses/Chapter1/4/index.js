// IN NODE.JS
new Promise ((resolve, reject) => {
    let val = Math.random();
    if (val < 1) {
        resolve(val);
    } else {
        reject("ERROR 400");
    }
})
 .then((data) => {console.log(data)})
 .catch((err) => {
    console.log("Failed", err);
});

const testJson = require("./test.json");
new Promise ((resolve, reject) => {
    if (!!testJson) {
        resolve(testJson);
    } else {
        reject("JSON NOT FOUND")
    }
})
.then((data) => (data.blogs))
.then((blogs) => {blogs.map((blog) => {console.log(`${blog.id}: ${blog.title}`)})})
.catch((err) => {console.log(err)});
