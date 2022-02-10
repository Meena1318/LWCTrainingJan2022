import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ContactQuickCreate extends LightningElement {

    objectApiName = CONTACT_OBJECT;

    btnlabel = "Show All Contact Fields";

    showFields = false;
      
    btn()
    {
        this.showFields = !this.showFields;
        this.btnlabel = this.showFields ? "Hide All Contact Fields" : "Show All Contact Fields";        
    }

    handleSuccess(event)
    {
        const ev = new ShowToastEvent({
       title: 'SUCCESS',
       message: 'Contact Record created successfully',      
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