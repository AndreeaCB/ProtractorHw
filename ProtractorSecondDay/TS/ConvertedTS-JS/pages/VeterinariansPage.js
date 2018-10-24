"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class VeterinariansPage {
    constructor() {
        //elements
        this.firstNameField = protractor_1.$("#firstName");
        this.lastNameField = protractor_1.$("#lastName");
        this.typeField = protractor_1.$("[name=specialties]");
        this.types = protractor_1.$$("#specialties option ");
        //type1=$("#mat-option-7");
        this.saveVetButton = protractor_1.$("[type=submit]");
    }
    addVet(firstName, lastName) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
    }
    //sau
    addVetForModel(vet) {
        this.firstNameField.sendKeys(vet.firstName);
        this.lastNameField.sendKeys(vet.lastName);
    }
    clickTypeField() {
        this.typeField.click();
    }
    // clickType1(){
    //     this.type1.click();
    // }
    addType() {
        //this.types.first().click();//cred ca trebuie sa fac metoda separata daca vreau sa imi selecteze mai mult de doua optiuni din dropdown :D
        this.types.last().click();
    }
    clickSaveButton() {
        this.saveVetButton.click();
    }
    clearFields() {
        this.firstNameField.clear();
        this.lastNameField.clear();
    }
}
exports.VeterinariansPage = VeterinariansPage;
