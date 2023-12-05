import { useState } from "react"
import ListItem from "./ListItems/ListItem"
import Form from "../Form"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "placeholder.png"
// }


const Product = () => {
    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    })

    const handleInput = event => {
        // console.log(event.target.value, event.target.name)
        setItem({
            ...item,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        if(item.discountedPrice > item.price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }
        console.log("Item Updated!", item)
    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                </div>
            </div>
        </div>
    )
}

export default Product