import React from 'react'

const Contact = () => {
  return (
    <div className='contact-form'>
      <div className='contact-text'>
        <h1>Let&apos;s work together</h1>
        <p>I&apos;d love to hear about what you&apos;re working on and how I could help.</p>
</div>
      
<div className="container">
  <form>

    <label htmlFor="fname">First Name</label>
    <input type="text" name="firstname" placeholder="Your name.."></input>

    <label htmlFor="lname">Last Name</label>
    <input type="text"  name="lastname" placeholder="Your last name.."></input>
    <label htmlFor="text">Messege</label>
    <textarea  name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Send Message"></input>

  </form>
</div>
</div>   
  )
}

export default Contact
