// CREATED:10/09/2021
//ENDED: 

/** SET UP */
//require("dotenv").config();
const express = require("express");
const db = require("../db/db");
const app = express();
const cors = require("cors");

//middleware 
app.use(cors());
app.use(express.json());


//auth
const validInfo = require("/validInfo");

/*
app.use((req, res, next) => {
    next();
});

*/

//port 
//test if server is sucessfully running..check TERMINAL 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
});


/**ROUTES */

//CREATE a todo [WORKS]
//http://localhost:5000/todos/
app.post("/todos/", async(req, res) => {

    try{
        const todo = await db.query ("INSERT INTO \n" +
        "todos(todoid, description)" +
        "VALUES ($1,$2) RETURNING * ", [
        req.body.todoid,
        req.body.description,
        ]);

        
        res.json(todo);

    }catch(e){
        console.error(e)
    }
});

//RETRIEVE all todos [WORKS]
http://localhost:5000/todos/
app.get("/todos/", async ( req, res) => {

    try{
        const  result = await db.query("SELECT * FROM todos");

        console.log(result)
        res.json(result)

    }catch(e) {

    console.log(e)

    }
    
    });
    
    //retrieve a todo
    //http://localhost:5000/todos/1
    app.get("/todos/:id", async ( req, res) => {
    
    try{
    const result = await db.query(" select * from todos where todoid = $1", [req.params.id]);
    
    res.json(result)
    console.log(result)
    }catch(e) {
    
    console.errror(e)
    }
    
    })
    
    //update a todo [WORKING]
    //http://localhost:5000/todos/3
    app.put("/todos/:id", async ( req, res) => {
    
    try{
    const result = await db.query("UPDATE todos SET description =$1 WHERE todoid =$2 RETURNING *"
    ,[
        req.body.description, req.params.id
    ]);
    
    res.json(result);
    }catch(e) {
    
    console.log(e)
    }
    
    })
    
    // delete a todo [WORKING] --> NO BODY
    //http://localhost:5000/todos/3
app.delete("/todos/:id", async ( req, res) => {
    
    try{
    const result = await db.query(" delete from todos where todoid =$1",[req.params.id]);
    console.log(`Todo $1 was deleted.`)

    
    res.json(result);
    }catch(e) {
    
    console.errror(e);
    }
    
    });

    
/*
    app.delete("/todos/:id", async (req, res) => {

    try{
        const result = getIndexById(req.params.id, todos);
        if (result !== -1) {
          todos.splice(result, 1);
          res.status(204).send();
        } else {
          res.status(404).send();
        }

    }catch(e) {
    
        console.errror(e);
        }
    
      });

      */