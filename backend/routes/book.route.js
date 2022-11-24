let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Libro
let bookSchema = require("../models/Book");
// CREAR Libro
router.route("/create-book").post((req, res, next) => {
  bookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Libro
router.route("/").get((req, res, next) => {
  bookSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Libro
router.route("/edit-book/:id").get((req, res, next) => {
  bookSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Libro
router.route("/update-book/:id").put((req, res, next) => {
  bookSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Book updated successfully !");
      }
    }
  );
});

// BORRAR Libro
router.route("/delete-book/:id").delete((req, res, next) => {
  bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
