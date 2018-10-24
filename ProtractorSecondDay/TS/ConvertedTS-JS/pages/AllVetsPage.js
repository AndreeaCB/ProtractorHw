"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AllVetsPage {
    constructor() {
        //elements
        this.vetsList = protractor_1.$$("table td:nth-child(1)");
        this.editList = protractor_1.$$("table td:nth-child(3) > button.btn.btn-default:nth-child(1)");
        this.deleteList = protractor_1.$$("table td:nth-child(3) > button.btn.btn-default:nth-child(2)");
    }
    //methods
    getVetsList(firstName, lastName) {
        return this.vetsList.getText().then(vet => {
            return vet.includes(firstName + " " + lastName);
        });
    }
    editVets(firstName, lastName) {
        this.vetsList.getText().then(vet => {
            //console.log(vet);
            //textList.push(vet);nu am inteles de ce nu am putut sa parcurg si textlist-ul, ci a mers doar cu vet-ul
            //console.log(textList);
            for (var i = 0; i < vet.length; i++) {
                //console.log(i);
                if (vet[i] === (firstName + " " + lastName)) {
                    return this.editList.get(i).click();
                }
            }
        });
    }
    deleteVets(firstName, lastName) {
        this.vetsList.getText().then(vet => {
            for (var i = 0; i < vet.length; i++) {
                if (vet[i] === (firstName + " " + lastName)) {
                    return this.deleteList.get(i).click();
                }
            }
        });
    }
}
exports.AllVetsPage = AllVetsPage;
