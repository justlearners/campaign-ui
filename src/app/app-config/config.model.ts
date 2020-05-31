export class AppConfigModel {
    apiRoot: string;
    apiRootDev = 'http://localhost:8085';
    apiRootProd = 'http://localhost:8085';

    logLevel: 'DEBUG';
    apiVer = '1.0';


    protocol = window.location.protocol;
    hostname = window.location.hostname;
    baseUrl = '';

    constructor(){
        this.geturl();
    }


    geturl(){
        if(this.hostname == 'localhost' || this.hostname == '127.0.0.1'){
            this.baseUrl = this.protocol + '//' + this.hostname + ':8085';
        }
        else{
            this.baseUrl = this.protocol + '//' + this.hostname ;
        }
    }


    
}




// to make URL Dynamic, We can use

// let protocol = window.location.protocol;
// let hostname = window.location.hostname;

// let baseUrl = '';
// if (hostname === 'localhost') {
//     baseUrl = protocol + '//' + hostname + ':8080/';
// } else {
//     baseUrl = protocol + '//' + hostname + '/';












export class ApiModel {


    

    static Url = class {
         appConfigModel: AppConfigModel = new AppConfigModel;
         apiRoot = this.appConfigModel.baseUrl;

       
      //  apiRoot = this.baseUrl;
        apiRootUrl = this.apiRoot;
        campaignListUrl = this.apiRoot + '/campaignList';
        campaignDetailsUrl = this.apiRoot + '/campaignDetails?cid={cid}';
        allBookingsUrl = this.apiRoot + '/bookingFullDetails?cid={cid}';
        masterSlotListUrl = this.apiRoot + '/slotList';
        saveBookingUrl = this.apiRoot + '/saveBooking';
    }

    url = new ApiModel.Url();
}



export class SlotModel {
    id: string;
    config_key: string;
    config_value: string;
}

export class LoginModel {
    loginId: string;
    password: string;
}

export class UserProfileModel {
    id: string;
    loginId: string;
    userName: string;
    roleList: string[];
    isCCAdmin: boolean;
    isSuperAdmin: boolean;
    isDev: boolean;
    isVisitUser?: boolean;

}

