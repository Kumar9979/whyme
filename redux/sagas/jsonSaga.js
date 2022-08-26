import {FETCH_DATA} from '../actions/types';
import {takeLatest, call, put} from 'redux-saga/effects';
import {jsonApi} from '../apis/jsonApi';
import {FAILED, LOADED, LOADING} from '../actions/returnTypes';

export function* fetchDataWorker(action) {
  console.log(':sdlkvno', action);
  try {
    yield put({type: LOADING});
    const response = yield call(jsonApi);
    console.log(response.data);
    if (response.status == 200) {
      yield put({type: LOADED, datae: response.data});
    } else {
      yield put({type: FAILED});
    }
  } catch (er) {
    console.log(er);
  }
}

export function* watchFetchWorker() {
  yield takeLatest(FETCH_DATA, fetchDataWorker);
}
