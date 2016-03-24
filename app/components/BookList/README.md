BookList
=========

BookList takes in an object or array of books, and returns a list component that displays the information for those books in the form of [BookListItems](../BookListItem).

#### How to use:

##### With Filter
BookList is very stingy on displaying books, and will only display books matched by the filter. This helps us speed up our application by reducing the amount of components rendered. We filter our `BookList` by passing in a `filter` prop. The `filter` prop is a string that we use to match against the manga titles, ignoring case:

```js
import BookList from 'app/components/BookList';
const myBooks = [/*An array of books*/];
const filterString = "naruto";

<BookList books={myBooks} filter={filterString} />
```

##### Without Filter
The basic usage of the BookList component without a filter is to pass filter a boolean value:

```js
import BookList from 'app/components/BookList';
const myBooks = [/*An array of books*/];

// displays no books
<BookList books={myBooks} filter={false} />

// displays all books
<BookList books={myBooks} filter={true} />
```

#### Props

* `books`: An object or array of [Books](../../data/models/Book)
* `filter`: What we use to filter book titles. As of now, this can be a string or boolean. A boolean can be used to display the entire or none of the list, where a string is used to search through the title of each book.
