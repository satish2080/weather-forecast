const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
    case 'ITEMS_IS_LOADING':
        return action.loading;
    default:
        return state;
    }
};
export default itemsIsLoading;
