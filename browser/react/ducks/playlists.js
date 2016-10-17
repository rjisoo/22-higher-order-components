const CREATE_PLAYLIST = 'CREATE_PLAYLIST';

export const createPlaylist = newPlaylist => ({
  type: CREATE_PLAYLIST,
  newPlaylist
})

export default function playlistsReducer (state = [], action) {
  switch (action.type) {
    case CREATE_PLAYLIST: return action.playlists;
    default: return state;
  }
}
