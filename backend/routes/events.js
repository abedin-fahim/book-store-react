const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const router = express.Router();
const filePath = path.join(__dirname, '..', 'data', 'books.json');

router.get('/books', async (req, res) => {
  // const { max, search } = req.query;
  const booksFileContent = await fs.readFile(filePath);
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
      author: book.author,
      ISBN: book.ISBN,
      book_format: book.book_format,
      language: book.language,
      date_published: book.date_published,
      publisher: book.publisher,
      tags: book.tags,
      description: book.description,
      rating: book.rating,
      reviews: book.reviews,
      likes: book.likes,
      price: book.price,
      discount_price: book.discount_price,
      img_src: book.img_src,
    })),
  });
});
module.exports = router;
