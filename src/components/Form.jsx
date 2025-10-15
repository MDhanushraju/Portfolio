import React, { useEffect, useState } from 'react'

export default function Form() {
    let [products, setProducts] = useState([])
    let [search, setSearch] = useState([])


    useEffect(()=>{
        setProducts(product)
        setSearch(product)
    },[])

    let handleFileter=(min,max)=>{
        let filterData=products.filter((e)=>e.Age>=min && e.Age<=max)
        setSearch(filterData)

    }


    let product = [
        {
            id: 1,
            Name: "Dhanush",
            Age: 22
        },
        {
            id: 2,
            Name: "B",
            Age: 35
        },
        {
            id: 3,
            Name: "C",
            Age: 45
        }, {
            id: 4,
            Name: "D",
            Age: 50
        }
    ]
    





    return (
        <>
            <div className="container main">


                <button onClick={()=>handleFileter(20,30)}>above 20</button>
                <button onClick={()=>handleFileter(30,40)}>above 30</button>
                <button onClick={()=>handleFileter(40,50)}>above 40</button>
                <button onClick={()=>handleFileter(50,60)}>about 50</button>
              <button onClick={()=>setSearch(products)}>Reset</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>



                    {
                        search.map((iteam) => (
                            <tbody key={iteam.id}>
                                <tr>
                                    <td>{iteam.id}</td>
                                    <td>{iteam.Name}</td>
                                    <td>{iteam.Age}</td>
                                </tr>
                            </tbody>

                        ))
                    }

                </table>
            </div>
        </>
    )
}
