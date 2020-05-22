export class UserBooking {
    constructor(
        public campaignName: string,
        public name: string,
        public address: string,
        public city: string,
        public email: string,
        public phone: number,
        public date: string,
        public timeSlot: string) { }
}