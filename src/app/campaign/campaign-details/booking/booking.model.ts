
export class Booking  {    
    public cid : number;
    public booking_date : string;
    public  slot :string;
    public createdBy :string;
    public usr: User
    
}
export class User  {
    public uname : string;
    public email : string;
    public contact :string; 
    public address :string;
    public city: string;
    public state: string;
    public country: string;
    public created_by: string
 }

