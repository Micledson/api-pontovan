"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsUsersUsers1623437991162 = void 0;
var groupsUsersUsers1623437991162 = /** @class */ (function () {
    function groupsUsersUsers1623437991162() {
        this.name = "groupsUsersUsers1623437991162";
    }
    groupsUsersUsers1623437991162.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP INDEX `UQ_97672ac88f789774dd47f7c8be3` ON `users`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `groups_users_users` (`groupsId` varchar(255) NOT NULL, `usersId` varchar(255) NOT NULL, INDEX `IDX_6320d5cbd6f7702b2e78d38d6b` (`groupsId`), INDEX `IDX_0f3881cfe1ef94b0e435d1d72f` (`usersId`), PRIMARY KEY (`groupsId`, `usersId`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups_users_users` ADD CONSTRAINT `FK_6320d5cbd6f7702b2e78d38d6b8` FOREIGN KEY (`groupsId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups_users_users` ADD CONSTRAINT `FK_0f3881cfe1ef94b0e435d1d72f9` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    groupsUsersUsers1623437991162.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups_users_users` DROP FOREIGN KEY `FK_0f3881cfe1ef94b0e435d1d72f9`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups_users_users` DROP FOREIGN KEY `FK_6320d5cbd6f7702b2e78d38d6b8`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_0f3881cfe1ef94b0e435d1d72f` ON `groups_users_users`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_6320d5cbd6f7702b2e78d38d6b` ON `groups_users_users`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `groups_users_users`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX `UQ_97672ac88f789774dd47f7c8be3` ON `users` (`email`)")];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return groupsUsersUsers1623437991162;
}());
exports.groupsUsersUsers1623437991162 = groupsUsersUsers1623437991162;
