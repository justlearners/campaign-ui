export class AppConfigModel {
    apiRoot: string;
    apiRootDev = 'http://localhost:8085';
    apiRootProd = 'http://localhost:8085';

    logLevel: 'DEBUG';
    apiVer='1.0';
}

export class ApiModel {
    static Url = class {
        appConfigModel: AppConfigModel = new AppConfigModel;
		apiRoot = this.appConfigModel.apiRootDev;
		//apiRoot = "";        
        apiRootUrl = this.apiRoot;
        campaignListUrl = this.apiRoot +'/campaignList';
        campaignDetailsUrl = this.apiRoot +'/campaignDetails?cid={cid}';
        allBookingsUrl = this.apiRoot +'/bookingFullDetails?cid={cid}';
        masterSlotListUrl = this.apiRoot +'/slotList';
        saveBookingUrl = this.apiRoot +'/saveBooking';

       
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

