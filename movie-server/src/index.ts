import dotenv from 'dotenv'
import express, {Request, Response} from 'express'
import path from 'path'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const API_KEY = process.env.OMDB_API_KEY

const OMDB_API = ('https://www.omdbapi.com/')

if (!API_KEY){
    throw new Error('API Key is not set');
}

const buildPath = path.join(__dirname, '..','..', 'movie-search', 'dist');
app.use(express.static(buildPath));

//todo add api calls
app.get('/api/search', async (req: Request, res: Response)=>{
    res.json('test')
});

app.listen(PORT, ()=>{
    console.log(`OMDb Server is running at http://localhost:${PORT}`)
});