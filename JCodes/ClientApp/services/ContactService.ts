import axios from 'axios';
import { injectable, inject } from 'inversify'
import { IAuthenticationService } from "./AuthenticationService"
import { IContactState } from '../store/Contact'

export interface IContactService {
    SubmitContact(contact: IContactState) : any;
}

@injectable()
export class ContactService implements IContactService {

    private authenticationService: IAuthenticationService;

    constructor(@inject("IAuthenticationService") authenticationService: IAuthenticationService) {
        this.authenticationService = authenticationService;
    }

    public SubmitContact(contact: IContactState) : any {
        
        var contactPost = {};
        contactPost["name"] = contact.Name;
        contactPost["email"] = contact.Email;
        contactPost["message"] = contact.Message;
        contactPost["verified"] = contact.Verified;

        return axios.post('/api/contact/',
            contactPost,
            {
                headers: {
                    "Authorization": "Bearer " + this.authenticationService.getAuthToken()
            }
        });

    }

}