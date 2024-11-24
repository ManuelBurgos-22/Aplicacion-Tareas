const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// CRUD para la tabla 'Categorias'
app.get('/categorias', (req, res) => {
    db.query('SELECT * FROM categorias', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


app.post('/categorias', (req, res) => {
    const { inputNombre } = req.body;
    db.query('INSERT INTO categorias (nombre) VALUES (?)',
        [inputNombre],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.put('/categorias/:id', (req, res) => {
    const { inputNombre } = req.body;
    const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta

    db.query('UPDATE categorias SET nombre = ? where id = ?',
        [inputNombre, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.delete('/categorias/:id', (req, res) => {
    db.query('DELETE FROM categorias WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});


// CRUD para la tabla 'pedidos'
app.get('/pedidos', (req, res) => {
    db.query('SELECT * FROM pedidos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


app.post('/pedidos', (req, res) => {
    const { inputCliente, inputPedidos, inputTotal } = req.body;
    db.query('INSERT INTO pedidos (nomcliente, numpedidos, total) VALUES (?,?,?)',
        [inputCliente, inputPedidos, inputTotal],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.put('/pedidos/:id', (req, res) => {
    const { inputCliente, inputPedidos, inputTotal } = req.body; // Desestructuramos los datos del cuerpo
    const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta

    db.query('UPDATE pedidos SET nomcliente = ?, numpedidos = ?, total = ? WHERE id = ?',
        [inputCliente, inputPedidos, inputTotal, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.delete('/pedidos/:id', (req, res) => {
    db.query('DELETE FROM pedidos WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// CRUD para la tabla 'productos'
app.get('/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


app.post('/productos', (req, res) => {
    const { inputNombre, inputDescripcion, inputPrecio, inputCategoria } = req.body;
    db.query('INSERT INTO productos (nombre, descripcion, precio, categoria ) VALUES (?,?,?,?)',
        [inputNombre, inputDescripcion, inputPrecio, inputCategoria],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.put('/productos/:id', (req, res) => {
    const { inputNombre, inputDescripcion, inputPrecio, inputCategoria } = req.body; // Desestructuramos los datos del cuerpo
    const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta

    db.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria = ? WHERE id = ?',
        [inputNombre, inputDescripcion, inputPrecio, inputCategoria, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.delete('/productos/:id', (req, res) => {
    db.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});


// CRUD para la tabla 'reseñas'
app.get('/resenas', (req, res) => {
    db.query('SELECT * FROM reseñas', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


app.post('/resenas', (req, res) => {
    const { inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha } = req.body;
    db.query('INSERT INTO reseñas (producto, usuario, calificacion, comentario, fecha ) VALUES (?,?,?,?,?)',
        [inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.put('/resenas/:id', (req, res) => {
    const { inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha } = req.body; // Desestructuramos los datos del cuerpo
    const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta

    db.query('UPDATE reseñas SET producto = ?, usuario = ?, calificacion = ?, comentario = ?, fecha = ? WHERE id = ?',
        [ inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.delete('/resenas/:id', (req, res) => {
    db.query('DELETE FROM reseñas WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// CRUD para la tabla 'usuarios'
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


app.post('/usuarios', (req, res) => {
    const { inputNombre, inputCorreo, inputFecha } = req.body;
    db.query('INSERT INTO usuarios (nombre, correo, fecha) VALUES (?,?,?)',
        [inputNombre, inputCorreo, inputFecha ],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.put('/usuarios/:id', (req, res) => {
    const { inputNombre, inputCorreo, inputFecha } = req.body; // Desestructuramos los datos del cuerpo
    const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta

    db.query('UPDATE usuarios SET nombre = ?, correo = ?, fecha = ? WHERE id = ?',
        [inputNombre, inputCorreo, inputFecha, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});

app.delete('/usuarios/:id', (req, res) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Server running on port 3000');
});