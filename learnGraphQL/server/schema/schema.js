const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/Book');
const Author = require('../models/Author');


const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = graphql;





const BookType = new GraphQLObjectType({
	name: "Book",
	// note: the following ES6 syntax is the same as 'returning' an object. 'Single line returns' work when the output is on multiple lines if the output is enclosed in parentheses.
	// the reason that 'fields' is represented as a function is that any foreign types used in this field (e.g. in this case, 'AuthorType), will not be recognised if simply returned inside an object, and GQL will throw a type error.
	// returning the fields inside a fuction means that foreign types declared elsewhere in the script will have already been loaded before the function is called, so when it IS called, the foreign types will be recognised
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				// code to get data from db or other source
				// return _.find(authors, { id: parent.authorId })
				return Author.findById(parent.authorId);
			}
		}
	})
});


const AuthorType = new GraphQLObjectType({
	name: "Author",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				// code to get data from db or other source
				// return _.filter(books, { authorId: parent.id })
				return Book.find({ authorId: parent.id });
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db or other source
				// return _.find(books, { id: args.id });
				return Book.findById(args.id);
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db or other source
				// return _.find(authors, { id: args.id });
				return Author.findById(args.id);
			}
		},
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				// code to get data from db or other source
				// return books;
				return Book.find({});
			}
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve(parent, args) {
				// code to get data from db or other source
				// return authors;
				return Author.find({});
			}
		}

	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addAuthor: {
			type: AuthorType,
			args: {
				// Note: GraphQLNonNull type prevents a record from being created without the passed value
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) }
			},
			resolve(parent, args) {
				let author = new Author({
					name: args.name,
					age: args.age
				});
				return author.save();
			}

		},
		addBook: {
			type: BookType,
			args: {
				// Note: GraphQLNonNull type prevents a record from being created without the passed value
				name: { type: new GraphQLNonNull(GraphQLString) },
				genre: { type: new GraphQLNonNull(GraphQLString) },
				authorId: { type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args) {
				let book = new Book({
					name: args.name,
					genre: args.genre,
					authorId: args.authorId
				});
				return book.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})