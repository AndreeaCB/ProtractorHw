import {Utils} from "../utilities/utils";
import {MenuPage} from "../pages/MenuPage";
import {browser} from "protractor";
import {OwnersPage} from "../pages/OwnersPage";
import {OwnersData} from "../TestData/OwnersData";
import {AllOwnersPage} from "../pages/AllOwnersPage";
import {VeterinariansPage} from "../pages/VeterinariansPage";
import {VeterniariansData} from "../TestData/VeterinariansData";
import {AllVetsPage} from "../pages/AllVetsPage";
import {EditVetsPage} from "../pages/EditVetsPage";

let menuPage = new MenuPage();
let ownersPage = new OwnersPage();
let allowners = new AllOwnersPage();
let addVet = new VeterinariansPage();
let allVets = new AllVetsPage();
let editVet = new EditVetsPage();
describe("Owners", () => {

    beforeEach(() => {
        Utils.goToHomePage();
    })

    it("Add a new owner - happy path", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAddNewButton();
        //ownersPage.addInformation(OwnersData.GigelHappyPath.firstName, OwnersData.GigelHappyPath.lastName, OwnersData.GigelHappyPath.address, OwnersData.GigelHappyPath.city, OwnersData.GigelHappyPath.telephone);
        ownersPage.addInformationForModel(OwnersData.AndreeaHappyPath);
        ownersPage.clickOnAddOwnerButton();
    });

    it("Add a new owner - check phone validation", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAddNewButton();
        ownersPage.addInformation(OwnersData.GigelPhoneValidation.firstName, OwnersData.GigelPhoneValidation.lastName, OwnersData.GigelPhoneValidation.address, OwnersData.GigelPhoneValidation.city, OwnersData.GigelPhoneValidation.telephone);
        ownersPage.addTelephone("fdsfds");

        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");

    });

    it("searching for owner", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        expect(allowners.getOwnerList(OwnersData.AndreeaHappyPath.firstName, OwnersData.AndreeaHappyPath.lastName)).toBeTruthy();

    })
});
describe("Vets", () => {

    beforeEach(() => {
        Utils.goToHomePage();
    })

    it("add new vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAddVeterinarians();
        //addVet.addVet(VeterniariansData.Object1.firstName, VeterniariansData.Object1.lastName);
        addVet.addVetForModel(VeterniariansData.Object2);
        addVet.addVetForModel(VeterniariansData.Object4);
        addVet.clickTypeField();
        addVet.addType();
        addVet.clickSaveButton();
    })
    it("searching for a new vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinarians();
        expect(allVets.getVetsList(VeterniariansData.Object1.firstName, VeterniariansData.Object1.lastName)).toBeTruthy();

    })

    it("editing the vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinarians();
        expect(allVets.editVets(VeterniariansData.Object3.firstName, VeterniariansData.Object3.lastName));
        editVet.clearFields();
        editVet.addVetForModel(VeterniariansData.Object4);
        editVet.clickTypeField();
        editVet.clickType1();
        editVet.clickSaveButton();
    })

    it("deleting the vet", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinarians();
        expect(allVets.deleteVets(VeterniariansData.Object4.firstName, VeterniariansData.Object4.lastName));
    })
});
