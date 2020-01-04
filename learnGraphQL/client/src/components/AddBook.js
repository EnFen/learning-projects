import React, { Component } from 'react';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';


class AddBook extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			genre: "",
			authorId: ""
		};
	}
	displayAuthors() {
		var data = this.props.getAuthorsQuery;
		if (data.loading) {
			return (<option disabled>Loading Authors...</option>)
		} else {
			return data.authors.map(author => {
				return (<option key={author.id} value={author.id}>{author.name}</option>)
			})
		}
	}

	submitForm(event) {
		event.preventDefault();
		this.props.addBookMutation({
			variables: {
				name: this.state.name,
				genre: this.state.genre,
				authorId: this.state.authorId
			},
			refetchQueries: [{ query: getBooksQuery }]
		});
	}

	render() {
		return (
			<form id="add-book" onSubmit={this.submitForm.bind(this)}>

				<div className="field">
					<label>Book name:</label>
					<input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
				</div>

				<div className="field">
					<label>Genre:</label>
					<input type="text" onChange={(event) => this.setState({ genre: event.target.value })} />
				</div>

				<div className="field">
					<label>Author:</label>
					<select onChange={(event) => this.setState({ authorId: event.target.value })}>
						<option>Select Author</option>
						{this.displayAuthors()}
					</select>
				</div>

				<button>+</button>

			</form >
		);
	}
}

// queries are bound to a component as follows. Multiple queries can be bound to the same component using 'compose'.
// NOTE: compose no longer belongs to the 'apollo-boost' package as suggested in the tutorial; Instead, the 'recompose' package had to be installed (previously a apollo-boost dependency)
export default compose(
	graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
	graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
