
CREATE DATABASE monkeywrench;


CREATE TABLE inventory(
    inventory_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    stock INTEGER NOT NULL,
    price DECIMAL
);

 CREATE TABLE jobs(
    job_id SERIAL PRIMARY KEY,
    customer VARCHAR(50),
    phone TEXT,
    job_description TEXT
);