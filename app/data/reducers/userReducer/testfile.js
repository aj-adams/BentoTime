import userReducer from './userReducer';
import * as ActionTypes from 'app/data/actions/ActionTypes';

describe('Data', function() {
  describe('Reducers', function() {
    describe('User', function() {
      xit('Should populate empty states correctly', function SetEmptyState() {
        const newBookState = userReducer(undefined, {
          type: ActionTypes.SET_USER_BOOK,
          id: 5
        });

        expect(newBookState.book).to.equal(5);
        expect(newBookState.chapter).to.equal(undefined);
        expect(newBookState.page).to.equal(undefined);

        const newChapterState = userReducer(undefined, {
          type: ActionTypes.SET_USER_CHAPTER,
          id: 5
        });

        expect(newChapterState.book).to.equal(undefined);
        expect(newChapterState.chapter).to.equal(5);
        expect(newChapterState.page).to.equal(undefined);

        const newPageState = userReducer(undefined, {
          type: ActionTypes.SET_USER_PAGE,
          id: 5
        });

        expect(newPageState.book).to.equal(undefined);
        expect(newPageState.chapter).to.equal(undefined);
        expect(newPageState.page).to.equal(5);
      });

      xit('Should update active states correctly', function SetActiveState() {
        const activeState = {
          book: 5,
          chapter: 5,
          page: 5
        };

        const newBookState = userReducer(activeState, {
          type: ActionTypes.SET_USER_BOOK,
          id: 1
        });

        expect(newBookState.book).to.equal(1);
        expect(newBookState.chapter).to.equal(5);
        expect(newBookState.page).to.equal(5);

        const newChapterState = userReducer(activeState, {
          type: ActionTypes.SET_USER_CHAPTER,
          id: 1
        });

        expect(newChapterState.book).to.equal(5);
        expect(newChapterState.chapter).to.equal(1);
        expect(newChapterState.page).to.equal(5);

        const newPageState = userReducer(activeState, {
          type: ActionTypes.SET_USER_PAGE,
          id: 1
        });

        expect(newPageState.book).to.equal(5);
        expect(newPageState.chapter).to.equal(5);
        expect(newPageState.page).to.equal(1);
      });

      xit('Should set isFetching on request');
      xit('Should error on a failed request');
    });
  });
});
