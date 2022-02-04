import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    result = '';
    clickLabel = '';
    clr = false;
    opr = '';
    getOps = {
        val : 0,
        '=': function(){
            return this.val;
        },
        '+': function(n){
            this.val += parseInt(n);
            return this;
        },
        '-': function(n){
            this.val -= parseInt(n);
            return this;
        },
        '*': function(n){
            this.val *= parseInt(n);
            return this;
        },
        '/': function(n){
            this.val /= parseInt(n);
            return this;
        }
    }

    get showResult(){
        return this.getOps.val;
    }

    
    buttonClr(event){        
        this.clickLabel = this.clickLabel + event.target.label;
         if (event.target.label === "CLR"){
             this.result = '';
             this.clickLabel = '';
             this.getOps.val = 0;
         } 
     }

   

    button(event){        
        this.clickLabel = this.clickLabel + event.target.label;        
         if (event.target.label === "+"){
            if (this.getOps.val === 0)
            {
                this.getOps.val = parseInt(this.result);
            }
            else{
                this.result = this.getOps[this.opr](this.result);
            }
            this.opr = '+';
            this.result = '';
        }
        else if (event.target.label === "-"){
            if (this.getOps.val === 0)
            {
                this.getOps.val = parseInt(this.result);
            }
            else{
                this.result = this.getOps[this.opr](this.result);
            }
            this.opr = '-';
            this.result = '';
        }
        else if (event.target.label === "*"){
            if (this.getOps.val === 0)
            {
                this.getOps.val = parseInt(this.result);
            }
            else{
                this.result = this.getOps[this.opr](this.result);
            }
            this.opr = '*';
            this.result = '';
        }
        else if (event.target.label === "/"){
            if (this.getOps.val === 0)
            {
                this.getOps.val = parseInt(this.result);
            }
            else{
                this.result = this.getOps[this.opr](this.result);
            }
            this.opr = '/';
            this.result = '';
        }
        else if (event.target.label === "="){
            this.result = this.getOps[this.opr](this.result);
            this.result = this.getOps['=']();
            this.clr = true;
        }
        else{
            this.result = this.result + event.target.label;
            
        }
    }

   
  /* button1(event){
       this.buttonlabel = event.target.label;
       if(this.buttonlabel = '+')
       {
           this.result+=parseInt(n);
           return this;
       }
       else(this.buttonlabel = '-')
       {
           this.result-=parseInt(n);
           return this;
       }
   }

   changeInput(event){
    this.val = event.detail.value;
    if(this.val=='+')
    {
        this.result+=parseInt(n);
    }

    else (this.val=='-')
    {
        this.result-=parseInt(n);
    }

   }

   get showResult(){
    return this.result;
} */

   
}