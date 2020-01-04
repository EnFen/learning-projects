import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		}
	}
	displayBooks() {
		var data = this.props.data;
		if (data.loading) {
			return (<div>Loading books...</div>);
		} else {
			return data.books.map(book => {
				return (
					<li key={book.id} onClick={(e) => { this.setState({ selected: book.id }) }}> {book.name}</ li>
				);
			})
		}
	}
	render() {
		return (
			<div >
				<ul id="book-list">
					{this.displayBooks()}
				</ul>
				<BookDetails bookId={this.state.selected} />
			</div >
		);
	}
}

// queries are bound to a component as follows. Multiple queries can be bound to the same component using 'compose'.
export default graphql(getBooksQuery)(BookList);
