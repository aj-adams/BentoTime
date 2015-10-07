import { clone } from 'lodash';
import chapterReducer from './chapterReducer';
import libraryTypeFixture from 'test/fixtures/types/libraryTypeFixture';
import chapterTypeFixture from 'test/fixtures/types/chapterTypeFixture';
import * as ActionTypes from 'app/data/actions/ActionTypes';

describe('Data', function() {
  describe('Reducers', function() {
    describe('Chapter', function() {
      xit('Should populate empty states correctly on success', function SetEmptyState() {
        const bookId = '5372389645b9ef5a0b1d20d8';
        const library = chapterReducer(undefined, {
          type: ActionTypes.FETCH_CHAPTER_SUCCESS,
          chapter: chapterTypeFixture,
          bookId: bookId
        });
        const book = library.books[bookId];
        const chapter = book.chapters[chapterTypeFixture.id];
        expect(chapter).to.deep.equal(chapterTypeFixture);
      });

      xit('Should replace state on successful update', function SetActiveState() {
        const bookId = '5372389645b9ef5a0b1d20d8';
        const library = clone(libraryTypeFixture);
        const book = library.books[bookId];
        book.chapters = {};
        book.chapters[chapterTypeFixture.id] = {
          '80': 'somepage',
          '2': 'someotherpage'
        };

        const newLibrary = chapterReducer(library, {
          type: ActionTypes.FETCH_CHAPTER_SUCCESS,
          chapter: chapterTypeFixture,
          bookId: bookId,
          receivedAt: 12345
        });

        const newBook = newLibrary.books[bookId];
        const newChapter = newBook.chapters[chapterTypeFixture.id];
        expect(newLibrary.lastUpdated).to.equal(12345);
        expect(newLibrary.isFetching).to.be.false;
        expect(newChapter[80]).to.equal(undefined);
        expect(newChapter[2]).to.equal(undefined);
      });

      xit('Should set isFetching on request');
      xit('Should error on a failed request');
    });
  });
});
