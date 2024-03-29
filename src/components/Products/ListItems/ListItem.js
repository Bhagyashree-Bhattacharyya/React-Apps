import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import {Fragment, useState} from "react"
import Modal from "../../UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { addItemHandler } from "../../actions"

const ListItem = ({  data  }) => {
/*
    const [message, setMessage] = useState("Not added to the cart yet!!")

//    let message = "Not added to the cart yet!!"
    const handleClick = () => {
//        message = "Added to the cart!"
        setMessage("Added to the cart!")
        console.log("clicked!!", message)
    }
*/
    
//    const [counter, setCounter] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const item = useSelector(state => state.items.find(item => item.id === data.id))
    const dispatch = useDispatch()

    const increaseCounterByOne = event => {
        event.stopPropagation()
        dispatch(addItemHandler(data))
//        dispatch({
//            type: "ADD_ITEM",
//            payload: {
//                item: data
//            }
//        })
    //    onAdd(data.id)
//        setCounter(counter+1)
    }

    const decreaseCounterByOne = event => {
        event.stopPropagation()
        dispatch(removeItemHandler(data.id))
//        dispatch({
//            type: "REMOVE_ITEM",
//            payload: {
//                id: data.id
//            }
//        })
    //    onRemove(data.id);
//        if(counter === 0) {
//            return;
//        }
//        if(counter === 1) {
//            onRemove(data.id);
//        }
//        setCounter(counter-1)
    }


    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    return (
        <Fragment>
            <div onClick={handleModal}  className={"item-card"}>
                <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} style={{ width: '200px', height: 'auto' }} />
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span>${data.discountedPrice}</span>
                        <small>
                            <strike>{data.price}</strike>
                        </small>
                    </div>
                    <div className={"title"}>
                        <h4>{data.title}</h4>
                    </div>
                </div>
                {/* 
                <button onClick={() => updateItemTitle(data.id)}>Update the title</button>
                */}
                {/*
                <div>
                <small className={"cart-msg"}>{message}</small>
                <button className={"cart-add"}>
                    <span>Add to Cart</span>
                    <img src={AddToCardIcon} alt="cart icon" style={{ width: '20px', height: '20px' }}/>
                </button>
                <span>
                    <div className={"cart-addon"}>
                        <button onClick={descreaseCounterByOne}><span>-</span></button>
                        <span className={"counter"}>{counter}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>
                </span>
                </div>
                */}
                {
                    !item || item?.quantity < 1 ? //data.quantity before using redux-store
                    <button className={"cart-add"} onClick={increaseCounterByOne}>
                        <span>Add to Cart</span>
                        <img src={AddToCartIcon} alt="Cart Icon"/>
                    </button>
                    :
                    <div className="cart-addon">
                        <button onClick={decreaseCounterByOne}><span>-</span></button>
                        <span>{item.quantity}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>
                }
            </div>
            { showModal && 
            <Modal onClose={handleModal}>
                <div className="item-card__modal">
                    <div className="img-wrap">
                        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                    </div>
                    <div className="meta">
                        <h3>{data.title}</h3>
                        <div className={"pricing"}>
                            <span>₹{data.discountedPrice}</span>
                            <small>
                                <strike>₹{data.price}</strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {
                            !item || item?.quantity < 1 ?
                            <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                <span>Add to Cart</span>
                                <img src={AddToCartIcon} alt="Cart Icon"/>
                            </button>
                            :
                            <div className="cart-addon card-addon__modal">
                                <button onClick={decreaseCounterByOne}><span>-</span></button>
                                <span>{item.quantity}</span>
                                <button onClick={increaseCounterByOne}><span>+</span></button>
                            </div>
                        }
                    </div>
                    </div>
            </Modal>}
        </Fragment>
    )
}



export default ListItem;