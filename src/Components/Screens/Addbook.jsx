import React, { useState } from 'react';
import './Addbook.css'; // Import the external CSS file
import axios from 'axios';

function Addbook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [language, setLanguage] = useState('');
  const [publisher, setPublisher] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageURL, setCoverImageURL] = useState('');
  const [price, setPrice] = useState(0);

  async function addBook ()  {
    const newBook = {
      title,
      author,
      ISBN,
      genre,
      publicationDate,
      language,
      publisher,
      description,
      coverImageURL,
      price,
    };

    console.log(newBook);

    // You should make an API call to store the book data
    // For example:
    
    try {
        const response = await axios.post('http://localhost:3005/api/books/addbook', newBook);      
          console.log(response.data);
        // Handle success if needed
      } catch (error) {
        console.error(error);
        // Handle error if needed
      }

    // Placeholder for demonstration purposes
    
  };

  return (
    <div className="form-container">
      <div className="column">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ISBN">ISBN:</label>
          <input
            type="text"
            className="input-field"
            placeholder="ISBN"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Publication Date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
      </div>
      <div className="column">
        <div>
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="coverImageURL">Cover Image URL:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Cover Image URL"
            value={coverImageURL}
            onChange={(e) => setCoverImageURL(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <button className="button" onClick={addBook}>
          Add Book
        </button>
      </div>
    </div>
  );
}

export default Addbook;