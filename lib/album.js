'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config2.default + '/albums/' + id).then(_utils2.default);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config2.default + '/albums/?ids=' + ids).then(_utils2.default);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks() {
  return fetch(_config2.default + '/albums/' + id + '/tracks').then(_utils2.default);
};