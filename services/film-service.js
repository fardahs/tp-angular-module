"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_json_1 = __importDefault(require("../mocks/film.json"));
var Film = /** @class */ (function () {
    function Film(title, releasedate, studio, poster, location, rating, directors, genre, actors, trailers) {
        this.title = title;
        this.releasedate = releasedate;
        this.studio = studio;
        this.poster = poster;
        this.location = location;
        this.rating = rating;
        this.directors = directors;
        this.genre = genre;
        this.actors = actors;
        this.trailers = trailers;
    }
    return Film;
}());
var Trailers = /** @class */ (function () {
    function Trailers(postdate, url, type, exclusive, hd) {
        this.postdate = postdate;
        this.url = url;
        this.type = type;
        this.exclusive = exclusive;
        this.hd = hd;
    }
    return Trailers;
}());
function listFilm() {
    return film_json_1.default.map(function (items) { return new Film(items.title, items.releasedate, items.studio, items.poster, items.location, items.rating, items.directors, items.genre, items.actors, items.trailers.map(function (item) { return new Trailers(item.postdate, item.url, item.type, item.exclusive, item.hd); })); });
}
exports.listFilm = listFilm;
//# sourceMappingURL=film-service.js.map