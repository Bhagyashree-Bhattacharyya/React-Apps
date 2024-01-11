import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
//import Form from "../Form"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "placeholder.png"
// }


const Product = ({ onAddItem, onRemoveItem, eventState }) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
//    const [presentItems, setPresentItems] = useState([])
/*        
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
        },
        {
            id: 3,
            title: "Title of this Item 4",
            price: 100,
            discountedPrice: 80,
            thumbnail: "placeholder.png"
        }
    ])
    */
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
    /*
    useEffect(() => {
        // fetch(`https://react-guide-2021-default-rtdb.firebaseio.com/items.json`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        axios.get('https://react-guide-2021-default-rtdb.firebaseio.com/items.json')
        .then(response => {
        //    console.log(response)
            const data = response.data
            const transformedData = data.map((item, index) => {
                return {
                    ...item,
                    id: index
                }
                setItems(transformedData)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    */

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://test-project-e-comm-default-rtdb.firebaseio.com/items.json')
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0,
                        id: index
                    }
                })
                setItems(transformedData)   
            } 
            catch (error) {
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally {
                setLoader(false)
            }
        }

        fetchItems();
    }, [])

    useEffect(() => {
        if(eventState.id > -1) {
            if(eventState.type === 1) {
                handleAddItem(eventState.id)
            }
            else if(eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }
    }, [eventState])

    {/*
    const updateItemTitle = async (itemId) => {
        console.log(`Item with ID: ${itemId}`)
        try {
            let title = `Update Title #Item-${itemId}`
            await axios.patch(`https://react-guide-2021-default-rtdb.firebaseio.com/items/${itemId}.json`, {
                title: title
            })
            let data = [...items]
            let index = data.findIndex(e => e.id === itemId)
            data[index]['title'] = title

            setItems(data)
        }
        catch(error) {
            console.log("Error Updating the data!");
        }
    }
    */}

    const handleAddItem = id => {
//        if(presentItems.indexOf(id) > -1) {
//            return;
//        }
//        setPresentItems([...presentItems, id])
//        onAddItem();
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1
        setItems([...data])
        onAddItem(data[index]);
    }

    const handleRemoveItem = id => {
//        let index = presentItems.indexOf(id)
//        if(index > -1) {
//            let items = [...presentItems]
//            items.splice(index, 1)
//            setPresentItems([...items]);
//            onRemoveItem();
//        }
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if (data[index].quantity !== 0){
            data[index].quantity -= 1
            setItems([...data])
            onRemoveItem(data[index]);
        }
    }

    return (
//        <div className={"product-wrapper"}>
//            <div className={"form"}>
//                <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
//            </div>
        <>
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {/* <ListItem data={item[0]} />
                    <ListItem data={item[1]} /> */}
                    {
                        items.map(item => {
                            console.log(item)
                            return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item}/>)
                        })
                    }
                </div>
            </div>
            { loader && <Loader/> }
        </>
//        </div>
    )
}

export default Product