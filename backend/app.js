const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  next();
});

app.get('/books', async (req, res) => {
  // const { max, search } = req.query;
  const booksFileContent = await fs.readFile('./data/books.json');
  let books = JSON.parse(booksFileContent);

  // if (search) {
  //   books = books.filter((book) => {
  //     const searchableText = `${book.title} ${book.description} ${book.location}`;
  //     return searchableText.toLowerCase().includes(search.toLowerCase());
  //   });
  // }

  // if (max) {
  //   books = books.slice(books.length - max, books.length);
  // }

  res.json({
    books: books.map((book) => ({
      id: book.id,
      title: book.title,
      image: book.image,
      date: book.date,
      location: book.location,
    })),
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3000');
});
