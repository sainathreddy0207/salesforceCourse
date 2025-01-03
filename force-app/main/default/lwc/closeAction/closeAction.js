import { LightningElement, api } from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName'
import ID_FIELD from '@salesforce/schema/Opportunity.Id'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CloseAction extends LightningElement {

    
    @api recordId
    @api invoke(){
        const fields={}
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[STAGENAME_FIELD.fieldApiName] = 'Closed';
        const recordInput = {fields}
        updateRecord(recordInput).then(()=>{
            this.showToast("Sucess!", "Opportunity Closed SucessFully", "sucess")


        }).catch(error=>{
            this.showToast("Error!", error.message, "error")

        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title, message,variant
        }))

    }
}