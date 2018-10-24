"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AllOwnersPage {
    constructor() {
        //elements
        this.ownerList = protractor_1.$$("td.ownerFullName a");
    }
    //methods
    getOwnerList(firstName, lastName) {
        return this.ownerList.getText().then(owner => {
            return owner.includes(firstName + " " + lastName);
        });
    }
}
exports.AllOwnersPage = AllOwnersPage;
