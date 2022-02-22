import { showToast } from "./toast";

const showErrToast = (err) => {
    if(err.response && err.response.data) {
        if(!err.response.data.detail && !err.response.data.error){
            showToast('', err.response.statusText, 'danger');
            return;
        }

        if(err.response.data.detail) {
            showToast('', err.response.data.detail, 'danger');
            return;
        }

        let errorResponse = err.response.data.error
        if(errorResponse.detail.startsWith('[ErrorDetail')) {
            errorResponse.detail = errorResponse.detail.split("'")[1]
        } 
        
        showToast('', errorResponse.detail, 'danger');
        return;
    }

    showToast('',err.message,'danger');
}

export default showErrToast;