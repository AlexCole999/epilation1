const express = require('express');
const app = express();
const PORT = 3000;

// GET-эндпоинт
app.get('/api/click', (req, res) => {
  const queryData = req.query;
  console.log('GSM отправил:', queryData);

  res.json({
    received: queryData,
    status: 'success'
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
