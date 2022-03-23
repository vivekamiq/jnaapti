import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import BookService from './services/BookService'

const AddBookComponent = () => {

    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [price, setPrice] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateBook = (e) => {
        e.preventDefault();

        const book = {bookName, authorName, price}

        if(id){
            BookService.updateBook(id, book).then((response) => {
                history.push('/books')
            }).catch(error => {
                console.log(error)
            })

        }else{
            BookService.createBook(book).then((response) =>{

                console.log(response.data)
    
                history.push('/books');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        BookService.getBookById(id).then((response) =>{
            setBookName(response.data.bookName)
            setAuthorName(response.data.authorName)
            setPrice(response.data.price)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           <h2 className = "text-center">Add Book</h2>
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Book Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter book name"
                                        name = "bookName"
                                        className = "form-control"
                                        value = {bookName}
                                        onChange = {(e) => setBookName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Author Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter author name"
                                        name = "authorName"
                                        className = "form-control"
                                        value = {authorName}
                                        onChange = {(e) => setAuthorName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBook(e)} >Submit </button>
                                <Link to="/books" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddBookComponent;