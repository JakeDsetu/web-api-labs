import express from 'express';
import Movie from './movieModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

router.get('/user/:uid', async (req, res) => {
    const movies = await Movie.find({ userId: `${req.params.uid}`});
    res.status(200).json(movies);
});



// create a movie
router.post('/', asyncHandler(async (req, res) => {
    const movie = await Movie(req.body).save();
    res.status(201).json(movie);
}));

// Update Movie
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Movie.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Movie Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Movie' });
    }
});

// delete Movie
router.delete('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Movie.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Movie' });
    }
});


export default router;
