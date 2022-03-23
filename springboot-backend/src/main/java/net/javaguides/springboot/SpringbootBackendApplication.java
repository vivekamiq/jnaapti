package net.javaguides.springboot;

import net.javaguides.springboot.model.Book;
import net.javaguides.springboot.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;


@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private BookRepository bookRepository;

	@Override
	public void run(String... args) throws Exception {
/*		Book book = new Book();
		book.setBookName("Think Like A Monk");
		book.setAuthorName("Jay Shetty");
		book.setPrice("340");
		bookRepository.save(book);

		Book book1 = new Book();
		book1.setBookName("The Psychology of Money");
		book1.setAuthorName("Morgan Housel");
		book1.setPrice("290");
		bookRepository.save(book1); */

	}

}
