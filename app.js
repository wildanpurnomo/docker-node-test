const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Bad luck");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});