/**
  * Made By DitzOfc
  * Jumat 30 Agustus, 2024
  **/
const axios = require("axios")
const cheerio = require("cheerio")

async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const ditz = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`, {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const adit = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${ditz.data.result.gid}/${ditz.data.result.id}`, {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = ditz.data.result.name;
      result.type = ditz.data.result.type;
      result.artis = ditz.data.result.artists;
      result.durasi = ditz.data.result.duration_ms;
      result.image = ditz.data.result.image;
      result.download = "https://api.fabdl.com" + adit.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
async function searchSpotify(query) {
  try {
    const access_token = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = response.data;
    const tracks = data.tracks.items.map(item => ({
      name: item.name,
      artists: item.artists.map(artist => artist.name).join(', '),
      popularity: item.popularity,
      link: item.external_urls.spotify,
      image: item.album.images[0].url,
      duration_ms: item.duration_ms,
    }));
    return tracks;
  } catch (error) {
    console.error('Error searching Spotify:', error);
    throw 'An error occurred while searching for songs on Spotify.';
  }
}
async function getAccessToken() {
  try {
    const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
    const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = response.data;
    return data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw 'An error occurred while obtaining Spotify access token.';
  }
}

module.exports = { spotifydl, searchSpotify }