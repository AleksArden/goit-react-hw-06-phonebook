import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { contactsInitState } from "./contacts.init-state";
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: "listContacts",
    initialState: contactsInitState,
    reducers: {
        addContactAction: {
            reducer(state, { payload }) {
                state.listContacts.push(payload)

            },
            prepare(newContact) {
                return {
                    payload: {
                        id: nanoid(), ...newContact,
                    }
                }
            }
        },
        deleteContactAction(state, { payload }) {
            // const index = state.findIndex(({ id }) => id === payload);
            // state.splice(index, 1);
            state.listContacts = state.listContacts.filter(({ id }) => id !== payload)
        },
    }
});


export const { addContactAction, deleteContactAction } = contactsSlice.actions;

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)
// export const contactsReducer = contactsSlice.reducer