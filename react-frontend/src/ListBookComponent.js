import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BookService from './services/BookService'

const ListBookComponent = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {

        getAllBooks();
    }, [])

    const getAllBooks = () => {
        BookService.getAllBooks().then((response) => {
            setBooks(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Bookss </h2>
            <Link to = "/add-book" className = "btn btn-primary mb-2" > Add Book </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Book Id </th>
                    <th> Book Name </th>
                    <th> Author Name </th>
                    <th> Price </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        books.map(
                            book =>
                            <tr key = {book.id}> 
                                <td> {book.id} </td>
                                <td> {book.bookName} </td>
                                <td>{book.authorName}</td>
                                <td>{book.price}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-book/${book.id}`} >Update</Link>
                                
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListBookComponent;