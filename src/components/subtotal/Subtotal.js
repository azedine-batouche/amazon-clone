import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import Button from "../button/Button";
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../context/reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p> 
                        <small className="subtotal__gift">
                            <input type="Checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"€"}
            />
            <Button
                content="Prceed to checkout"
            />

        </div>
    )
}

export default Subtotal
