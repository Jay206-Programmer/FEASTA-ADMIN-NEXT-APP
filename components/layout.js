import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState,useEffect } from 'react'

export default function Layout({ children }) {
    
    //* Rendering JQuery
    useEffect(() => {
        "use strict"; // Start of use strict
        
        // Toggle the side navigation
        $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
            if ($(".sidebar").hasClass("toggled")) {
                $('.sidebar .collapse').collapse('hide');
            };
        });

        // Close any open menu accordions when window is resized below 768px
        $(window).resize(function() {
            if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
            };
            
            // Toggle the side navigation when window is resized below 480px
            if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('hide');
            };
        });
        
        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
            if ($(window).width() > 768) {
                var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });
    
        // Scroll to top button appear
        $(document).on('scroll', function() {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });
        
        // Smooth scrolling using jQuery easing
        $(document).on('click', 'a.scroll-to-top', function(e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            e.preventDefault();
        });
        
    }, [])
    
    // ? Defining Objects
    const router = useRouter()
    
    // ? Defining Variables
    const [admin, setadmin] = useState("")
    
    // ? Setting Up Variables
    useEffect(() => {
        setadmin(localStorage.getItem("user_name")?JSON.parse(localStorage.getItem("user_name")).user_name:"")
    }, [])
    
    // ? Defining Metods
    const handleLogout = () => {
        
        var locallogin = JSON.stringify({login:false})
        localStorage.setItem("login",locallogin);
        
        router.push('/login')
    }


    return (
        <div>
            {/* <Head>
            </Head> */}
            <main>
                <div className="App">
                    <div id="wrapper">
                        {/* Sidebar */}
                        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                            {/* Sidebar - Brand */}
                            <Link href="/">
                                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                                <div>
                                <img src="img\feasta.jpeg" width={47} height={47} />
                                </div>
                                <div className="sidebar-brand-text mx-3">FEASTA</div>
                                </a>
                            </Link>
                            {/* Divider */}
                            <hr className="sidebar-divider my-0" />
                            {/* Nav Item - Dashboard */}
                            <li className="nav-item active">
                                <Link href='/' >
                                    <a className="nav-link" >
                                    <i className="fas fa-fw fa-tachometer-alt" />
                                    <span>Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            {/* Divider */}
                            <hr className="sidebar-divider" />
                            {/* Heading */}
                            <div className="sidebar-heading">
                                Interface
                            </div>
                            <li className="nav-item">
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                                {/*<i class="fas fa-fw fa-wrench"></i>*/}
                                <span>Menu</span>
                                </a>
                                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Utilities:</h6>
                                    <Link href="/"><a className="collapse-item" >Menu Updation</a></Link>
                                    <Link href="/"><a className="collapse-item" >Special Offer</a></Link>
                                    <Link href="/"><a className="collapse-item" >Special Item</a></Link>
                                </div>
                                </div>
                            </li>
                            {/* Divider */}
                            <hr className="sidebar-divider" />
                            {/* Heading */}
                            <div className="sidebar-heading">
                                Addons
                            </div>
                            {/* Nav Item - Pages Collapse Menu */}
                            <li className="nav-item">
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder" />
                                <span>Pages</span>
                                </a>
                                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                                </div>
                            </li>
                            {/* Nav Item - Charts */}
                            <li className="nav-item">
                                <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area" />
                                <span>Charts</span></a>
                            </li>
                            {/* Nav Item - Tables */}
                            <li className="nav-item">
                                <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table" />
                                <span>Tables</span></a>
                            </li>
                            {/* Divider */}
                            <hr className="sidebar-divider d-none d-md-block" />
                            {/* Sidebar Toggler (Sidebar) */}
                            <div className="text-center d-none d-md-inline">
                                <button className="rounded-circle border-0" id="sidebarToggle" />
                            </div>
                        </ul>
                        {/* End of Sidebar */}
                        {/* Content Wrapper */}
                        <div id="content-wrapper" className="d-flex flex-column">
                            {/* Main Content */}
                            <div id="content">
                                {/* Topbar */}
                                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                    {/* Sidebar Toggle (Topbar) */}
                                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                        <i className="fa fa-bars" />
                                    </button>
                                    {/* Topbar Search */}
                                    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Topbar Navbar */}
                                    <ul className="navbar-nav ml-auto">
                                        {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                        <li className="nav-item dropdown no-arrow d-sm-none">
                                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-search fa-fw" />
                                            </a>
                                            {/* Dropdown - Messages */}
                                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                                <form className="form-inline mr-auto w-100 navbar-search">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">
                                                                <i className="fas fa-search fa-sm" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        
                                        {/* Nav Item - User Information */}
                                        <li className="nav-item dropdown no-arrow">
                                            <a  className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">FEASTA welcomes you, <span style={{color:'Orange',fontWeight:"700",fontSize:'14px'}}>{" "+ admin}</span></span>
                                                <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                                            </a>
                                            {/* Dropdown - User Information */}
                                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                                <a className="dropdown-item" href="#">
                                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                                    Profile
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                                    Settings
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                                    Activity Log
                                                </a>
                                                <div className="dropdown-divider" />
                                                <Link href="/login">
                                                <button className="dropdown-item"  data-toggle="modal" data-target="#logoutModal" onClick={handleLogout} >
                                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                                    Logout
                                                </button></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                {/* End of Topbar */}

                                {/* Begin Page Content */}
                                <div className="container-fluid">
                                    {/* CONTENT */}
                                    {children}
                                    
                                    {/* FOOTER */}
                                    <footer className="sticky-footer bg-white">
                                        <div className="container my-auto">
                                            <div className="copyright text-center my-auto">
                                                <span>Copyright © FEASTA 2020</span>
                                            </div>
                                        </div>
                                    </footer>
                                    {/* End of Footer */}
                        
                                </div>
                                {/* End Page Content */}
                                
                            </div>
                        {/* End of Content Wrapper */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
