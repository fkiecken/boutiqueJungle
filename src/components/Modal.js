import '../styles/Modal.css'
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({isShowing, hide, name, isSpecialOffer, conseilWater, conseilLight}) =>
        isShowing ?
        ReactDOM.createPortal(
            <>
            <div className='containerModal'>
                <h2>{name}</h2>
                <span>La plante <b>{ name }</b> a besoin de <b>{ conseilLight }</b> de lumière et <b>{ conseilWater }</b> d'eau de plus elle est <b>{isSpecialOffer === true ? 'en promo' : 'pas en promo'}</b></span><br/><br/>
                <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                >
                Fermer
                </button>
            </div>
            </>,
            document.body
        ) : null

export default Modal