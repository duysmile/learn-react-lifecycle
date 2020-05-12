import React, { Component } from 'react';
import * as axios from 'axios';
import BookItem from './components/BookItem';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            q: '',
        };

        this.searchBooks = this.searchBooks.bind(this);
        this.onChangeQuery = this.onChangeQuery.bind(this);
    }

    searchBooks(event) {
        event.preventDefault();
        axios
            .get(`https://dented-enemy.glitch.me/api/books?q=${this.state.q}`)
            .then((data) => data.data)
            .then((data) => {
                this.setState({ books: data.books });
            });
    }

    onChangeQuery(event) {
        this.setState({
            q: event.target.value,
        });
    }

    componentDidMount() {
        axios
            .get('https://dented-enemy.glitch.me/api/books')
            .then((data) => data.data)
            .then((data) => {
                this.setState({ books: data.books });
            });
    }

    render() {
        return (
            <div className="App">
                {this.state.books.length > 0 && (
                    <div>
                        <form onSubmit={this.searchBooks}>
                            <input
                                onChange={this.onChangeQuery}
                                type="text"
                                placeholder="Enter title book"
                                value={this.state.q}
                            />
                            <button>Search</button>
                        </form>
                    </div>
                )}
                {this.state.books.map((book) => (
                    <BookItem book={book} key={book._id} />
                ))}
            </div>
        );
    }
}

export default App;
