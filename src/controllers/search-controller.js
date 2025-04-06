const { searchService } = require('../services');

const searchByName = async (req, res) => {
    try {
        const query = req.query.query;
        const results = await searchService.searchByName(query);
        res.status(200).json(results);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const searchByNumber = async (req, res) => {
    try {
        const query = req.query.query;
        const results = await searchService.searchByNumber(query);
        res.status(200).json(results);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    searchByName,
    searchByNumber
}
