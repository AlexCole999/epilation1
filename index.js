const express = require('express');
const app = express();
const PORT = 80;

// GET-эндпоинт с try/catch
app.get('/api/click', (req, res) => {
  try {
    const queryData = req.query;
    console.log('GSM отправил:', queryData);
    console.log(req.query.count);

    res.status(200).json({
      received: queryData,
      status: 'success'
    });


  } catch (error) {
    console.error('Ошибка в обработчике /api/click:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
});

// Глобальный отлов ошибок сервера
app.use((err, req, res, next) => {
  console.error('Глобальная ошибка:', err.stack);
  res.status(500).send('Что-то пошло не так!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
