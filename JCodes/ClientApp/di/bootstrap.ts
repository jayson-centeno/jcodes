import "reflect-metadata";
import { Container } from "inversify"

import { AuthenticationService, IAuthenticationService } from "../services/AuthenticationService"
import { PublicationService, IPublicationService } from "../services/PublicationService"

let container = new Container();
container.bind<IAuthenticationService>("IAuthenticationService")
         .to(AuthenticationService);

container.bind<IPublicationService>("IPublicationService")
    .to(PublicationService);

export default container;