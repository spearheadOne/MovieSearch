import dotenv from 'dotenv'
import express, {Request, Response} from 'express'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const API_KEY = process.env.OMDB_API_KEY

const OMDB_API = ('https://www.omdbapi.com/')

if (!API_KEY){
    throw new Error('API Key is not set');
}


//todo add api calls
app.get('/api/search', async (req: Request, res: Response)=>{
    res.json('test')
});


app.listen(PORT, ()=>{
    console.log(`OMDb Proxy is running at http://localhost:${PORT}`)
})