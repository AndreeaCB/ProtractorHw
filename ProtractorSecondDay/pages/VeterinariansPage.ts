import {$, $$, browser} from "protractor";
import {OwnerModel} from "../Models/OwnerModel";
import {VetModel} from "../Models/VetModel";

export class VeterinariansPage {
    //elements
    firstNameField = $("#firstName");
    lastNameField = $("#lastName");
    typeField = $("[name=specialties]");
    types = $$("#specialties option ");
   //type1=$("#mat-option-7");
    saveVetButton = $("[type=submit]");

    addVet(firstName: string, lastName: string) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
    }

    //sau
    addVetForModel(vet: VetModel) {
        this.firstNameField.sendKeys(vet.firstName);
        this.lastNameField.sendKeys(vet.lastName);
    }

    clickTypeField(): void {
        this.typeField.click();
    }
    // clickType1(){
    //     this.type1.click();
    // }
    addType(): void {
        //this.types.first().click();//cred ca trebuie sa fac metoda separata daca vreau sa imi selecteze mai mult de doua optiuni din dropdown :D
        this.types.last().click();
    }

    clickSaveButton(): void {
        this.saveVetButton.click();
    }
    clearFields(): void{
        this.firstNameField.clear();
        this.lastNameField.clear();
    }

}
