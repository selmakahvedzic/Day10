function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Maroon 5",
      title: "Memories",
      release_year: 2019,
      formats: {
        1: "YouTube",
        2: "Spotify",
        3: "Deezer",
      },
      gold: false,
    }
  };
}

myFunction()[2];
module.exports = myFunction;
