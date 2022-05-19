/*
Reducer change your state to send to your component/application.
*/

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, // Copy state.
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // gör vi en array av transactions och lägger in den in in array state.transactions.
                transactions: [action.payload, ...state.transactions] // payload är det du skickar med === data.
            }
        default:
            return state;
    }
};

export default AppReducer;