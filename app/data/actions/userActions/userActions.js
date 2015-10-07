import * as ActionTypes from 'app/data/actions/ActionTypes';

export function setCurrentBook(bookId) {
  return {
    type: ActionTypes.SET_CURRENT_BOOK,
    id: bookId
  };
}

export function setCurrentChapter(chapterId) {
  return {
    type: ActionTypes.SET_CURRENT_CHAPTER,
    id: chapterId
  };
}

export function setCurrentPage(pageId) {
  return {
    type: ActionTypes.SET_CURRENT_PAGE,
    id: pageId
  };
}

export function setReadMode(readMode) {
  return {
    type: ActionTypes.SET_READ_MODE,
    readMode: readMode
  };
}
