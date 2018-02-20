import { Action, Reducer } from "Redux";
import { AppThunkAction } from './';
import { fetch, addTask } from 'domain-task';
import axios from "axios"
import DIContainer from '../di/bootstrap'
import { IContactService } from '../services/ContactService'

export interface IContactState {
    Name: string,
    Email: string,
    Message: string,
    Verified: boolean,
    Valid: boolean
}

interface IContactFormSubmitAction {
    type: 'SUBMIT_CONTACT',
};

interface IContactFormReceiveContactAction {
    type: 'RECEIVED_CONTACT',
    valid: boolean
};


type KnownAction = IContactFormSubmitAction | IContactFormReceiveContactAction;

export const actionCreators = {

    submitContact: (contact): AppThunkAction<KnownAction> => (dispatch, getstate) => {

        let service = DIContainer.get<IContactService>("IContactService");
        let postContactTask = service.SubmitContact(contact)
            .then(response => {

                dispatch({ type: 'RECEIVED_CONTACT', valid: response });

            }).catch(() => {

            });

        dispatch({ type: 'SUBMIT_CONTACT' });

    }
    
};

export const unloadedState: IContactState = { Name: '', Email: '', Message: '', Verified:false, Valid:false }
export const reducer: Reducer<IContactState> = (state: IContactState, incomingAction: Action) => {


    
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SUBMIT_CONTACT':
            return {
                Name: state.Name,
                Email: state.Email,
                Message: state.Message,
                Verified: state.Verified,
                Valid: state.Valid
            };
        case 'RECEIVED_CONTACT':
            return {
                Name: state.Name,
                Email: state.Email,
                Message: state.Message,
                Verified: state.Verified,
                Valid: state.Valid
            };

    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState

}