import Layout from "../../components/layout";
import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>{"Dashboard"}</title>
      </Head>
      <Layout>
        <div className="container-fluid">
          {/* Page Heading */}
          <div
            className="d-sm-flex align-items-center justify-content-center m-1"
            style={{ textAlign: "center" }}
          >
            <h3 className="h3 mb-0 text-gray-800">Dashboard</h3>
            {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
          </div>
          <hr width="85%" />
          <div className="row">
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Earnings (Monthly)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        $40,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Earnings (Annual) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Earnings (Annual)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        $215,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tasks Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Tasks
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            50%
                          </div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{
                                width: "50%",
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pending Requests Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="pt-4 pb-4 mb-3 mt-3 container shadow-lg">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="d-flex justify-content-around">
                <div style={{ width: "10%" }}>1</div>
                <div style={{ width: "30%" }}>Jay Shukla</div>
                <div style={{ width: "50%" }}>
                  Paneer Sandwhich, Maxican Burger
                </div>
                <div
                  style={{ width: "10%" }}
                  className="d-flex justify-content-end"
                >
                  <i
                    className="fa fa-fw fa-arrow-circle-right m-2"
                    style={{
                      color: "green",
                      cursor: "pointer",
                    }}
                  />
                  <i
                    className="fa fa-fw fa-trash m-2"
                    style={{
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-4 mb-3 mt-3 container shadow-lg">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="d-flex justify-content-around">
                <div style={{ width: "10%" }}>2</div>
                <div style={{ width: "30%" }}>Hetal Shukla</div>
                <div style={{ width: "50%" }}>Paneer Tikka, Butter Naan</div>
                <div
                  style={{ width: "10%" }}
                  className="d-flex justify-content-end"
                >
                  <i
                    className="fa fa-fw fa-arrow-circle-right m-2"
                    style={{
                      color: "green",
                      cursor: "pointer",
                    }}
                  />
                  <i
                    className="fa fa-fw fa-trash m-2"
                    style={{
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-4 mb-3 mt-3 container shadow-lg">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="d-flex justify-content-around">
                <div style={{ width: "10%" }}>3</div>
                <div style={{ width: "30%" }}>Hilay Trivedi</div>
                <div style={{ width: "50%" }}>Cheese Burger</div>
                <div
                  style={{ width: "10%" }}
                  className="d-flex justify-content-end"
                >
                  <i
                    className="fa fa-fw fa-arrow-circle-right m-2"
                    style={{
                      color: "green",
                      cursor: "pointer",
                    }}
                  />
                  <i
                    className="fa fa-fw fa-trash m-2"
                    style={{
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
