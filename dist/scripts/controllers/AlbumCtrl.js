(function() {
  function AlbumCtrl(Fixtures) {
    this.albumData = {}; //Fixtures.getAlbum(3);
    // this.albumData = Fixtures.getAlbum(3);
    console.log(this.albumData);
  }
  
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
