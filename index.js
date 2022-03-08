const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// Inventory Routes

// Create an Inventory item

app.post("/inventory", async(req, res) => {
    try {
        const { name, stock, price } = req.body
        const newInventory = await pool.query('INSERT INTO inventory (name, stock, price) VALUES ($1, $2, $3) RETURNING *', [name, stock, price]);
        res.json(newInventory.rows[0])
    } catch (error) {
        console.error(error);
    }
})

// get all Inventory Items

app.get('/inventory', async(req, res) => {
    try {
        const allInventory = await pool.query('SELECT * FROM inventory');
        res.json(allInventory.rows); 
    } catch (error) {
        console.error(error)
    }
})

// get a single Inventory item

// Update a single Inventroy item

// Delete a single Inventory item



// Jobs Routes

// Create a Job

// Get all Jobs

// Get a Job

// Update a Job

// Delete a Job

app.listen(2000, () => {
    console.log('server has started on port 2000');
});