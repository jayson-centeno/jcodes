import axios from "axios";
import { IAuthenticationService } from "./AuthenticationService"
import { injectable, inject, multiInject } from "inversify"

export interface IPublicationService {
    getPublications():any
}

@injectable()
export class PublicationService implements IPublicationService
{
    private authenticationService: IAuthenticationService;

    constructor( @inject("IAuthenticationService") authenticationService: IAuthenticationService) {
        this.authenticationService = authenticationService;
    }

    public getPublications(): any {
        return axios.get('/api/publications/GetPublications', {
            headers: {
                "Authorization": "Bearer " + this.authenticationService.getAuthToken()
            }
        });
    }
}