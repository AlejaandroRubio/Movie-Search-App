import { Router } from "express";
import { getMoviesByTitle, getMoviesByIMDBId } from "../services/omdService";

const router = Router();

//#region  Search by title
// Title: Oppenheimer
router.get('/seach-by-title', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).send('Query is required');
    }

    try {
        const movies = await getMoviesByTitle(query.toString());
        res.send(movies);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});
//#endregion

//#region Search by IMDB ID
// ID: 1262426 Movie: Wicked

router.get('/search-by-imdb-id', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).send('Query is required');
    }

    try {
        const movies = await getMoviesByIMDBId(query.toString());
        res.send(movies);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

//#endregion 

export default router;