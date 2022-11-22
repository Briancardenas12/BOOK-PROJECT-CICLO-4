import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateStudent extends Component {
  render() {
    return (
      <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Titulo del Libro</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Autor del Libro</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Editorial</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="Date" className="mt-3">
            <Form.Label>Año de Publicación</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="fromFile" className="mt-3">
            <Form.Label>Imagen del Libro</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button
            variant="primary"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Libro
          </Button>
        </Form>
      </div>
    );
  }
}
