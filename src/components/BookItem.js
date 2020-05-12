import React from 'react';

class BookItem extends React.Component {
    render() {
        const { book } = this.props;
        return (
            <div className="book-item">
                <div className="image">
                    <img src={book.coverUrl} />
                </div>
                <div>
                    <div className="title">
                        {book.title}
                    </div>
                    <div className="description">
                        {book.description}
                    </div>
                </div>

            </div>
        );
    }
}

export default BookItem;
