package com.example.demo.controller;

import com.example.demo.dto.request.BookCreationRequest;
import com.example.demo.dto.request.BookUpdateRequest;
import com.example.demo.entity.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookservice;
    @PostMapping
    Book createBook(@RequestBody BookCreationRequest request){
        return bookservice.createBook(request);
    }
    @GetMapping
    List<Book> getBook(){
        return bookservice.getBooks();
    }
    @GetMapping("/{bookid}")
    Book getBookById(@PathVariable("bookid") String id){
        return bookservice.getBookById(id);
    }
    @PutMapping("/{bookId}")
    Book updateBook(@RequestBody BookUpdateRequest request , @PathVariable String bookId){
        return bookservice.updateBook(bookId,request);
    }

}
