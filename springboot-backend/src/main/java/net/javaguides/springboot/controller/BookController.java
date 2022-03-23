package net.javaguides.springboot.controller;


import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Book;
import net.javaguides.springboot.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @GetMapping("{id}")
    public ResponseEntity<Book> getBookById(@PathVariable  long id){
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not exist with id:" + id));
        return ResponseEntity.ok(book);
    }

    @PutMapping("{id}")
    public ResponseEntity<Book> updateBook(@PathVariable long id,@RequestBody Book bookDetails) {
        Book updateBook = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not exist with id: " + id));

        updateBook.setBookName(bookDetails.getBookName());
        updateBook.setAuthorName(bookDetails.getAuthorName());
        updateBook.setPrice(bookDetails.getPrice());

        bookRepository.save(updateBook);

        return ResponseEntity.ok(updateBook);
    }
}
