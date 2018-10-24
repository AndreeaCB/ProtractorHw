import {$, $$, browser} from "protractor";

export class AllVetsPage {
    //elements
    vetsList = $$("table td:nth-child(1)");
    editList = $$("table td:nth-child(3) > button.btn.btn-default:nth-child(1)");
    deleteList = $$("table td:nth-child(3) > button.btn.btn-default:nth-child(2)");

    //methods
    getVetsList(firstName: String, lastName: String){
        return this.vetsList.getText().then(vet => {
            return vet.includes(firstName+ " "+ lastName);
        });
    }

    editVets(firstName: String, lastName: String){
        this.vetsList.getText().then(vet => {
            //console.log(vet);
            //textList.push(vet);nu am inteles de ce nu am putut sa parcurg si textlist-ul, ci a mers doar cu vet-ul
            //console.log(textList);
            for (var i=0; i< vet.length; i++){
                //console.log(i);
                if(vet[i]===(firstName + " " + lastName)){
                    return this.editList.get(i).click();
                }
            }
        });
    }
    deleteVets(firstName: String, lastName: String){
        this.vetsList.getText().then(vet => {
            for (var i=0; i< vet.length; i++){
                if(vet[i]===(firstName + " " + lastName)){
                    return this.deleteList.get(i).click();
                }
            }
        });
    }
}



