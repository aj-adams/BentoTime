import { clone, merge } from 'lodash';
import bookReducer from './bookReducer';
import libraryTypeFixture from 'test/fixtures/types/libraryTypeFixture';
import bookTypeFixture from 'test/fixtures/types/bookTypeFixture';
import * as ActionTypes from 'app/data/actions/ActionTypes';

describe('Data', function() {
  describe('Reducers', function() {
    describe('Book', function() {
      xit('Should populate empty states correctly on success', function SetEmptyState() {
        const library = bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_SUCCESS,
          receivedAt: 12345,
          book: bookTypeFixture
        });

        expect(library.books[bookTypeFixture.id]).deep.equals(bookTypeFixture);
        expect(library.lastUpdated).to.equal(12345);
        expect(library.isFetching).to.be.false;
      });

      xit('Should merge state on successful update', function SetActiveState() {
        const library = clone(libraryTypeFixture);
        library.books[bookTypeFixture.id] = {
          propToStay: 'cool and not outdated property',
          title: 'totally cool, but outdated title'
        };

        const newLibrary = bookReducer(library, {
          type: ActionTypes.FETCH_BOOK_SUCCESS,
          receivedAt: 12345,
          book: bookTypeFixture
        });

        const newBook = newLibrary.books[bookTypeFixture.id];
        expect(newLibrary.lastUpdated).to.equal(12345);
        expect(newBook.propToStay).to.equal('cool and not outdated property');
        expect(newBook.title).to.equal('Airindream');
        expect(newLibrary.isFetching).to.be.false;
      });

      xit('Should set isFetching on request');
      xit('Should error on a failed request');
    });
  });
});
