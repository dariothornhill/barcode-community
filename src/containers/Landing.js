import React, { useContext, useEffect, useState } from 'react';

const Landing = props => {
  return (
    <>
      <header>
        {/* <div id='topbar'>
          <div className='container'>
            <div className="social-links">
          <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
          <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
        </div>
          </div>
        </div> */}
        <div>
          <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
              <img src='images/logo/barcode_logo.png' alt='' height='50px' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#intro'>
                    Home <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#services'>
                    What we do
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#team'>
                    Team
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#footer'>
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* <form className='form-inline my-2 my-lg-0'>
                <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
                  Search
                </button>
              </form> */}
            </div>
          </nav>
        </div>
      </header>

      <section id='intro' className='clearfix'>
        <div className='container d-flex h-100'>
          <div className='row justify-content-center align-self-center'>
            <div className='col-md-6 intro-info order-md-first order-last'>
              <h2>
                Design and develop <span>world-class</span> products with local <span>software</span> developers!
              </h2>
              {/* <!-- <h2>Learn, share & collaborate with <span>world-class</span> developers and entrepreneurs!</h2> -->
            <!-- <h2><span>Boost</span> your career <span>and</span> your business with <span>world-class</span> tools and training</h2> --> */}
              <p>Boost your career and your business by joining a community of driven tech entrepreneurs</p>
              <div>
                <a
                  href='https://forms.gle/dSP8xFXYMT6wPhBz5'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='btn-get-started mx-3'
                >
                  Join Our Community
                </a>
                <a
                  href='https://forms.gle/UKr5NM2NgB3EeLxx9'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='btn-partner'
                >
                  Join as a Partner
                </a>
              </div>
            </div>

            <div className='col-md-6 intro-img order-md-last order-first'>
              <img src='images/hero.png' alt='' className='img-fluid' />
              <p className='text-center' style={{ fontSize: '10px' }}>
                <a href='http://www.freepik.com'>Graphic designed by katemangostar</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <main id='main'>
        <section id='clients' className='wow fadeInUp'>
          <div className='container'>
            <header className='section-header'>
              <h3>Our Partners</h3>
              <p>We have proudly partnered with the following organizations</p>
            </header>

            <div className='row mx-auto align-items-center'>
              <div className='col'>
                {' '}
                <a href='http://futureguyana.com' rel='noopener noreferrer' target='_blank'>
                  <img src='images/partners/futureguyana-02.png' alt='' className='img-fluid' />
                </a>
              </div>
              <div className='col'>
                <a href='https://developers.facebook.com/developercircles/' rel='noopener noreferrer' target='_blank'>
                  <img src='images/partners/fb_devc_logo.png' alt='' className='img-fluid' />
                </a>
              </div>

              <div className='col'>
                <a href='https://www.tenhabitat.com/source-code-academy' rel='noopener noreferrer' target='_blank'>
                  <img src='images/partners/sourcecode-devacademy.jpg' alt='' className='img-fluid' />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- <section id="about">

      <div className="container">
        <div className="row">

          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src="images/about-img.jpg" alt="">
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h2>About Us</h2>
              <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
              <ul>
                <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section> --> */}

        <section id='services' className='section-bg'>
          <div className='container'>
            <header className='section-header'>
              <h3>What we do</h3>
              <p>
                We are a non-profit initiative which aims to empower aspiring and experienced software developers with
                the training and tools needed to market their skills internationally as well as launch their own tech
                startups.
              </p>
            </header>

            <div className='row'>
              <div className='col-md-6 col-lg-4 wow bounceInUp' data-wow-duration='1.4s'>
                <div className='box'>
                  <div className='icon' style={{ background: '#fceef3' }}>
                    <i className='fa fa-users' style={{ color: '#ff689b' }} />
                  </div>
                  <h4 className='title'>
                    <a href='#'>Meetups</a>
                  </h4>
                  <p className='description'>
                    Join panel discussions where we discuss how we may leverage technology in order to improve business
                    and our daily lives
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 wow bounceInUp' data-wow-duration='1.4s'>
                <div className='box'>
                  <div className='icon' style={{ background: '#fff0da' }}>
                    <i className='fa fa-code' style={{ color: '#e98e06' }} />
                  </div>
                  <h4 className='title'>
                    <a href='#'>Workshops</a>
                  </h4>
                  <p className='description'>
                    Learn to code modern web and mobile applications by integrating Artificial Intelligence, Augemented
                    Reality and Blockchain
                  </p>
                </div>
              </div>

              <div className='col-md-6 col-lg-4 wow bounceInUp' data-wow-delay='0.1s' data-wow-duration='1.4s'>
                <div className='box'>
                  <div className='icon' style={{ background: '#e6fdfc' }}>
                    <i className='fa fa-tv' style={{ color: '#3fcdc7' }} />
                  </div>
                  <h4 className='title'>
                    <a href='#'>Community Projects</a>
                  </h4>
                  <p className='description'>
                    Collaborate with local entrepreneurs and developers to build software for commercial entities and to
                    advance social good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='why-us' className='wow fadeIn'>
          <div className='container-fluid'>
            <header className='section-header'>
              <h3>Why work with Barcode?</h3>
              <p>
                We aim to leapfrog from the current disjointed tech entrepreneur community towards an inclusive,
                productive tech community where tech entrepreneurs learn and share with each other and collaborate with
                entrepreneurs to build social and commercially driven projects.
              </p>
            </header>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='why-us-img'>
                  <img src='images/barcode_community.jpg' alt='' className='img-fluid' />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='why-us-content'>
                  <p>
                    During the coming months, the membership of ‘The Barcode Network’ shall continue its push to
                    increase the engagement of the local tech community using a ‘revolving-door’ approach which is a
                    repeating cycle of the following:
                  </p>

                  <div className='features wow bounceInUp clearfix'>
                    <i className='fa fa-users' style={{ color: '#f058dc' }} />
                    <h4>Identify Community Projects</h4>
                    <p>
                      At our meetups, we shall identify projects relevant to the social and economical development of
                      the community including open-source projects that support other Non-Governmental Organizations.
                    </p>
                  </div>

                  <div className='features wow bounceInUp clearfix'>
                    <i className='fa fa-code' style={{ color: '#ffb774' }} />
                    <h4>Developing Solutions</h4>
                    <p>
                      Experienced developers guide aspiring developers to develop identified projects while also
                      training them in the use of new techniques and technologies
                    </p>
                  </div>

                  <div className='features wow bounceInUp clearfix'>
                    <i className='fa fa-tv' style={{ color: '#589af1' }} />
                    <h4>Tech Showcases</h4>
                    <p>
                      The Barcode Network invites members of the entrepreneur ecosystem and the wider community to view
                      a showcase of projects completed and to propose their own projects for the next cycle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container' />
        </section>

        {/* <!-- <section id="call-to-action" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3 className="cta-title">Call To Action</h3>
            <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section>#call-to-action --> */}

        {/* <!-- <section id="features">
      <div className="container">

        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
            <img src="images/features-1.svg" className="img-fluid" alt="">
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
            <p>
              Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
            </p>
          </div>
        </div>

        <div className="row feature-item mt-5 pt-5">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="images/features-2.svg" className="img-fluid" alt="">
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
            <p>
             Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
            </p>
            <p>
              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
            </p>
            <p>
              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
            </p>
          </div>
          
        </div>

      </div>
    </section> --> */}

        {/* <!-- <section id="portfolio" className="section-bg">
      <div className="container">

        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="images/portfolio/app1.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">App 1</a></h4>
                <p>App</p>
                <div>
                  <a href="images/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <img src="images/portfolio/web3.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">Web 3</a></h4>
                <p>Web</p>
                <div>
                  <a href="images/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <img src="images/portfolio/app2.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">App 2</a></h4>
                <p>App</p>
                <div>
                  <a href="images/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="images/portfolio/card2.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">Card 2</a></h4>
                <p>Card</p>
                <div>
                  <a href="images/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <img src="images/portfolio/web2.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">Web 2</a></h4>
                <p>Web</p>
                <div>
                  <a href="images/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <img src="images/portfolio/app3.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">App 3</a></h4>
                <p>App</p>
                <div>
                  <a href="images/portfolio/app3.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="images/portfolio/card1.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">Card 1</a></h4>
                <p>Card</p>
                <div>
                  <a href="images/portfolio/card1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <img src="images/portfolio/card3.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">Card 3</a></h4>
                <p>Card</p>
                <div>
                  <a href="images/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <img src="images/portfolio/web1.jpg" className="img-fluid" alt="">
              <div className="portfolio-info">
                <h4><a href="#">Web 1</a></h4>
                <p>Web</p>
                <div>
                  <a href="images/portfolio/web1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye"></i></a>
                  <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> --> */}

        {/* <!-- <section id="testimonials">
      <div className="container">

        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="owl-carousel testimonials-carousel wow fadeInUp">
    
              <div className="testimonial-item">
                <img src="images/testimonial-1.jpg" className="testimonial-img" alt="">
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
              </div>
    
              <div className="testimonial-item">
                <img src="images/testimonial-2.jpg" className="testimonial-img" alt="">
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
              </div>
    
              <div className="testimonial-item">
                <img src="images/testimonial-3.jpg" className="testimonial-img" alt="">
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                </p>
              </div>
    
              <div className="testimonial-item">
                <img src="images/testimonial-4.jpg" className="testimonial-img" alt="">
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                </p>
              </div>

            </div>

          </div>
        </div>


      </div>
    </section> --> */}

        <section id='team' className='section-bg'>
          <div className='container'>
            <div className='section-header'>
              <h3>Team</h3>
              <p>
                Barcode is led by a team of passionate tech entrepreneurs who have been contributing to the development
                of the tech community for several years
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-4 col-md-4 wow fadeInUp'>
                <div className='member'>
                  <img src='images/team/shannonclarke.jpg' className='img-fluid' alt='' />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Shannon Clarke</h4>
                      <span>Facebook Developer Circle Lead</span>
                      <div className='social'>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-linkedin' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="member">
                <img src="images/team-4.jpg" className="img-fluid" alt="">
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Kimberley Adams</h4>
                    <span>Future Guyana</span>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>  */}

              <div className='col-lg-4 col-md-4 wow fadeInUp' data-wow-delay='0.1s'>
                <div className='member'>
                  <img src='images/team/dariothornhill.jpg' className='img-fluid' alt='' />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Dario Thornhill</h4>
                      <span>Source Code Developer Academy Lead</span>
                      <div className='social'>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-linkedin' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-4 wow fadeInUp' data-wow-delay='0.2s'>
                <div className='member'>
                  <img src='images/team/andrehaynes.jpg' className='img-fluid' alt='' />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Andre Haynes</h4>
                      <span>CEO, Tokamak</span>
                      <div className='social'>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>

                        <a href='#'>
                          <i className='fa fa-linkedin' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- <section id="pricing" className="wow fadeInUp section-bg">

      <div className="container">

        <header className="section-header">
          <h3>Pricing</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </header>

        <div className="row flex-items-xs-middle flex-items-xs-center">
      
          
          <div className="col-xs-12 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3><span className="currency">$</span>19<span className="period">/month</span></h3>
              </div>
              <div className="card-block">
                <h4 className="card-title"> 
                  Basic Plan
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">Odio animi voluptates</li>
                  <li className="list-group-item">Inventore quisquam et</li>
                  <li className="list-group-item">Et perspiciatis suscipit</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
              </div>
            </div>
          </div>
      
          
          <div className="col-xs-12 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3><span className="currency">$</span>29<span className="period">/month</span></h3>
              </div>
              <div className="card-block">
                <h4 className="card-title"> 
                  Regular Plan
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">Odio animi voluptates</li>
                  <li className="list-group-item">Inventore quisquam et</li>
                  <li className="list-group-item">Et perspiciatis suscipit</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
              </div>
            </div>
          </div>
      
          
          <div className="col-xs-12 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3><span className="currency">$</span>39<span className="period">/month</span></h3>
              </div>
              <div className="card-block">
                <h4 className="card-title"> 
                  Premium Plan
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">Odio animi voluptates</li>
                  <li className="list-group-item">Inventore quisquam et</li>
                  <li className="list-group-item">Et perspiciatis suscipit</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
              </div>
            </div>
          </div>
      
        </div>
      </div>

    </section> --> */}

        {/* <section id='faq'>
          <div className='container'>
            <header className='section-header'>
              <h3>Frequently Asked Questions</h3>
            </header>

            <div id='accordion'>
              <div className='card'>
                <div className='card-header' id='headingOne'>
                  <h5 className='mb-0'>
                    <button
                      className='btn btn-link'
                      data-toggle='collapse'
                      data-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>

                <div id='collapseOne' className='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
                  <div className='card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='headingTwo'>
                  <h5 className='mb-0'>
                    <button
                      className='btn btn-link collapsed'
                      data-toggle='collapse'
                      data-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      Collapsible Group Item #2
                    </button>
                  </h5>
                </div>
                <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
                  <div className='card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='headingThree'>
                  <h5 className='mb-0'>
                    <button
                      className='btn collapsed'
                      data-toggle='collapse'
                      data-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      Collapsible Group Item #3
                    </button>
                  </h5>
                </div>
                <div id='collapseThree' className='collapse' aria-labelledby='headingThree' data-parent='#accordion'>
                  <div className='card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>

            <ul id='faq-list' className='wow fadeInUp'>
              <li>
                <a data-toggle='collapse' className='collapsed' href='#faq1'>
                  How much does Barcode cost? <i className='ion-android-remove' />
                </a>
                <div id='faq1' className='collapse' data-parent='#faq-list'>
                  <p>
                    It costs nothing to attend our meetups or to join as a partner. We are still working with sponsors
                    with the aim to provide workshops for free as well.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle='collapse' href='#faq2' className='collapsed'>
                  Can I hire Barcode for my projects? <i className='ion-android-remove' />
                </a>
                <div id='faq2' className='collapse' data-parent='#faq-list'>
                  <p>
                    Yes you can. We're happy to recommend competent software developers to work on your project and we
                    can manage the project itself for you. Feel free to contact us at info@barcode.network
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle='collapse' href='#faq3' className='collapsed'>
                  Is Barcode based in Barbados? <i className='ion-android-remove' />
                </a>
                <div id='faq3' className='collapse' data-parent='#faq-list'>
                  <p>
                    Yes we are based in beautiful Barbados however we are open to participation from the online
                    community regardless of your location
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section> */}
      </main>

      <footer id='footer' className='section-bg'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className='footer-info'>
                      <img src='images/logo/barcode_logo.png' width='200px' style={{ paddingBottom: '10px' }} />
                      <p>
                        The Barcode Network currently has a membership of ninety-two (92) aspiring and experienced tech
                        entrepreneurs. Utilizing partnerships such as The Facebook Developer Circle, The Barcode network
                        shall provide a direct connection between the local tech entrepreneur community and resources
                        from global technology firms in the form of training, local events and an annual hackathon.
                      </p>
                    </div>
                    <div className='footer-links'>
                      <h4>Contact Us</h4>
                      <p>
                        <strong>Email:</strong> info@barcode.network
                        <br />
                      </p>
                    </div>

                    {/* <!-- <div className="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                    <form action="" method="post">
                      <input type="email" name="email"><input type="submit"  value="Subscribe">
                    </form>
                  </div> --> */}
                  </div>

                  {/* <!-- <div className="col-sm-6">
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Terms of service</a></li>
                      <li><a href="#">Privacy policy</a></li>
                    </ul>
                  </div>

                  <div className="social-links">
                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div> --> */}
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form'>
                  <h4>Send us a message</h4>
                  <form
                    action='https://docs.google.com/forms/d/e/1FAIpQLSeiabXqpE8DTXTxgQQt1SizNzU3_zUjROGT1SLudgEaW8HWLA/formResponse'
                    method='post'
                    role='form'
                    className='contactForm'
                  >
                    <div className='form-group'>
                      <input
                        type='text'
                        name='entry.1263013863'
                        className='form-control'
                        id='name'
                        placeholder='Your Name'
                        data-rule='minlen:4'
                        data-msg='Please enter at least 4 chars'
                      />
                      <div className='validation' />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control'
                        name='emailAddress'
                        id='email'
                        placeholder='Your Email'
                        data-rule='email'
                        data-msg='Please enter a valid email'
                      />
                      <div className='validation' />
                    </div>

                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        name='entry.1980659813'
                        rows='5'
                        data-rule='required'
                        data-msg='Please write something for us'
                        placeholder='Message'
                      />
                      <div className='validation' />
                    </div>

                    <div id='sendmessage'>Your message has been sent. Thank you!</div>
                    <div id='errormessage' />

                    <div className='text-center'>
                      <button type='submit' title='Send Message'>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='copyright'>
            &copy; Copyright <strong>The Barcode Network</strong>. All Rights Reserved
          </div>
          <div className='credits'>
            {/* <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
        --> */}
            Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a href='#' className='back-to-top'>
        <i className='fa fa-chevron-up' />
      </a>
    </>
  );
};

export default Landing;
