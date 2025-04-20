export const addItem = (product) => {
    if (!product) {
        console.error("addCard: le produit est undefined");
        return;
    }
    return {
        type: "ADDITEM",
        payload: product
    };
};

export const delItem = (product) => {
    if (!product) {
        console.error("delCard: le produit est undefined");
        return;
    }
    return {
        type: "DELITEM",
        payload: product
    };
};