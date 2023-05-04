import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <>
      <Head>
        <title>قشم اسپلیت - خدمات نصب و سرویس کولر</title>
        <meta name="description" content="قشم اسپلیت - نصب سریع و تخصصی انواع کولر گازی تخصص ما است خدمات نصب و سرویس کولر اسپلیت با امکانات کامل سر تا سر جزیره قشم" />
        <meta name="keywords" content="قشم اسپلیت , نصب کولر گازی قشم , سرویس کولر گازی, اسپلیت قشم , سرویس کولر قشم , نصب کولر قشم ,"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://kardoon.ir/wp-content/uploads/2021/11/%DA%A9%D9%88%D9%84%D8%B1.png" />
      </Head>
      <main className={styles.home} dir='rtl'>
        <Navbar fixed='top' expand="lg" className={styles.navb}>
          <Container>
            <Navbar.Brand href="#Home" className={styles.tadell}>قشم اسپلیت عادل</Navbar.Brand>
            <Navbar.Brand href="#home">
              <img src='https://kardoon.ir/wp-content/uploads/2021/11/%DA%A9%D9%88%D9%84%D8%B1.png' width={50} />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navd} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home" className={styles.homee}>صفحه اصلی</Nav.Link>
                <Nav.Link href="#Services" className={styles.homee}>خدمات ما</Nav.Link>
                <Nav.Link href="#Call" className={styles.homee}>تماس با ما</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



        <Container fluid>
          <Row>



            <Col sm={12} className={styles.imgkoler} id='Home'>
              <Container fluid className={styles.passimg}>
                <Row>



                  <Col className={styles.txtweb} sm={12}>
                    <h5 className={styles.h44}>قشم اسپلیت <b > عادل</b></h5>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1000)
                          .typeString(
                            "<span style='color: #46fce4 '>بهترین خدمات نصب و سرویس کولر بیش از 15 سال سابقه کار با امکانات کامل</span>"
                          )


                          .pauseFor(2500)
                          .deleteAll()

                          .typeString(
                            "<span style='color: #a0fcf0 '>نصب و سرویس کولر در سر تا سر جزیره قشم</span><br/> <p>شماره تماس : <b  style='color: #220835;text-shadow:white 1px 1px 9px;'> 09173635805 </b></p>"
                          )

                          .start();
                      }}
                    />
                  </Col>

                 

                  <Col>
                    <img className={styles.imgicon} width={50} src='https://amoozeshgahfanni.com/wp-content/uploads/2020/04/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1%D8%A7%D8%AA-%DA%A9%D9%88%D9%84%D8%B1-%DA%AF%D8%A7%D8%B2%DB%8C.png' />

                  </Col>
                </Row>
              </Container>
            </Col>


            <Container id='Services'>
                    <Row>
                      <Col sm={6}>
                        <Container className={styles.service}>
                          <Row>
                            <Col sm={12}>
                              <img className={styles.imgg} src='https://aasco.ir/wp-content/uploads/2019/10/ac-install.jpg' />
                              <p className={styles.tkh}>نصب کولر اسپلیت</p>
                            </Col>

                            <hr />
                            <Col>
                              <p className={styles.pptext}>
                                نصب سریع و تخصصی انواع کولر گازی تخصص ما است. نصب انواع کولرگازی شامل کولرگازی جنرال، اجنرال، سامسونگ، ال جی، هایسنس، گری، ملونی، جی تایتان و دیگر مدل ها توسط بهترین نصاب کولرگازی در <b style={{ color: "white" }}>قشم اسپلیت</b> انجام می شود.
                              </p>
                            </Col>
                          </Row>
                        </Container>
                      </Col>


                      <Col sm={6}>
                        <Container className={styles.service}>
                          <Row>
                            <Col >
                              <img className={styles.imgg} src='https://zehtabgroup.ir/wp-content/uploads/2020/06/33121.jpg' />
                              <p className={styles.tkh}>سرویس کولر اسپلیت</p>

                            </Col>

                            <hr />
                            <Col>
                              <p className={styles.pptext}>
                                سرویس کولر گازی عامل مهمی در عملکرد کولر در فصل گرما و یکی از خدماتی است که توسط <b style={{ color: "white" }}>قشم اسپلیت</b> انجام می شود. برای دریافت خدمت سرویس کولر اسپیلت در هر یک از مناطق جزیره قشم، می‌توانید با ما تماس بگیرید
                              </p>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>

                  </Container>
                      
            <Col>

              <Container>
                <Row>
                  




                  <Col>

                    <Container fluid className={styles.tamas} id='Call'>
                      <Row>
                        <Col sm={12}>
                          <h3>تماس با ما</h3>
                          
                        </Col>
                        <Col>شماره تماس : </Col>
                        <Col>
                        <p className={styles.tsh}>
                          09173635805
                        </p>
                        </Col>

                        <hr/>
                        
                        <Col sm={12} >
                          <div className={styles.abdollah}>
                                                      <p>طراحی و توسعه توسط <a className={styles.abdol} target='#blank' href='https://abdollahchelasi.ir'> عبدالله چلاسی</a></p>

                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Col>


                </Row>
              </Container>

            </Col>




          </Row>
        </Container>
      </main>
    </>
  )
}
