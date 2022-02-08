import { LightningElement, api } from 'lwc';

export default class ChildTwo extends LightningElement {
    @api btnlabel = "Select";
    btnStyle = "success";
    @api childName = "ChildTwo";

    @api childReset(){
        this.btnlabel = "Select";
        this.btnStyle = "success";
    }

    handleClick(event){
        const event1 = new CustomEvent('childclick',
        {
            bubbles: true,
            composed: true,
            detail: this.btnlabel
        });
        this.dispatchEvent(event1);

        if (this.btnlabel === "Select"){
            this.btnlabel = "Deselect";
            this.btnStyle = "destructive";
        }
        else{
            this.btnlabel = "Select";
            this.btnStyle = "success";
        }
    }
}