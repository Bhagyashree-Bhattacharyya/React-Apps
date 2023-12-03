import AddToCardIcon from "../../../assets/icons/add_cart.svg"

const ListItem = ({data}) => {

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
            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src={AddToCardIcon} alt="cart icon" style={{ width: '20px', height: '20px' }}/>
            </button>
        </div>
    )
}

export default ListItem;