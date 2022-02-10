import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class AccountQuickCreate extends LightningElement {

    objectApiName = ACCOUNT_OBJECT;

    btnlabel = "Show All Account Fields";

    showFields = false;
      
    btn()
    {
        this.showFields = !this.showFields;
        this.btnlabel = this.showFields ? "Hide All Account Fields" : "Show All Account Fields";        
    }

    handleSuccess(event)
    {
        const ev = new ShowToastEvent({
       title: 'SUCCESS',
       message: 'Account Record created successfully',      
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