const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

const mongodbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

app.get('/authors', async (req, res) => {
    let client;
    let db;
    try {
        client = await MongoClient.connect(mongodbURI);
        db = client.db();
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error al conectar a MongoDB Atlas: (${error.code}) ${error.errmsg}`)
    }

    try {
        const authors = await db.collection('authors').find().toArray();
        client.close();
        res.status(200).send(authors);
    } catch (error) {
        res.status(409).send(`Error al consultar datos a MongoDB Atlas`)
    }
});

app.get('/authors/:id', async (req, res) => {
    let client;
    let db;
    try {
        client = await MongoClient.connect(mongodbURI);
        db = client.db();
    } catch (error) {
        res.status(500).send(`Error al conectar a MongoDB Atlas: (${error.code}) ${error.errmsg}`)
    }

    try {
        const author = await db.collection('authors').findOne({ _id: new ObjectId(req.params.id)});
        client.close();
        if (author) {
            res.status(200).send(author);
        } else {
            res.status(404).send({ code: 404, message: 'Not Found' });
        }
    } catch (error) {
        res.status(409).send(`Error al consultar datos a MongoDB Atlas`)
    }
});

app.post('/authors', async (req, res) => {
    let client;
    let db;
    try {
        client = await MongoClient.connect(mongodbURI);
        db = client.db();
    } catch (error) {
        res.status(500).send(`Error al conectar a MongoDB Atlas: (${error.code}) ${error.errmsg}`)
    }

    const newAuthor = req.body;
    if (!newAuthor.name) {
        res.status(400).send({ code: 400, message: 'name requerido' });
        return;
    }
    
    try {
        await db.collection('authors').insertOne(newAuthor);
        client.close();
        res.status(201).send(newAuthor);
    } catch (error) {
        res.status(409).send(`Error al crear author en MongoDB Atlas`);
    }
});

app.patch('/authors/:id', async (req, res) => {
    let client;
    let db;
    try {
        client = await MongoClient.connect(mongodbURI);
        db = client.db();
    } catch (error) {
        res.status(500).send(`Error al conectar a MongoDB Atlas: (${error.code}) ${error.errmsg}`)
    }

    let author;
    try {
        author = await db.collection('authors').findOne({ _id: new ObjectId(req.params.id)});
        if (!author) {
            client.close();
            res.status(404).send({ code: 404, message: 'Not Found' });
            return;
        }
    } catch (error) {
        res.status(409).send(`Error al consultar datos a MongoDB Atlas`)
    }

    // const { name, nationality, phone } = req.body;
    const patchAuthor = { ...author, ...req.body };
    try {
        await db.collection('authors').updateOne({ _id: new ObjectId(req.params.id)}, { $set: patchAuthor });
        client.close();
        res.status(200).send(patchAuthor);
    } catch (error) {
        res.status(409).send(`Error al actualizar author en MongoDB Atlas`);
    }
});

app.delete('/authors/:id', async (req, res) => {
    let client;
    let db;
    try {
        client = await MongoClient.connect(mongodbURI);
        db = client.db();
    } catch (error) {
        res.status(500).send(`Error al conectar a MongoDB Atlas: (${error.code}) ${error.errmsg}`)
    }

    let author;
    try {
        author = await db.collection('authors').findOne({ _id: new ObjectId(req.params.id)});
        if (!author) {
            client.close();
            res.status(404).send({ code: 404, message: 'Not Found' });
            return;
        }
    } catch (error) {
        res.status(409).send(`Error al consultar datos a MongoDB Atlas`)
    }

    try {
        await db.collection('authors').deleteOne({ _id: new ObjectId(req.params.id)});
    } catch (error) {
        res.status(409).send(`Error al eliminar author en MongoDB Atlas`);
    }

    client.close();
    res.status(204).send();
});