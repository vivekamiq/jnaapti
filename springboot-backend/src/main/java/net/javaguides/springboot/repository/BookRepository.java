package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book,Long> {

}
