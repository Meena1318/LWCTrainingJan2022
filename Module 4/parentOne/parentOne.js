import { LightningElement, api } from 'lwc';

export default class ParentOne extends LightningElement {
    selection1 = "Deselected";
    selection2 = "Deselected";
    selection3 = "Deselected";

    @api parentReset(){
        this.selection1 = "Deselected";
        this.selection2 = "Deselected";
        this.selection3 = "Deselected";

        this.template.querySelector('c-child-one').childReset();
        this.template.querySelector('c-child-two').childReset();
        this.template.querySelector('c-child-three').childReset();
    }

    btnSelection(event){
        switch(event.target.childName){
            case "ChildOne":
                event.target.btnlabel === "Select" ? this.selection1 = "Selected" : this.selection1 = "Deselected";
                break;
            case "ChildTwo":
                event.target.btnlabel === "Select" ? this.selection2 = "Selected" : this.selection2 = "Deselected";
                break;
            case "ChildThree":
                event.target.btnlabel === "Select" ? this.selection3 = "Selected" : this.selection3 = "Deselected";
                break;
        }
    }
}