import Layout from "../../../components/layout";

import Head from "next/head";
// import { useRouter } from 'next/router'

import { useState, useEffect } from "react";
import axios from "axios";

export default function addItem() {
  //* Object Definition
  // const router = useRouter()

  //* Defining States
  const [data, setdata] = useState({
    item_name: "",
    category_id: "",
    price: "",
    item_desc: "",
    quantity: "",
    image: "",
    admin_id: "0",
  });
  const [cate, setcate] = useState([
    { category_id: 99999, category_name: "Select" },
  ]);
  const [iscateEmpty, setcateEmpty] = useState(false);
  const [datachanged, setdatachanged] = useState(0);

  //* FOR GETTING MULTIPART FORMDATA FOR BACKEND
  function GetForm(Data) {
    const formData = new FormData();

    for (var key in Data) {
      // check if the property/key is defined in the object itself, not in parent
      if (Data.hasOwnProperty(key)) {
        formData.append(key, Data[key]);
      }
    }
    return formData;
  }

  async function catData(id) {
    const requests = await axios.get(
      "https://feasta-postgres.herokuapp.com/menu/get_category",
      {
        params: {
          admin_id: id,
        },
      }
    );
    // Setting Category Array
    requests.data.data.map((data, key) => {
      setcate((cate) => [...cate, data]);
      //console.log(cate)
    });

    if (cate.length == 1) {
      setcateEmpty(true);
    } else {
      setcateEmpty(false);
    }
  }

  async function setData(amn_id, itm_id) {
    const requests = await axios.get(
      "https://feasta-postgres.herokuapp.com/menu/get_item/",
      {
        params: {
          item_id: itm_id,
          admin_id: amn_id,
        },
      }
    );

    requests.data.data.map((data, key) => {
      setdata({
        ...data,
        item_name: data.item_name,
        item_desc: data.item_desc,
        price: data.price,
        quantity: data.quantity,
        admin_id: amn_id,
      });
    });
  }

  //* Setting Up Variables
  useEffect(() => {
    // Getting admin id
    var val = localStorage.getItem("admin_id")
      ? JSON.parse(localStorage.getItem("admin_id")).admin_id
      : "-1";
    var item = localStorage.getItem("item_id")
      ? JSON.parse(localStorage.getItem("item_id")).item_id
      : "31";
    // Setting admin id
    setdata({ ...data, admin_id: val.toString() });

    catData(val.toString());
    setData(val.toString(), item.toString());
  }, [datachanged]);

  //* Item Submission Function
  const itemSubmit = async (e) => {
    if (
      data.item_name === "" ||
      data.category_id === [{ category_id: 99999, category_name: "Select" }] ||
      data.price === "" ||
      data.quantity === "" ||
      data.image === ""
    ) {
      alert("Please Fill all the fields");
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(data);

      const form_Data = GetForm(data);

      await axios
        .post(
          "https://feasta-postgres.herokuapp.com/menu/update_item/",
          form_Data,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        )
        .then((result) => {
          if (result.data.status_code == 200) {
            alert(result.data.response_msg);
            // setdata({
            // ...data,
            // item_name:"",
            // category_id:"",
            // price:"",
            // item_desc:"",
            // quantity:"",
            // image:"",
            // });
            setdatachanged(datachanged + 1);
          } else {
            alert(result.data.response_msg);
          }
        });
    }
  };

  return (
    <>
      <Head>
        <title>Edit Item</title>
      </Head>
      <Layout>
        <div id="content" className="container-fluid">
          {/* Page Heading */}
          <div
            className="d-sm-flex align-items-center justify-content-center m-1"
            style={{ textAlign: "center" }}
          >
            <h1 className="h3 mb-0 text-gray-800">Edit Item</h1>
            {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
          </div>
          <hr width="85%" />
          {/* Main Page Content */}
          <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-body">
                <form
                  className="needs-validation clearfix"
                  noValidate
                  onSubmit={itemSubmit}
                >
                  <div className="form-row">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="validationCustom18">Product Name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom18"
                          placeholder="Pizza"
                          value={data.item_name}
                          onChange={(e) =>
                            setdata({ ...data, item_name: e.target.value })
                          }
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="validationCustom22">
                        Select Category
                      </label>
                      <div className="input-group">
                        <select
                          className="form-control"
                          id="validationCustom22"
                          value={data.category_id}
                          onChange={(e) =>
                            setdata({ ...data, category_id: e.target.value })
                          }
                          required
                        >
                          {cate.map((data) => {
                            return (
                              <option value={data.category_id}>
                                {data.category_name}
                              </option>
                            );
                          })}
                        </select>
                        <div className="invalid-feedback">
                          Please select a Category.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom25">Price</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom25"
                          placeholder="Rs.10"
                          value={data.price}
                          onChange={(e) =>
                            setdata({ ...data, price: e.target.value })
                          }
                          required
                        />
                        <div className="invalid-feedback">Price</div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom25">Quantity</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom25"
                          placeholder="100"
                          value={data.quantity}
                          onChange={(e) =>
                            setdata({ ...data, quantity: e.target.value })
                          }
                          required
                        />
                        <div className="invalid-feedback">Quantity</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="validationCustom12">Description</label>
                      <div className="input-group">
                        <textarea
                          rows={5}
                          id="validationCustom12"
                          className="form-control"
                          placeholder="Message"
                          value={data.item_desc}
                          onChange={(e) =>
                            setdata({ ...data, item_desc: e.target.value })
                          }
                          required
                        />
                        <div className="invalid-feedback">
                          Please provide a message.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="validationCustom12">Product Image</label>
                      <div className="container d-flex justify-content-center">
                        <input
                          type="file"
                          className="file browse btn btn-primary"
                          style={{ width: "70vw", maxWidth: "100%" }}
                          accept="image/png, image/jpeg"
                          onChange={(e) => {
                            setdata({ ...data, image: e.target.files[0] });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ms-panel-header new d-flex justify-content-center w-100">
                    <button
                      className="btn btn-primary d-block mb-3"
                      type="submit"
                    >
                      Save and Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End of Main Content */}
        </div>
      </Layout>
    </>
  );
}
