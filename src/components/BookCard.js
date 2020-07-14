import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookCard(props) {
  if (!props.data) {
    return <div>hehe</div>;
  }

  if (props.data) {
    return (
      <div class="cardItem">
        <Link to={`/books/${props.data.isbns[0].isbn13}`}>
          <img
            src={`http://covers.openlibrary.org/b/isbn/${props.data.isbns[0].isbn13}-M.jpg`}
          />
          <h5>{props.data.book_details[0].title}</h5>
          {/* <p>{props.data.volumeInfo.authors[0]}</p>
        <p>{props.data.volumeInfo.authors[1]}</p> */}
          {/* {props.data.volumeInfo.imageLinks.thumbnail} */}
        </Link>
      </div>
    );
  }
}
