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
        campaignListUrl = this.apiRoot +'/campaignList';
       
    }
    
    url = new ApiModel.Url();
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

export class UiConfigModel {
    id: string;
    configKey: string;
    configValue: string;
    refKey: string;
    refValue: string;
    isActive: string;    
}


export class WhitelistIpModel {
    whitelistFlag: string;    
}

export class ApiStatusIndicator {
    isLoading = false;
    message: string;
}

export enum ResponseCodeType {
    SUCCESS = '200',
    NO_CONTENT = '204',
}

export class ServerConfigModel {
    SENSE_AUTH_TOKEN: string;
    DATA_ENGINE: string;
}
