import React from 'react';

function Footer() {
    return (
        <div>
            <footer class="footer-area bg-img bg-overlay-2 section-padding-100-0">
                <div class="main-footer-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-lg-6">
                                <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                                    <p>INSERT LOGO AND SLOGAN HERE </p>
                                    <div class="footer-contact-info">
                                        <p><i class="zmdi zmdi-email"></i> info@YourOpenDate.com</p>
                                        <br/>
                                    </div>
                                    <div class="social-info">
                                        <a href="#"><i class="zmdi zmdi-facebook"></i></a>
                                        <a href="#"><i class="zmdi zmdi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copywrite-content">
                        <div class="row">
                            {/* <!-- Copywrite Text --> */}
                            <div class="col-12 col-md-6">
                                <div class="copywrite-text">
                                    {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="footer-menu">
                                    <ul class="nav">
                                        <li><a href="#"><i class="zmdi zmdi-circle"></i> Terms of Service</a></li>
                                        <li><a href="#"><i class="zmdi zmdi-circle"></i> Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer