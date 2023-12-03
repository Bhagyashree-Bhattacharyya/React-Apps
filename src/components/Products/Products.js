import ListItem from "./ListItems/ListItem";


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

const Products = () => {
    return (
    <div className={"product-list"}>
        <div className={"product-list--wrapper"}>
            <ListItem data ={items[0]}/>
            <ListItem data ={items[1]}/>
            <ListItem data ={items[2]}/>
            <ListItem data ={items[3]}/>
        </div>
    </div>)
}

export default Products;