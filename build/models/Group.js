"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Messages_1 = require("./Messages");
var User_1 = require("./User");
var Group = /** @class */ (function () {
    function Group() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Group.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Group.prototype, "name", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Group.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Group.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return User_1.User; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Group.prototype, "users", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Messages_1.Messages; }, function (messages) { return messages.group; }),
        __metadata("design:type", Array)
    ], Group.prototype, "messsages", void 0);
    Group = __decorate([
        typeorm_1.Entity("groups"),
        __metadata("design:paramtypes", [])
    ], Group);
    return Group;
}());
exports.Group = Group;
