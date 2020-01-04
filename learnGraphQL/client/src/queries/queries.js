import { gql } from 'apollo-boost';

// to retrieve data from the server, a graph graphql query is written in much the same way as it would be written in a graphiql client interface; only inside a tempate string preceded by gql
const getBooksQuery = gql`
	query {
		books{
			name
			id
		}
	}
`

const getAuthorsQuery = gql`
	query {
		authors{
			name		
			id
		}
	}
`

const getBookQuery = gql`
	query($id: ID) {
		book(id: $id){
			id
			name
			genre
			author{
				id
				name
				age
				books{
					id
					name
				}
			}		
			
		}
	}
`

// for mutations, the keyword 'mutation' is required at the start of the query;
// supplied query variables must begin with a '$' and include their data type
// in this example, the 'addBook' mutation is selected, and 'name', 'genre', and 'authorId' are required as pased arguments (see server/schema/schema.js)
// after adding a book, the 'name', and 'id' are returned 
const addBookMutation = gql`
	mutation($name: String!, $genre: String!, $authorId: ID! ){
		addBook(name: $name, genre: $genre, authorId: $authorId){
			name
			id
		}
	}
`

export {
	getBooksQuery,
	getAuthorsQuery,
	getBookQuery,
	addBookMutation
}; 