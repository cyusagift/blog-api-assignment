const app = require('./app');
const config = require('config');

const PORT = config.get('port') || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});