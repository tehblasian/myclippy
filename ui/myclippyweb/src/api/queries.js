const axios = require('axios');

export async function search({ query = ""}) {
  const results = await axios({
    baseURL: "http://localhost:8080",
    method: "get",
    url: "/songs/"+query,
  })
    .then(res => res.data.songs) // TODO: Catch errors
    .catch(err => console.log({ err }))

  return results
}

export async function getSong({ songId }) {
  const results = await axios({
    baseURL: "http://localhost:8080",
    method: "get",
    url: "/song/"+songId,
  })
    .then(res => res.data)
    .catch(err => console.log({ err }))

  return results
}

export async function split(albumCoverUrl, songName) {
  const results = await axios({
    baseURL: "http://localhost:8080",
    method: "post",
    url: "/split",
    data: {
      albumCoverUrl,
      songName,
    }
  })
    .then(res => res.data)
    .catch(err => console.log({ err }))

  return results
}
