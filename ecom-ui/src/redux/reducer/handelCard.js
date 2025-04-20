let card = [];

const handleCard = (state = card, action) => {
    const product = action.payload;
    if (!product) return state; // Vérifie que le produit est bien défini

    switch (action.type) {
        case "ADDITEM": {
            const existingProduct = state.find((x) => x._id === product._id);
            console.log(product._id)
            if (existingProduct) {
                // Toujours retourner un nouveau tableau
                return state.map((x) =>
                    x._id === product._id ? { ...x, qty: x.qty + 1 } : { ...x }
                );
            } else {
                return [
                    ...state,
                    { ...product, qty: 1 }
                ];
            }
        }

        case "DELITEM": {
            const foundProduct = state.find((x) => x._id === product._id);
            if (!foundProduct) return state; // Vérifie que le produit existe dans le panier

            if (foundProduct.qty === 1) {
                return state.filter((x) => x._id !== product._id);
            } else {
                return state.map((x) =>
                    x._id === product._id ? { ...x, qty: x.qty - 1 } : { ...x }
                );
            }
        }

        default:
            return state;
    }
};

export default handleCard;