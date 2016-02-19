Our store holds our state, and allows us to call dispatch functions to send our actions.

The data layout of BentoTime looks something like this:

```js
  {
    user: {
      currentBook: "5fdsf",
      currentChapter: "5fdfsdf",
      currentPage: "afsdfd",
      readMode: "page"
    },
    library: {
      isFetching: false,
      lastChapter: 123423423,
      totalBooks: 16873,
      books: {
        "someBookID": {
          title: "Hello",
          image: "sdfsdfsaf",
          lastChapter: 324341234,
          chapters: [
            {
              id: "afsds"
              number: 5
              publishDate: 23423423
              title: "fsdfdsf",
              pages: [
                "someaddressthing"
              ]
            }
          ]
        }
      }
    }
  }
```
