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

app.get('/inventory/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const inventory = await pool.query('SELECT * FROM inventory WHERE inventory_id = $1', [id])
        res.json(inventory.rows[0])
    } catch (error) {
       console.error(error) 
    }
})

// Update a single Inventroy item

app.put('/inventory/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { name, stock, price } = req.body;
        const updateInventory = await pool.query('UPDATE inventory SET name= $1, stock= $2, price= $3 WHERE inventory_id= $4', [name, stock, price, id])
        res.json('inventory was updated')
    } catch (error) {
        console.error(error)
    }
})

// Delete a single Inventory item

app.delete('/inventory/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteInventory = await pool.query("DELETE FROM inventory WHERE inventory_id= $1", [id])
        res.json("inventory item was deleted")
    } catch (error) {
        console.error(error)
    }
})



// Jobs Routes

// Create a Job

app.post('/jobs', async(req, res) => {
    try {
        const { customer, phone, job_description } = req.body
        const newJob = await pool.query('INSERT INTO jobs (customer, phone, job_description) VALUES ($1, $2, $3) RETURNING *', [customer, phone, job_description]);
        res.json(newJob.rows[0])
    } catch (error) {
        console.error(error);
    }
})

// Get all Jobs

app.get('/jobs', async(req, res) => {
    try {
        const allJobs = await pool.query('SELECT * FROM jobs');
        res.json(allJobs.rows);
    } catch (error) {
        console.error(error);
    }
})

// Get a Job

app.get('/jobs/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const jobs = await pool.query('SELECT * FROM jobs WHERE job_id = $1', [id]);
        res.json(jobs.rows[0])
    } catch (error) {
        console.error(error);
    }
})

// Update a Job

app.put('/jobs/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { customer, phone, job_description } = req.body;
        const updateJob = await pool.query('UPDATE jobs SET customer=$1, phone=$2, job_description=$3 WHERE job_id=$4', [customer, phone, job_description, id]);
        res.json('jobs were updated')
    } catch (error) {
        console.error(error);
    }
})

// Delete a Job

app.delete('/jobs/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteJob = await pool.query('DELETE FROM jobs WHERE job_id = $1', [id]);
        res.json('Job was deleted')
    } catch (error) {
        console.error(error);
    }
})



app.listen(2000, () => {
    console.log('server has started on port 2000');
});