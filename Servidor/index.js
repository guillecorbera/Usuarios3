const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Usuarios");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://guillecorbera:2RE2b0SPchHSUrsT@cluster0.hcxaf6m.mongodb.net/usuarios?retryWrites=true&w=majority");


app.get("/", (req, res) => {
  UsersModel.find({})
    .then((usuarios) => res.json(usuarios))
    .catch((err) => res.json(err));
});


app.get("/getUsuario/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
    UsersModel.findById({_id: id})
    .then((usuarios) => res.json(usuarios))
    .catch((err) => res.json(err));
});


app.post("/createUsuarios", (req, res) => {
  UsersModel.create(req.body)
    .then((usuarios) => res.json(usuarios))
    .catch((err) => res.json(err));
});

app.put("/editUsuarios/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    // Utiliza findOneAndUpdate con los parámetros de consulta y los datos de actualización en un solo objeto
    const updatedUser = await UsersModel.findOneAndUpdate({ _id: id }, {
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      street: req.body.street,
      city: req.body.city,
      picture: req.body.picture,
    });

    if (updatedUser) {
      res.json({ msg: "Usuario actualizado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en la actualización del usuario" });
  }
});



app.delete("/deleteUsuarios/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  UsersModel.findOneAndDelete({ _id:id })
    // await usuarios.usuarios.deleteOne({_id:id})
    .then((usuarios) => res.json({msg: "Eliminado"}))
    .catch((err) => res.json(err));
    // .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Conectado correctamente al servidor 3001");
});
