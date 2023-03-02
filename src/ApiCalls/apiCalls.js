import { userRequest } from "../requestMethods/requestMethods";
import { toast } from 'react-toastify';
import { cartStart, cartFail, addProductSuccess, deleteProductSuccess, decreaseProductFromCart, increaseProductFromCart, updateCartSuccess } from "../Redux/cartSlice"

export const successToast = (message) => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}

export const failureToast = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}



export const addProductToCart = async (dispatch, product, quantity, maxQuantity) => {

    const form = new FormData()
    form.append("product", product._id)
    form.append("quantity", quantity)
    form.append("price", product.price)
    form.append("max", maxQuantity)

    dispatch(cartStart());
    try {
        const response = await userRequest.post("/cart", form)
        const cart = response.data.cart
        console.log(cart);
        dispatch(updateCartSuccess({cart}))
        successToast("Product added to cart!")
    }
    catch (err) {
        console.log(err.response?.data || err);
        failureToast( err.response.data || "Could not add to cart!")
        dispatch(cartFail())
    }

}




export const deleteProductFromCart = (dispatch, prodId) => {
    dispatch(cartStart());
    try {
        dispatch(deleteProductSuccess(prodId))
        successToast("Product deleted from cart!")
    }
    catch (err) {
        console.log(err);
        failureToast("Could not delete from cart!")
        dispatch(cartFail())
    }

}



export const decreaseItemFromCart = (dispatch, prodId) => {
    dispatch(cartStart())
    try {
        dispatch(decreaseProductFromCart(prodId));
    }
    catch (err) {
        console.log(err);
        dispatch(cartFail())
    }
}




export const increaseItemFromCart = (dispatch, prodId) => {
    dispatch(cartStart())
    try {
        dispatch(increaseProductFromCart(prodId));
    }
    catch (err) {
        console.log(err);
        dispatch(cartFail())
    }
}




export const getSalesStats = async () => {
    try {
        const response = await userRequest.get("/orders/sales/analytics");
        return response.data;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}

export const getOrdersStats = async () => {
    try {
        const response = await userRequest.get("/orders/orders/analytics");
        return response.data
    }
    catch (err) {
        console.log(err.response?.data);
    }
}

export const getUserStats = async () => {
    try {
        const response = await userRequest.get("/orders/users/analytics");
        return response.data;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}