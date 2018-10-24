"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MenuPage {
    constructor() {
        //elements
        this.menuItems = protractor_1.$$(".nav.navbar-nav li a");
        this.homeButton = this.menuItems.get(0);
        this.allOwnersButton = this.menuItems.get(2);
        this.ownersButton = this.menuItems.get(1);
        this.addNewButton = this.menuItems.get(3);
        this.veterinariansButton = this.menuItems.get(4);
        this.allVeterinarians = this.menuItems.get(5);
        this.addVeterinariansButton = this.menuItems.get(6);
        this.petTypesButton = this.menuItems.get(7);
        this.specialtiesButton = this.menuItems.get(8);
    }
    //methods
    clickOwnersButton() {
        this.ownersButton.click();
    }
    clickAddNewButton() {
        this.addNewButton.click();
    }
    clickAllOwnersButton() {
        this.allOwnersButton.click();
    }
    clickAddVeterinarians() {
        this.addVeterinariansButton.click();
    }
    clickVeterinariansButton() {
        this.veterinariansButton.click();
    }
    clickAllVeterinarians() {
        this.allVeterinarians.click();
    }
}
exports.MenuPage = MenuPage;
