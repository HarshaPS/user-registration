let app = require("./server");

const PORT = 4000;

app.listen(PORT, () => {
    console.log('Server is running on Port:', PORT);
});