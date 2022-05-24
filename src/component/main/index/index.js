import React, { useEffect, useState } from "react";
import './index.css';
import Form from "../../form/form";
import Model from "../../model/model";

const Index = (props) => {
    var [datas, tableData] = useState([]);
    var [listItems, listItemsData] = useState([]);
    var [editData, editDataData] = useState();

    const formSubmitData = (pram) => {
        tableData([...datas, pram]);
        tablePrint();
    }

    const tablePrint = () => {
        listItemsData(datas.map((item, index) =>
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td><button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => edit(item.id)}>Edit</button><button className="btn btn-sm btn-danger" onClick={() => deleteItem(item.id)}>Del</button></td>
            </tr>)
        );
    }

    useEffect(() => {
        tablePrint();
    }, [datas])


    const edit = (id) => datas.filter((item, i) => {
         if (item.id == id)
         editDataData(item);
         });

    const update = (updateItem) => datas.filter((item, i) => {
        if (item.id == updateItem.id){
        datas[i] = updateItem;
        tableData(datas);
        tablePrint();
        }
        });
   

    const deleteItem = (id) => {
        tableData(datas.filter((item, i) => item.id != id));
    }


    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <Form formData={formSubmitData} allRecord={datas} />
                    </div>
                    <div className="col-md-6">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        <Model edit={editData} updateRecord={update}/>

        </div>

    )
}

export default Index;