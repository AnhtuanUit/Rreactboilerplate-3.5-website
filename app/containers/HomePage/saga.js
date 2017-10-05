/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CREATE_CONTACT } from 'containers/ContactForm/constants';
import { contactCreated, contactCreatingError } from 'containers/ContactForm/actions';

import request from 'utils/request';
import { makeSelectContactData, makeSelectFile } from 'containers/ContactForm/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos(state) {
  // Select username from store
  const contactData = yield select(makeSelectContactData());
  const file = yield select(makeSelectFile());

  const requestURLipinfo = 'http://ipinfo.io/json';
  const requestURLcontact = 'http://112.197.2.24:4201/api/contact';
  const requestFile = 'http://112.197.2.24:4201/api/file';
  try {
    // Call our request helper (see 'utils/request')

    let info = contactData;
    const repos = yield call(request, requestURLipinfo);

    if(!!repos) {
      const arr = repos.loc.split(",");
      const location = { lat: arr[0], lng: arr[1] };
      info.location = location;
      info.isp = repos.org;
      info.localTime = (new Date()).toString();
      info = Object.assign(info, repos);
    }
    if(!!file.name) {
      const dataForm = new FormData();
      dataForm.append('file', file);
      const fileResponse = yield call(request, requestFile, {
        method: 'POST',
        body: dataForm
      });
      if (!!fileResponse) {
         info = Object.assign(info, {file: [fileResponse.url]});
      }
    }
    const contact = yield call(request, requestURLcontact, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });

    yield put(contactCreated(contact.message));
  } catch (err) {
    if(!!err.err) {
      yield put(contactCreatingError(err.err.message));
    } else {
      yield put(contactCreatingError('error ipinfo.'));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CREATE_CONTACT, getRepos);
}
