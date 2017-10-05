/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('home');

const makeSelectContactData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('contactData')
)

const makeSelectFile = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('file')
)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectResponse = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('responseContact')
);

export {
  selectGlobal,
  makeSelectContactData,
  makeSelectFile,
  makeSelectLoading,
  makeSelectError,
  makeSelectResponse,
};
