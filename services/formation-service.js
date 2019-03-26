"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, genre, religion) {
        this.nom = nom;
        this.prenom = prenom;
        this.genre = genre;
        this.religion = religion;
    }
    Personne.prototype.boisson = function (name, alcool, bio) {
        if (alcool === true && bio === true) {
            console.log("boisson alcoolisée et bio");
        }
        else {
            console.log("boisson non alcoolisée et non bio");
        }
    };
    Personne.prototype.toString = function () {
        return this.nom + ' ' + this.prenom;
    };
    return Personne;
}());
var Connaissances = /** @class */ (function () {
    function Connaissances(name, anneeExperience) {
        this.name = name;
        this.anneeExperience = anneeExperience;
    }
    return Connaissances;
}());
var Formateur = /** @class */ (function (_super) {
    __extends(Formateur, _super);
    function Formateur(nom, prenom, genre, skills) {
        var _this = _super.call(this, nom, prenom, genre) || this;
        _this.skills = skills;
        return _this;
    }
    Formateur.prototype.canTeach = function () {
        return this.skills.filter(function (item) { return item.anneeExperience > 2; });
    };
    return Formateur;
}(Personne));
var Certification = /** @class */ (function () {
    function Certification(name, anneeObtention) {
        this.name = name;
        this.anneeObtention = anneeObtention;
    }
    return Certification;
}());
var Stagiaire = /** @class */ (function (_super) {
    __extends(Stagiaire, _super);
    function Stagiaire(nom, prenom, genre, certification) {
        var _this = _super.call(this, nom, prenom, genre) || this;
        _this.certification = certification;
        return _this;
    }
    return Stagiaire;
}(Personne));
var Formation = /** @class */ (function () {
    function Formation(nom, dateDebut, dateFin, stagiaire, formateur) {
    }
    return Formation;
}());
//# sourceMappingURL=formation-service.js.map