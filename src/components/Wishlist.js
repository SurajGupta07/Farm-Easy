/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import { WISHLIST_API } from "../dbconnect/dbconnect";
import Loader from "../src_images/loader.gif";
import { useCart } from "../contexts/CartContext";
import { useCartAction } from "../hooks/useCartAction";
import { useAuth } from "../contexts/AuthContext";

function ShowWishListItem() {
    let { token } = useAuth();
    let { wishlistItems, setWishlistItems } = useCart();
    let { removeFromWishlist } = useCartAction();
    useEffect(() => {
        axios
            .get(`${WISHLIST_API}`, {
                headers: {
                    authorization: token,
                },
            })
            .then((response) => {
                setWishlistItems(response.data.wishlist);
            });
    });
    return wishlistItems.map(({ _id, name, price, image }) => (
        <div key={_id} className="card card-body card-spacing">
            <img src={image} alt="Logo" className="card-img" />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">Rs. {price}</p>
            <button
                className="default-button"
                onClick={() => removeFromWishlist(_id)}
            >
                Remove from wishlist
            </button>
        </div>
    ));
}

export function Wishlist() {
    let { wishlistItems } = useCart();
    return (
        <div>
            <h1 className="main-header">Wishlist</h1>
            <ul>
                {wishlistItems ? (
                    ShowWishListItem(wishlistItems)
                ) : (
                    <div className="loaderGif">
                        <img
                            style={{ height: "5rem", width: "5rem" }}
                            alt="Loader"
                            src={Loader}
                        />
                    </div>
                )}
            </ul>
        </div>
    );
}
