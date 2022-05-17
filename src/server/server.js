let express = require('express');
let app = express();

const PORT = 3001

app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})