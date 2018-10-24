import {$, $$, element} from "protractor";

export class MenuPage{
    //elements
    menuItems = $$(".nav.navbar-nav li a");
    homeButton = this.menuItems.get(0);
    allOwnersButton = this.menuItems.get(2);
    ownersButton= this.menuItems.get(1);
    addNewButton = this.menuItems.get(3);
    veterinariansButton= this.menuItems.get(4);
    allVeterinarians = this.menuItems.get(5);
    addVeterinariansButton = this.menuItems.get(6);
    petTypesButton= this.menuItems.get(7);
    specialtiesButton= this.menuItems.get(8);

    //methods
    clickOwnersButton(): void{
        this.ownersButton.click();
    }
    clickAddNewButton(): void{
        this.addNewButton.click();
    }
    clickAllOwnersButton(): void{
        this.allOwnersButton.click();
    }
    clickAddVeterinarians(): void{
        this.addVeterinariansButton.click();
    }
    clickVeterinariansButton(): void{
        this.veterinariansButton.click();
    }
    clickAllVeterinarians(): void{
        this.allVeterinarians.click();
    }
}