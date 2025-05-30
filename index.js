// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Миддлвар для парсинга JSON-тела
app.use(express.json());

// POST-эндпоинт
app.post('/api/click', (req, res) => {
  const requestBody = req.body;

  res.json({
    received: requestBody,
    status: 'success'
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
