import {all} from 'redux-saga/effects';
import {watchFetchWorker} from './jsonSaga';

export default function* rootSaga() {
  yield all([watchFetchWorker()]);
}

