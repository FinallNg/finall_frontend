import React from 'react'
import './revoice.css'
import bell from '../../../../assets/bell.png'
import ellipse from '../../../../assets/Ellipse.png'
import message from '../../../../assets/email.png'
import logo from '../../../../assets/logo.png'

export const IntroNav =()=>{
  return (
  <nav> 
  <div>
    <h1 className='revoice-intro-h1'>Good Evening, Enwono</h1>
    <p> Glad to have you here!</p>
  </div>
  <div className='revoice-icons'>
  <div>
    <span className='revoice-bell-icon'><img src={bell} alt='bell-icon' /> </span>
  </div>
    <span> <img src={message} alt='bell-icon'/> </span>
    <span><img src={ellipse} alt='bell-icon'/> </span>

    </div>
  </nav>)
}

export const Revoice = () => {

  const invoiceNo ='INV-2020-060'
  const issueDate = '06 Jul 2020'
  const dueDate = '13 Jul 2020'
  const billTo = 'Chris Drey'
  const billToAddress = 'Lagos,Nigeria'
  return (
    <section className='revoice-section'>
  <IntroNav/>
    <div className='revoice-lower'>
       <main className='revoice-main'>
      <div className='revoice-main-intro txt-reduce'>
      <div>
      <img src={logo} alt='logo' className='revoice-logo'/>
      <p>finall@sidehustle.com</p>
       </div>
      <p className='revoice-beside-l p-short'> Bridgerton Estate,Victoria Island,Lagos Nigeria</p>
      </div>
      <div className='revoice-invoice-card'>
      <div className='r-i-c-1'>
<p>Invoice Number</p>
<span>{invoiceNo}</span>
<span>Issued Date:{issueDate}</span>
<span>Due Date:{dueDate}</span>
      </div>
      <div className='revoice-beside-l '>
      <p>Billed To</p>
<span>{billTo}</span>
<span>{billToAddress}</span>

      </div>
      </div>
      <div className='revoice-details'>
      <div> 
      <p>Item detail</p>
      <p>asdfggh...</p>
      </div>
      <button> Button</button>
      </div>
      <div className='revoice-mid'>
      <div className='revoice-mid-head'>      
      <h2>Item Name</h2>
       <h2>Hours</h2>
       <h2>Rate/Hr</h2>
       <h2>Tax</h2>
       <h2>Total</h2>
      </div>

      </div>
      <div>
      <div className='revoice-item-detail'>
        <span > Project Payment -Finall Web Design </span>
        <span> Description </span>
      </div>
      <div className='revoice-lowest'>
      <div className='revoice-payment-txt'>
      <p>Payment Method </p>
      <p>Select Payment </p>
      </div>
        <div className='revoice-blue-card'>  </div>
      </div>
      </div>

      </main>

      <aside>
      </aside>
      </div>
    </section>
  )
}

