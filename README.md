This is the backend file. 
1) Created a Database in Postgresql:
So first what I've done is created a new database in Postresql named medicine_search.
Created an table with columns id and name where I have given 50 medicines names.
CREATE TABLE medicines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO medicines (name) VALUES 
('Paracetamol'), ('Crocin'), ('Amoxicillin'), ('Aspirin'), ('Lisinopril'), etc.

2) Now for the backend implementation using Node.js + Express:
In this step, it includes initializing the node.js project and installing the required pakages like
npm install express pg cors dotenv

3) Created a .env file which include the database credentials:
The reason why I've created it is because it keeps the important or sensitive data out of the code.
Later it can be loaded from .env files to process.env.

4) Here in db.js, this code sets up a PostgreSQL connection pool using the pg library.
Pool reuses connections to avoid overhead per query.
Securely loads database credentials from .env file using dotenv.
module.exports exposes a query method to run SQL commands anywhere else in your app.

5) Now in the server.js file, first we are importing the dependecies.
Cors is used as it allows requests from frontend apps. Mainly allows front-end and backend communications from different domains.
db is the module that contains PostgreSQL connection logic
Now for the medicine search endpoint, query accepts search via URL (e.g., /api/medicines?search=asp)
Returns HTTP 400 if search is missing. $1 indicates that the first parameter will be used in place of the placeholder.
When front end requests fetch('http://localhost:3001/api/medicines?search=asp'), the backend responds in json format. 
[
{"id": 1, "name": "Aspirin"},
{"id": 2, "name": "Aspercreme" }

]
6) Then Run the backend server i.e in new command line terminal "node sever.js"
