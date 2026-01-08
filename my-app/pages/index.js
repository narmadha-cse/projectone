import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>CXOntology | End-to-End Digital &amp; CX Transformation Partner</title>
        <meta name="description" content="CXOntology delivers holistic digital strategies and KPI-driven customer experience solutions to accelerate your brand’s digital transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <section className="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="text-center text-lg-start mb-3">Your partner for end-to-end digital and customer experience management.</h1>
                <p className="text-center text-lg-start ">Driven by Value - We define practical digital strategies, execute digital implementations, and enhance your ecosystem through incremental, KPI-driven MSO programs.</p>
              </div>
              <div className="col-lg-6 d-none d-lg-block text-center">
                <img
                  src="../images/banner-image.webp"
                  alt="Banner image"
                  width={500}
                  height={400}
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="container">
            <div className="row gx-3">
              <div className="col-xl-5">
                <div className="d-none d-xl-block">
                  <img src="../images/section-2-image.webp" alt="Feature image" width={500} height={400} loading="lazy" className="img-fluid" />
                </div>
              </div>
              <div className="col-xl-7 pt-xl-5">
                <ul className="nav nav-tabs gap-4" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                      01. Ontology
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                      02. Holistic Thinking
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">
                      03. Our Mission
                    </button>
                  </li>
                </ul>

                <div className="tab-content px-2">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <h3 className="fw-normal">A set of concepts and categories in a subject area or domain that shows their properties and the relations between them.</h3>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <h3 className="fw-normal">At CXO, we recognize creating human-centric, conversion-focused digital experiences requires a coordinated effort across multiple disciplines – strategy, content, commerce, data, platforms and digital marketing, to name a few.</h3>
                  </div>
                  <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">
                    <h3 className="fw-normal">Our mission at CXO will always be to serve our clients’ end-to-end needs in the digital experience space, from visioning and building your future-state to incremental maturity & KPI-based maintenance.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="" style={{ background: "#1A1A1A" }}>
          <div className="container text-white">
            <div className="text-center">
              <h2> A Partner with Focus</h2>
              <p> At CXO, we’re focused on building the relevant technology capabilities to build your customer-centric needs and expand your brand’s digital presence.</p>
              <div className="p-3 border border-white rounded-4 my-4">
                <div className="d-none d-lg-flex justify-content-between gap-2">
                  <button className="btn btn-outline-secondary border-0 rounded-pill"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="0">
                    Content Platforms
                  </button>

                  <button className="btn btn-outline-secondary border-0 rounded-pill"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="1">
                    Commerce
                  </button>

                  <button className="btn btn-outline-secondary border-0 rounded-pill"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="2">
                    Core Frameworks
                  </button>

                  <button className="btn btn-outline-secondary border-0 rounded-pill"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="3">
                    Data & Analytics
                  </button>

                  <button className="btn btn-outline-secondary border-0 rounded-pill"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="4">
                    CRM & Customers
                  </button>

                  <button className="btn btn-outline-secondary border-0 rounded-pill"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="5">
                    Marketing Automation
                  </button>
                </div>
              </div>


              <div className="w-85 bg-white rounded-3 mx-auto">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-3">
                    <div className="carousel-item rounded-3 active">
                      <img src="./images/scroll-img-1.png" className="img-fluid rounded-3 d-block w-100" alt="scroll img" width={1500} height={500} />
                    </div>
                    <div className="carousel-item rounded-3">
                      <img src="./images/scroll-img-2.png" className="img-fluid rounded-3 d-block w-100" alt="scroll img" width={1500} height={500} />
                    </div>
                    <div className="carousel-item rounded-3">
                      <img src="./images/scroll-img-3.png" className="img-fluid rounded-3 d-block w-100" alt="scroll img" width={1500} height={500} />
                    </div>
                    <div className="carousel-item rounded-3">
                      <img src="./images/scroll-img-4.png" className="img-fluid rounded-3 d-block w-100" alt="scroll img" width={1500} height={500} />
                    </div>
                    <div className="carousel-item rounded-3">
                      <img src="./images/scroll-img-5.png" className="img-fluid rounded-3 d-block w-100" alt="scroll img" width={1500} height={500} />
                    </div>
                    <div className="carousel-item rounded-3">
                      <img src="./images/scroll-img-6.png" className="img-fluid rounded-3 d-block w-100" alt="scroll img" width={1500} height={500} />
                    </div>
                  </div>
                  <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="mdi mdi-chevron-left fs-1"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="mdi mdi-chevron-right fs-1"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="mt-4 d-flex align-items-center justify-content-center">
                <button type='button' className='btn btn-outline-secondary d-flex align-items-center justify-content-center'>View Our Capabilities<span className="mdi mdi-chevron-right ps-1 fs-4 lh-sm"></span></button>
              </div>

            </div>
          </div>
        </section>

        <section className="section-2 d-none d-lg-block">
          <div className="container">
            <div className="text-center">
              <h2> Accelerated Outcomes at Each Stage of Your Digital Journey</h2>
              <p>While we’re an end-to-end partner capable of engaging in any way your business needs, we’ve created structured engagement models to quickly and methodically accelerate your time-to-value.</p>
            </div>
            <div className="row align-items-start">
              <div className="col-md-4">
                <div className="bg-primary-lighten-1 p-3 rounded-5" style={{ backgroundColor: "#e6eeff" }}>
                  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Digital Strategy & Roadmaps</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Capabilities Assessment</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills-switch-tab" data-bs-toggle="pill" data-bs-target="#v-pills-switch" type="button" role="tab" aria-controls="v-pills-switch" aria-selected="false" switch>Implementations & Migrations</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Managed Services for Digital Growth</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Conversion Rate Optimization Engagements</button>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content mt-0" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    <div className="card_tab" style={{ backgroundImage: "url(./images/tab-img-1.webp)", }}>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                    <div className="card_tab" style={{ backgroundImage: "url(./images/tab-img-2.webp)", }}>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-switch" role="tabpanel" aria-labelledby="v-pills-switch-tab" tabindex="0">
                    <div className="card_tab" style={{ backgroundImage: "url(./images/tab-img-3.webp)", }}>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                    <div className="card_tab" style={{ backgroundImage: "url(./images/tab-img-4.png)", }}>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                    <div className="card_tab" style={{ backgroundImage: "url(./images/tab-img-5.png)", }}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="" style={{ background: "#1A1A1A" }}>
          <div className="container text-white">
            <div className="row">
              <div className="col-lg-6">
                <h2>Want to learn about the Outcomes CXO can create for your business?</h2>
                <p>From rebranding & redesigns to migrations, implementations, upgrades & streamlining your ongoing management costs, we’re interested to know how we can add value.</p>
              </div>
              <div className="col-lg-6">
                <div className="row gx-3">
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="First name*" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Last name*" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Business Email*" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Company name*" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Job title*" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control h-125px" placeholder="Your Message*" id="floatingTextarea"></textarea>
                </div>

                <p className="fs-14px"><span className="mdi mdi-information-outline"></span> CXO will not use this data for marketing and promotional purposes or share this data with any third-party organizations.</p>

                <div className="text-center">
                  <button className="btn btn-primary bg-primary px-4 py-2 rounded-3 text-white w-100 w-lg-50 mx-auto">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="container">
            <div className="text-center">
              <h2> Led by Strategy, Rooted in Technology, Focused on the Business.</h2>
              <p>Exploring the measurable impact of CXO.</p>
            </div>
            <div className="row align-items-start">
              <div className="col-md-4 mb-3">
                <div className="bg-primary-lighten-1 p-3 py-4 rounded-5" style={{ backgroundColor: "#e6eeff" }}>
                  <div className="nav flex-column nav-pills" id="v-pills1-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start active" id="v-pills1-home-tab1" data-bs-toggle="pill" data-bs-target="#v-pills1-home" type="button" role="tab" aria-controls="v-pills1-home" aria-selected="true">Digital Strategy & Roadmaps</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills1-profile-tab1" data-bs-toggle="pill" data-bs-target="#v-pills1-profile" type="button" role="tab" aria-controls="v-pills1-profile" aria-selected="false">Capabilities Assessment</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills1-switch-tab1" data-bs-toggle="pill" data-bs-target="#v-pills1-switch" type="button" role="tab" aria-controls="v-pills1-switch" aria-selected="false" switch>Implementations</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills1-messages-tab1" data-bs-toggle="pill" data-bs-target="#v-pills1-messages" type="button" role="tab" aria-controls="v-pills1-messages" aria-selected="false">Managed Services for Growth</button>
                    <hr className="my-2" />
                    <button className="nav-link fs-16px fs-xxl-18px mh-60px rounded-pill text-start" id="v-pills1-settings-tab1" data-bs-toggle="pill" data-bs-target="#v-pills1-settings" type="button" role="tab" aria-controls="v-pills1-settings" aria-selected="false">Conversion Rate Optimization (CRO) Engagements</button>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-3">
                <div className="tab-content mt-0" id="v-pills1-tabContent">
                  <div className="tab-pane fade show active" id="v-pills1-home" role="tabpanel" aria-labelledby="v-pills1-home-tab1" tabindex="0">
                    <div>
                      <img src="./images/tab-2-img-1.png" className="img-fluid" loading="lazy" alt="Digital Strategy & Roadmaps" width={820} height={400} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills1-profile" role="tabpanel" aria-labelledby="v-pills1-profile-tab1" tabindex="0">
                    <div>
                      <img src="./images/tab-2-img-2.png" className="img-fluid" loading="lazy" alt="Capabilities Assessment" width={820} height={400} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills1-switch" role="tabpanel" aria-labelledby="v-pills1-switch-tab1" tabindex="0">
                    <div>
                      <img src="./images/tab-2-img-3.png" className="img-fluid" loading="lazy" alt="Implementations" width={820} height={400} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills1-messages" role="tabpanel" aria-labelledby="v-pills1-messages-tab1" tabindex="0">
                    <div>
                      <img src="./images/tab-2-img-4.png" className="img-fluid" loading="lazy" alt="Managed Services for Growth" width={820} height={400} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills1-settings" role="tabpanel" aria-labelledby="v-pills1-settings-tab1" tabindex="0">
                    <div>
                      <img src="./images/tab-2-img-5.png" className="img-fluid" loading="lazy" alt=" (CRO) Engagements" width={820} height={400} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="" style={{ background: "#1A1A1A" }}>
          <div className="container text-white pt-5 text-center">
            <h2>Blogs, Case Studies, Articles & Reports</h2>
            <p>Explore why our clients and partners view us as innovators, accelerators, consultants and thought leaders</p>
            <div className="mt-3 mb-5">
              <div className="fs-30px fs-xxl-60px fw-bold mb-3" style={{ color: "#8AB2FF" }}>Coming Soon!</div>
              <img src="../images/logo-white.svg" alt="Logo image" width={300} height={100} loading="lazy" className="img-fluid" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
