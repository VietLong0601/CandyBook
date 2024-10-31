package com.example.demo.service;

import com.example.demo.dto.request.BookCreationRequest;
import com.example.demo.dto.request.BookUpdateRequest;
import com.example.demo.entity.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    public Book createBook(BookCreationRequest request){
        Book book= new Book();
        book.setBook_status(request.getBook_status());
        book.setAuthor(request.getAuthor());
        book.setDescription(request.getDescription());
        book.setSupplier(request.getSupplier());
        book.setPublic_year(request.getPublic_year());
        book.setQuantity_of_page(request.getQuantity_of_page());
        book.setAge(request.getAge());
        book.setTittle(request.getTittle());
        return bookRepository.save(book);
    }
    public List<Book> getBooks(){
        return bookRepository.findAll();
    }

    public Book getBookById(String id){
        return bookRepository.findById(id).orElseThrow(()->new RuntimeException("Book not found"));
    }
    public Book updateBook(String book_id, BookUpdateRequest request){
        Book book=getBookById(book_id);
        book.setBook_status(request.getBook_status());
        book.setAuthor(request.getAuthor());
        book.setDescription(request.getDescription());
        book.setSupplier(request.getSupplier());
        book.setPublic_year(request.getPublic_year());
        book.setQuantity_of_page(request.getQuantity_of_page());
        book.setAge(request.getAge());
        book.setTittle(request.getTittle());
        return bookRepository.save(book);
    }
    public void deleteBook(String id){
        bookRepository.deleteById(id);
    }
}
