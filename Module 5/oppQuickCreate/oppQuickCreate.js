import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class OppQuickCreate extends LightningElement {

    objectApiName = OPPORTUNITY_OBJECT;

    btnlabel = "Show All Opportunity Fields";

    showFields = false;
      
    btn()
    {
        this.showFields = !this.showFields;
        this.btnlabel = this.showFields ? "Hide All Opportunity Fields" : "Show All Opportunity Fields";        
    }

    handleSuccess(event)
    {
        const ev = new ShowToastEvent({
       title: 'SUCCESS',
       message: 'Opportunity Record created successfully',      
        variant: 'success',        
    });
        this.dispatchEvent(ev);
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
        element.reset();
    });
    }
    handleReset()
    {
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
            element.reset();
        });
    }

} 