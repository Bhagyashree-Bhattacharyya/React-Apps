import AddToCardIcon from "../../../assets/icons/add_cart.svg"
import {useState} from "react"

const ListItem = ({data}) => {
/*
    const [message, setMessage] = useState("Not added to the cart yet!!")

//    let message = "Not added to the cart yet!!"
    const handleClick = () => {
//        message = "Added to the cart!"
        setMessage("Added to the cart!")
        console.log("clicked!!", message)
    }
*/
    
    const [counter, setCounter] = useState(0)

    const increaseCounterByOne = () => {
        //increament logic
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = () => {
        //decreament logic
        if(counter <= 0){
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div className={"item-card"}>
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
                counter < 1 ?
                <button className={"cart-add"} onClick={increaseCounterByOne}>
                    <span>Add to Cart</span>
                    <img src={AddToCardIcon} alt="Cart Icon"/>
                </button>
                :
                <div className="cart-addon">
                    <button onClick={descreaseCounterByOne}><span>-</span></button>
                    <span>{counter}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>
            }
        </div>
    )
}

export default ListItem;