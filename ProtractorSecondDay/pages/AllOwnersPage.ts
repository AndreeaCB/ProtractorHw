import {$, $$, browser} from "protractor";

export class AllOwnersPage {
    //elements
    ownerList = $$("td.ownerFullName a");

    //methods
    getOwnerList(firstName: String, lastName: String){
        return this.ownerList.getText().then(owner => {
                return owner.includes(firstName+ " "+ lastName);
        });


    }
}