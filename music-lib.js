const Library = function(name, creator) {
  this.name    = name;
  this.creator = creator;
  this.playlists = [];
}

const Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

const Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}


Library.prototype.addPlaylist = function(playlistName) {

  this.playlists.push(playlistName);
  console.log(`Library: ${this.name} - Playlists: ${this.playlists}`);
};


Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
  console.log(`Playlist: ${this.name} - Tracks: ${this.tracks}`);
};

Playlist.prototype.totalDuration = function(playlist) {
  let totalDuration = 0;


  console.log(totalDuration);
};

Playlist.prototype.overallRating = function(playlist) {
  let overallRating = 0;


  console.log(overallRating);
};






