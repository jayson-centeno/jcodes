import { Action, Reducer } from "Redux";
import { AppThunkAction } from './';
import { fetch, addTask } from 'domain-task';
import axios from "axios"
import { IPublicationService } from "../services/PublicationService";
import container from "../di/bootstrap"

export interface PublicationsState {
    isLoading: boolean
    publications: Publication[]
}

export interface Publication {
    id: number
    title: string
    description:string
}

interface IRequestPlublicationAction {
    type: 'FetchPublications',
};

interface IReceivePlublicationAction {
    type: 'ReceivePublications',
    publications: Publication[]
};

type KnownAction = IRequestPlublicationAction | IReceivePlublicationAction;

export const actionCreators = {

    fetchPublications: () : AppThunkAction<KnownAction> => (dispatch, getstate) => {
        
        let service = container.get<IPublicationService>("IPublicationService");
        let fetchTask = service.getPublications()
            .then(response => {

                const data = response.data as Publication[];
                console.log(data[0].title);
                dispatch({ type: 'ReceivePublications', publications: data }); 

            })
            .catch(() => {
                
            });

        addTask(fetchTask);
        dispatch({ type: 'FetchPublications' });

    }

}

const unloadedState: PublicationsState = { isLoading: false, publications: [] }
export const reducer: Reducer<PublicationsState> = (state: PublicationsState, incomingAction: KnownAction) =>
{
    switch (incomingAction.type) {
        case 'FetchPublications':
            return {
                publications: state.publications,
                isLoading: true
            }
        case 'ReceivePublications': {
            return {
                isLoading: false,
                publications: incomingAction.publications
            }
        }
    }

    return state || unloadedState;
}