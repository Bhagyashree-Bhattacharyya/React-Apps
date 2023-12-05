import ListItem from "./ListItems/ListItem";
import {useState} from "react";

/*
const items = [
    {    
        id : 0,
        discountedPrice: 340,
        price: 450,
        title: "Title of the Item 1",
        thumbnail: "placeholder.png"
    },
    {
        id: 1,
        discountedPrice: 780,
        price: 850,
        title: "Title of the Item 2",
        thumbnail: "placeholder.png"
    },
    {
        id: 2,
        discountedPrice: 80,
        price: 150,
        title: "Title of the Item 3",
        thumbnail: "placeholder.png"
    },
    {
        id: 3,
        discountedPrice: 399,
        price: 490,
        title: "Title of the Item 4",
        thumbnail: "placeholder.png"
    }    
]
*/

const Product = () => {
//    const [title, setTitle] = useState("")
//    const [price, setPrice] = useState(0)
//    const [discountedPrice, setDiscountedPrice] = useState(0)
//    const [thumbnail, setThumbnail] = useState("")

    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    })

/*    
    const handleTitle = (event) => {
        // console.log(event)
        // console.log(event.target.value)
        setTitle(event.target.value)
        setItem({
            ...item,
            title: event.target.value
        })
    }

    const handlePrice = event => {
        setPrice(event.target.value)
        setItem({
            ...item,
            price: event.target.value
        })
    }

    const handleDiscountedPrice = event => {
        setDiscountedPrice(event.target.value)
        setItem({
            ...item,
            discountedPrice: event.target.value
        })
    }

    const handleThumbnail = event => {
        setThumbnail(event.target.value)
        setItem({
            ...item,
            thumbnail: event.target.value
        })
    }
*/

    const handleInput = event => {
        // console.log(event.target.value, event.target.name)
        setItem({
            ...item,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
//        console.log({
//            title: title,
//            price,
//            discountedPrice,
//            thumbnail
//        })
        if(item.discountedPrice > item.price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }
        console.log("Item Updated!", item)
//        setItem({
//            title,
//            price,
//            discountedPrice,
//            thumbnail
//        })
    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                <form onSubmit={submitForm}>
                    <h2>Item Card Details</h2>
                    <div className={"input-field"}>
                        <label htmlFor="title">Title</label>
                        <input 
                            name = "title"
                            type="text" 
                            placeholder="Enter Title" 
                            value={item.title} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="price">Price</label>
                        <input 
                            name = "price"
                            type="number" 
                            placeholder="Enter Price" 
                            value={item.price} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="discountedPrice">Discount Price</label>
                        <input 
                            name = "discountedPrice"
                            type="number" 
                            placeholder="Enter Discounted Price" 
                            value={item.discountedPrice} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input 
                            name = "thumbnail"
                            type="text" 
                            placeholder="Enter Thumbnail name" 
                            value={item.thumbnail} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"submit-wrap"}>
                        <button>Update</button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                    {/*
                    <ListItem data={items[1]} />
                    <ListItem data={items[2]} /> 
                    */}
                </div>
            </div>
        </div>
    )
}

export default Product;