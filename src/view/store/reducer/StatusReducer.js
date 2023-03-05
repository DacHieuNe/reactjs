import { faker } from '@faker-js/faker';


const initState = Array.from({length: 6}, (e, i) => ({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    avatar: faker.image.food(),       
    status: i % 2 == 0 ? "IN STOCK" : "OUT OF STOCK"
}));

const StatusReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_POST": {
            const dataNew = {
                id: faker.datatype.uuid(),
                avatar: faker.image.food(),       
                ...action.payload
            }
            return [
                ...state,
                dataNew
            ]
        }
        case "DELETE_POST": {
            const { id } = action.payload;
            return state.filter(e => e.id != id);
        }
        case "EDIT_POST": {
            // const { index , value } = action.payload;
            const stateFake = [...state];
            // stateFake[index].title = value;
            return stateFake;
        }
        default: {
            return state;
        }
    }
}

export default StatusReducer;