export const selectContacts = store => store.contacts.items;
export const selectState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});
export const selectLoading = store => store.contacts.loading;
export const selectError = store => store.contacts.error;
