import Layout from "../../../components/layout";

import Head from "next/head";
// import { useRouter } from 'next/router'

import { useState, useEffect } from "react";
import axios from "axios";

export default function addCategory() {
  //* Object Definition
  // const router = useRouter()

  //* Defining States
  const [data, setdata] = useState({
    category_name: "",
    admin_id: "0",
  });

  //* Setting Up Variables
  useEffect(() => {
    // Getting admin id
    var val = localStorage.getItem("admin_id")
      ? JSON.parse(localStorage.getItem("admin_id")).admin_id
      : "-1";
    // Setting admin id
    setdata({ ...data, admin_id: val.toString() });
  }, []);

  //* Defining Functions
  const itemSubmit = async (e) => {
    if (data.category_name === "") {
      alert("Please Fill all the fields");
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(data);
      await axios
        .post("https://feasta-postgres.herokuapp.com/menu/add_category/", data)
        .then((result) => {
          if (result.data.status_code == 200) {
            alert(result.data.response_msg);
            setdata({ ...data, category_name: "" });
          } else {
            alert(result.data.response_msg);
          }
        });
    }
  };

  return (
    <>
      <Head>
        <title>Add Category</title>
      </Head>
      <Layout>
        <div>
          {/* Main Page Content */}
          <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-header d-flex justify-content-center">
                <h1 className="h3 mb-0 text-gray-800">Add Category</h1>
              </div>
              <hr />
              <div className="ms-panel-body">
                <form
                  className="needs-validation clearfix"
                  onSubmit={itemSubmit}
                  noValidate
                >
                  <div className="form-row">
                    <div className="col-md-12 mb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom18"
                          placeholder="Category Name"
                          value={data.category_name}
                          onChange={(e) => {
                            setdata({
                              ...data,
                              category_name: e.target.value,
                            });
                          }}
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="ms-panel-header new d-flex justify-content-center w-100 mt-3 ">
                        <button
                          className="btn btn-primary d-block"
                          type="submit"
                        >
                          Save and Add
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
