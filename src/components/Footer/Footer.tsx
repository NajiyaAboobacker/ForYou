import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className = " mt-auto  text-white " style={{marginBottom:'50px' , bottom:'0' , backgroundColor:"black"}}>
               
                <div className="row m-5">
                    <div className="col-lg-4 col-md-6 my-3 ">
                        <h4 className="mb-3">About Us</h4>
        
                        <h6 >An About Us page is a section on a website that provides information about a company, organization, or individual. 
                        It is an opportunity to tell your brand’s story, share your vision, history, values, and achievements,
                        and introduce team members. This is where you build trust and credibility with customers.
                        </h6>
                    </div>
                <div className="col-lg-4 col-md-6 my-3 ">
                    <h4 className="mb-3">Quick Links</h4>
                    <ul >
                       <li><Link href= "/" >Home</Link></li> 
                       <li><Link href= "/aboutus" >About Us</Link></li> 
                       <li><Link href= "/contactus" >Contact Us</Link></li> 
                       <li><Link href= "/products" >Products</Link></li> 
                       
                        
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 my-3">
                    <h4 className="mb-3">Contact Us</h4>
                    <ul className="list-unstyled">
                      
                        <li>XYZ STREET</li>
                        <li>Phone: 1234567809</li>
                        <li>Email: xyz@example.com</li>
                        
                    </ul>
                </div>
            </div>
        </div>
            
  )
}
