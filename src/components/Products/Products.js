import { useState } from "react"
import ListItem from "./ListItems/ListItem"
//import Form from "../Form"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "placeholder.png"
// }


const Product = () => {
    const [items, setItems] = useState([
        {
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
        },
        {
        id: 1,
        title: "Title of this Item 2",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
        },
        {
        id: 2,
        title: "Title of this Item 3",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
        }
    ])
/*
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
*/
    return (
//        <div className={"product-wrapper"}>
//            <div className={"form"}>
//                <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
//            </div>
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {/* <ListItem data={item[0]} />
                    <ListItem data={item[1]} /> */}
                    {
                        items.map(item => {
                            console.log(item)
                            return (<ListItem key={item.id} data={item}/>)
                        })
                    }
                </div>
            </div>
//        </div>
    )
}

export default Product