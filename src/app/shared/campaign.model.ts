
export class Campaign  {
    

   constructor(public id : string,public name : string, public shortdesc : string,
       public longdesc : string,
       public startdate :string, public enddate :string,
       public main_logo: string,public slogan: string,
       public footer_logo1: string,public footer_logo2: string,
       public contact1_name: string,public contact1_contact: string, 
       public contact2_name: string,public contact2_contact: string
       ){}
}


