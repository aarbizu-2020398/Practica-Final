
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';


import categoryRoutes from '../src/categories/category.routes.js';
import surveyRoutes from '../src/surveys/survey.routes.js';
import questionRoutes from '../src/questions/question.routes.js';
import answerRoutes from '../src/answers/answer.routes.js';


import metricsRoutes from '../src/metrics/metrics.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/encuestas')
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
    })
    .catch((err) => {
        console.error('Error conectando a la base de datos', err);
    });

// Rutas principales
app.use('/api/categories', categoryRoutes);
app.use('/api/surveys', surveyRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);


app.use('/api/metrics', metricsRoutes);

export default app;
