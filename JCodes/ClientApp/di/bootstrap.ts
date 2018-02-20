import "reflect-metadata";
import { Container } from "inversify"

import { AuthenticationService, IAuthenticationService } from "../services/AuthenticationService"
import { PublicationService, IPublicationService } from "../services/PublicationService"
import { ContactService, IContactService } from "../services/ContactService"

let container = new Container();
container.bind<IAuthenticationService>("IAuthenticationService")
         .to(AuthenticationService);

container.bind<IPublicationService>("IPublicationService")
    .to(PublicationService);

container.bind<IContactService>("IContactService")
    .to(ContactService);

export default container;