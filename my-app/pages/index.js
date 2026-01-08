import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row gx-3">
              <div className="col-lg-6">
                <div>
                  <img
                    src="../images/section-2-image.webp"
                    alt="Feature image"
                    width={500}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-6">

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Home
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="messages-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#messages"
                      type="button"
                      role="tab"
                      aria-controls="messages"
                      aria-selected="false"
                    >
                      Messages
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="settings-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings"
                      type="button"
                      role="tab"
                      aria-controls="settings"
                      aria-selected="false"
                    >
                      Settings
                    </button>
                  </li>
                </ul>


                <div class="tab-content">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
                  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
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

        <section>
          <div className="container">

          </div>
        </section>


        <section className="" style={{ background: "#1A1A1A" }}>
          <div className="container text-white pt-5 text-center">
            <h2>Blogs, Case Studies, Articles & Reports</h2>
            <p>Explore why our clients and partners view us as innovators, accelerators, consultants and thought leaders</p>

            <div className="mt-3 mb-5">
              <div className="fs-30px fs-xxl-60px fw-bold" style={{ color: "#8AB2FF" }}>Coming Soon!</div>
              <img
                src="../images/logo-white.svg"
                alt="Blogs placeholder"
                width={300}
                height={100}
                loading="lazy"
              />

            </div>

          </div>
        </section>


        <Footer />
      </div>
    </>
  );
}
