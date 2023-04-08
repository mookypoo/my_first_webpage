export class Profile {
    constructor(fullName = "", occupation, email, phoneNumber, website) {
        this.fullName = fullName;
        this.occupation = occupation;
        this.email = email;
        this.phoneNumber = this.convertPhoneNumber(phoneNumber);
        this.website = website;
    }

    convertPhoneNumber = (phoneNumber) => {
        return `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3, 7)}-${phoneNumber.substring(7)}`
    }
}

//const myProfile = new Profile( "김혜수", "개발자", "sookim482.dev@gmail.com", "01025178351", "https://medium.com/@mookypoo")
