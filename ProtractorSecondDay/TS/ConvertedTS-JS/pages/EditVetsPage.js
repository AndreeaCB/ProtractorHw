"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class EditVetsPage {
    constructor() {
        this.firstNameField = protractor_1.$$("#firstName");
        this.lastNameField = protractor_1.$$("#lastName");
        this.typeField = protractor_1.$$("app-vet-edit.ng-star-inserted:nth-child(3) div.container-fluid div.container.xd-container form.form-horizontal.ng-pristine.ng-valid.ng-touched:nth-child(2) div.control-group:nth-child(4) div.form-group mat-form-field.col-sm-10.mat-input-container.mat-form-field.ng-tns-c5-0.mat-primary.mat-form-field-type-mat-select.mat-form-field-can-float.mat-form-field-hide-placeholder.ng-pristine.ng-valid.ng-touched div.mat-input-wrapper.mat-form-field-wrapper div.mat-input-flex.mat-form-field-flex div.mat-input-infix.mat-form-field-infix mat-select.mat-select.ng-tns-c6-1.ng-pristine.ng-valid.ng-star-inserted.ng-touched div.mat-select-trigger > div.mat-select-value");
        this.type1 = protractor_1.$$("body:nth-child(2)");
        //save = $("[type=submit]");
        this.saveVetButton = protractor_1.$$("button.btn.btn-default:nth-child(3)");
        this.justClick = protractor_1.$$("app-root:nth-child(1) app-vet-edit.ng-star-inserted:nth-child(3) div.container-fluid div.container.xd-container > h2:nth-child(1)");
    }
    addVetForModel(vet) {
        this.firstNameField.sendKeys(vet.firstName);
        this.lastNameField.sendKeys(vet.lastName);
    }
    clickTypeField() {
        this.typeField.click();
    }
    clickType1() {
        this.type1.click();
    }
    clickSaveButton() {
        this.saveVetButton.click();
        //this.save.click();
    }
    clearFields() {
        this.firstNameField.clear();
        this.lastNameField.clear();
    }
    clickJustClick() {
        this.justClick.click();
    }
}
exports.EditVetsPage = EditVetsPage;
