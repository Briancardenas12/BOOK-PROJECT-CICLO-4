import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookEditorial = this.onChangeBookEditorial.bind(this);
    this.onChangeBookDate = this.onChangeBookDate.bind(this);
    this.oncChangeBookfromFile = this.oncChangeBookfromFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      author: "",
      editorial: "",
      date: "",
      file: "",
    };
  }

  onChangeBookTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeBookAuthor(e) {
    this.setState({ author: e.target.value });
  }

  onChangeBookEditorial(e) {
    this.setState({ editorial: e.target.value });
  }

  onChangeBookDate(e) {
    this.setState({ date: e.target.value });
  }

  oncChangeBookfromFile(e) {
    this.setState({ file: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const bookObject = {
      title: this.state.title,
      author: this.state.author,
      editorial: this.state.editorial,
      date: this.state.date,
      file: this.state.file,
    };
    axios
      .post("http://localhost:4000/books/create-book", bookObject)
      .then((res) => console.log(res.data));
    this.setState({ title: "", author: "", editorial: "", date: "", file: "" });
  }
  render() {
    return (
      <div class="form-wrapper" onSubmit={this.onSubmit}>
        <Form>
          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Titulo del Libro</Form.Label>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.onChangeBookTitle}
            />
          </Form.Group>

          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Autor del Libro</Form.Label>
            <Form.Control
              type="text"
              value={this.state.author}
              onChange={this.onChangeBookAuthor}
            />
          </Form.Group>

          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Editorial</Form.Label>
            <Form.Control
              type="text"
              value={this.state.editorial}
              onChange={this.onChangeBookEditorial}
            />
          </Form.Group>

          <Form.Group controlId="Date" className="mt-3">
            <Form.Label>Año de Publicación</Form.Label>
            <Form.Control
              type="date"
              value={this.state.date}
              onChange={this.onChangeBookDate}
            />
          </Form.Group>

          <Form.Group controlId="fromFile" className="mt-3">
            <Form.Label>Imagen del Libro</Form.Label>
            <Form.Control
              type="file"
              value={this.state.file}
              onChange={this.oncChangeBookfromFile}
            />
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
