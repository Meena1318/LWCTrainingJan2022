import { LightningElement } from 'lwc';

export default class Address extends LightningElement {
    currentAd1;
    currentAd2
    cuurentLand;
    currentCode;
    checkBox;

    ad1(event){
        this.cuurentAd1=event.target.value;
    }

    ad2(event){
        this.currentAd2=event.target.value;
    }

    landmark(event){
        this.currentLand=event.target.value;
    }

    code(event){
        this.currentCode=event.target.value;
    }

    onchangecheckbox(event){
        this.checkBox=event.target.checked;
    }
}