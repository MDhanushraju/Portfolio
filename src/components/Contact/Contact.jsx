import React from 'react'
import './Contact.css'
const resumeUrl = "/M_Dhanush_Resume (2).pdf";
export default function Contact() {
  return (
    <>
      <div className="container sp" id='contact'>
        <div className="container contact">
          <h1>Contact Me:-</h1>
          <span className='contact-row icon-1'>
            <i className="bi bi-telegram "></i>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdhanushraju345@gmail.com" target="_blank" rel="noreferrer">mdhanushraju345@gmail.com</a>
          </span>
          <br />
          <span className='contact-row icon-2'>
            <i className="bi bi-telephone "></i>
            <a href="tel:+917416412802">+91 7416412802</a>
          </span>
          <br />
          <div className='social'>
            <span>
              <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/dhanushraju_/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </span>
           
          </div>
           <button className='btn btn-danger res' ><a href={resumeUrl} download="Dhanush">Download resume</a></button>
        </div>
        <div className="container email mt-2">
          <form action="" className=''>
            <input type="text" className='form-control' name='Name' placeholder='Enter the your name'/>
            <input type="email" name="email" id="" className='form-control mt-4' placeholder='Enter the your email'/>
            <textarea name="Message" id="" className='form-control mt-4 ' placeholder='Enter the text' rows={4} ></textarea>
           <button type="submit" className='btn btn-danger mt-3'>Submit </button>
          </form>
        </div>
      </div>
    </>
  )
}
