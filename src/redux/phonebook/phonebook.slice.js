import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [],
        filter: "",
    },
    reducers: {
        addContactAction(state, { payload }) {
            state.contacts.push(payload);
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

