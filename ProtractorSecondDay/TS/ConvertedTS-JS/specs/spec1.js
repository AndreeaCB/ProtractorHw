"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utilities/utils");
const MenuPage_1 = require("../pages/MenuPage");
const OwnersPage_1 = require("../pages/OwnersPage");
const OwnersData_1 = require("../TestData/OwnersData");
const AllOwnersPage_1 = require("../pages/AllOwnersPage");
const VeterinariansPage_1 = require("../pages/VeterinariansPage");
const VeterinariansData_1 = require("../TestData/VeterinariansData");
const AllVetsPage_1 = require("../pages/AllVetsPage");
const EditVetsPage_1 = require("../pages/EditVetsPage");
let menuPage = new MenuPage_1.MenuPage();
let ownersPage = new OwnersPage_1.OwnersPage();
let allowners = new AllOwnersPage_1.AllOwnersPage();
let addVet = new VeterinariansPage_1.VeterinariansPage();
let allVets = new AllVetsPage_1.AllVetsPage();
let editVet = new EditVetsPage_1.EditVetsPage();
describe("Owners", () => {
    beforeEach(() => {
        utils_1.Utils.goToHomePage();
    });
    it("Add a new owner - happy path", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAddNewButton();
        //ownersPage.addInformation(OwnersData.GigelHappyPath.firstName, OwnersData.GigelHappyPath.lastName, OwnersData.GigelHappyPath.address, OwnersData.GigelHappyPath.city, OwnersData.GigelHappyPath.telephone);
        ownersPage.addInformationForModel(OwnersData_1.OwnersData.AndreeaHappyPath);
        ownersPage.clickOnAddOwnerButton();
    });
    it("Add a new owner - check phone validation", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAddNewButton();
        ownersPage.addInformation(OwnersData_1.OwnersData.GigelPhoneValidation.firstName, OwnersData_1.OwnersData.GigelPhoneValidation.lastName, OwnersData_1.OwnersData.GigelPhoneValidation.address, OwnersData_1.OwnersData.GigelPhoneValidation.city, OwnersData_1.OwnersData.GigelPhoneValidation.telephone);
        ownersPage.addTelephone("fdsfds");
        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
    });
    it("searching for owner", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        expect(allowners.getOwnerList(OwnersData_1.OwnersData.AndreeaHappyPath.firstName, OwnersData_1.OwnersData.AndreeaHappyPath.lastName)).toBeTruthy();
    });
});
describe("Vets", () => {
    beforeEach(() => {
        utils_1.Utils.goToHomePage();
    });
    it("add new vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAddVeterinarians();
        //addVet.addVet(VeterniariansData.Object1.firstName, VeterniariansData.Object1.lastName);
        addVet.addVetForModel(VeterinariansData_1.VeterniariansData.Object2);
        addVet.addVetForModel(VeterinariansData_1.VeterniariansData.Object4);
        addVet.clickTypeField();
        addVet.addType();
        addVet.clickSaveButton();
    });
    it("searching for a new vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinarians();
        expect(allVets.getVetsList(VeterinariansData_1.VeterniariansData.Object1.firstName, VeterinariansData_1.VeterniariansData.Object1.lastName)).toBeTruthy();
    });
    it("editing the vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinarians();
        expect(allVets.editVets(VeterinariansData_1.VeterniariansData.Object3.firstName, VeterinariansData_1.VeterniariansData.Object3.lastName));
        editVet.clearFields();
        editVet.addVetForModel(VeterinariansData_1.VeterniariansData.Object4);
        editVet.clickTypeField();
        editVet.clickType1();
        editVet.clickSaveButton();
    });
    it("deleting the vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinarians();
        expect(allVets.deleteVets(VeterinariansData_1.VeterniariansData.Object4.firstName, VeterinariansData_1.VeterniariansData.Object4.lastName));
    });
});
