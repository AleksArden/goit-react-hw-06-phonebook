import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phonebookInitState } from './phonebook.init-state';

import { nanoid } from 'nanoid';

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: phonebookInitState,
    reducers: {
        addContactAction: {
            reducer(state, { payload }) {
                state.contacts.push(payload);
            },
            prepare(newContact) {
                return {
                    payload: {
                        id: nanoid(),
                        ...newContact,
                    },
                };
            },
        },
        deleteContactAction(state, { payload }) {
            state.contacts = state.contacts.filter(({ id }) => id !== payload);
        },
        filterAction(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const { addContactAction, deleteContactAction, filterAction } = phonebookSlice.actions;

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

export const phonebookReducer = persistReducer(
    persistConfig,
    phonebookSlice.reducer
);

