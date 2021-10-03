import { useState } from "react";

function FormInput() {
    const [formItem, updateFormItem] = useState({
        product: null,
        price: null
    });

    const [toBuyList, setBuyList] = useState([]);

    // const showBuyList = setBuyList.map((m) => {
    //     return (
    //         <li>"Product",{m.product},"$",{m.price}</li>
    //     )
    // })
    //const [toBuyList, setBuyList] = useState(`${toBuyList.product} ${toBuyList.price}`);  
    

    const updateForm = (e) => { 
        const data = {...formItem};
        switch(e.target.name){
            case "product":
                data.product = e.target.value;
                break;
            case "price":
                data.price = e.target.value;
                break;
        }
        updateFormItem(data);
    };

    
    // const [list, displayList] = useState({
    //     Product: setBuyList(data.product),
    //     Price: setBuyList(data.price)
    // })

    //revisit modern javascript & iteration: 1.11

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formItem.product,formItem.price);
        const newItem = {
            product: formItem.product,
            price: formItem.price
        }
        const newToBuyList = [...toBuyList,newItem];
        setBuyList(newToBuyList);
        console.log(...toBuyList);
        console.log (toBuyList);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product: </label>
                <input type = "text" placeholder = "Product Name" name = "product" onChange ={updateForm}/><br /><br />
                <label>Price: </label>
                <input type = "text" placeholder = "Price" name = "price" onChange ={updateForm}/>
                <button>add</button> 
                {/* <button onClick={e => setBuyList(toBuyList.product.value, toBuyList.price.value)}>add</button>    */}
            </div>
            <div>
                {/* <ul>{toBuyList.product}{toBuyList.price}</ul> */}
                {/* return <ul>{showBuyList}</ul> */}
            </div>
        </form>
        </>
    )
         
}

export default FormInput;