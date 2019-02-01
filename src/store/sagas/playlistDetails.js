import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const {
      payload: { id },
    } = action;

    const { data } = yield call(api.get, `/playlists/${id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistsDetailsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
