import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from "../src/search';


describe('Search', () => {

  let fetchedStub;
  let promise;

  beforeEach( () => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach( () => {
    fetchedStub.restore();
  });


  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedSub = sinon.stub(global, 'fetch');

      const artists = search();

      expect(fetchedSub).to.have.been.calledOnce;

    });

    it('should return the JSON Data from the Promise', () => {
       promise.resolves({ body: 'json' });
       const artists = search('Incubus', 'artist');

       expect(artists.resolveValue).to.be.eql({ body: 'json' });
     });

  });

  describe('searchArtists', () => {
 +    it('should call fetch function', () => {
 +      const artists = searchArtists('Incubus');
 +      expect(fetchedStub).to.have.been.calledOnce;
 +    });
 +
 +    it('should call fetch with the correct URL', () => {
 +      const artists = searchArtists('Incubus');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')
 +
 +      const artists2 = searchArtists('Muse');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
 +    });
 +  });
 +
 +  describe('searchAlbums', () => {
 +    it('should call fetch function', () => {
 +      const albums = searchAlbums('Incubus');
 +      expect(fetchedStub).to.have.been.calledOnce;
 +    });
 +
 +    it('should call fetch with the correct URL', () => {
 +      const albums = searchAlbums('Incubus');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
 +
 +      const albums2 = searchAlbums('Muse');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
 +    });
 +  });
 +
 +  describe('searchTracks', () => {
 +    it('should call fetch function', () => {
 +      const tracks = searchTracks('Incubus');
 +      expect(fetchedStub).to.have.been.calledOnce;
 +    });
 +
 +    it('should call fetch with the correct URL', () => {
 +      const tracks = searchTracks('Incubus');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')
 +
 +      const tracks2 = searchTracks('Muse');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
 +    });
 +  });
 +
 +  describe('searchPlaylists', () => {
 +    it('should call fetch function', () => {
 +      const playlists = searchPlaylists('Incubus');
 +      expect(fetchedStub).to.have.been.calledOnce;
 +    });
 +
 +    it('should call fetch with the correct URL', () => {
 +      const playlists = searchPlaylists('Incubus');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')
 +
 +      const playlists2 = searchPlaylists('Muse');
 +      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
 +    });
 +  });


});
