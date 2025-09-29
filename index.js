import { config } from 'dotenv';
import app from './configs/server.js';

config();
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Servidor de encuestas escuchando en el puerto ${PORT}`);
});