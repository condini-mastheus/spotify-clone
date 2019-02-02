import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const {
      payload: { id },
    } = action;

    const { data } = yield call(api.get, `/playlists/${id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistsDetailsSuccess(data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes da playlist'));
  }
}
