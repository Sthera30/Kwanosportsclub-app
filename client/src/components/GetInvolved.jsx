import React, { useEffect } from 'react'
import img1 from '../assets/donation.png'
import img2 from '../assets/atm-card.png'
import '../css/GetInvolved.css'
import { BookOpen, CreditCard } from 'lucide-react'

function GetInvolved() {


  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])

  return (

    <>
      <div className='Get-Involved-Burner'>

        <div className='Get-Involved-Inner'>

          <h2>Support Our Tennis Community</h2>
          <p>Help us grow the sport we all love</p>

        </div>

      </div>

      <div className='donation-sub'>

        <div className='donation-inner-sub'>

          <img src={img2} alt="" />
          <h2>Private Lessons and Training Sessions</h2>
          <p>This is where you pay for private lessons and training sessions</p>

        </div>

      </div>


      <div className='banking-details-container'>

        <h2>Bank details</h2>

        <div className='banking-details-inner'>

        <h7 style={{textAlign: 'center', fontSize: '1.2rem'}}><BookOpen style={{color: 'blue'}} fontWeight={800} /> &nbsp;&nbsp;Lessons & Training Sessions Payment Details</h7>


          <div className='banking-'>


            <div className='banking-left'>

              <h5>Bank Name</h5>
              <h4>Capitec Bank</h4>
              <h6>Account Number</h6>
              <p>1580873101</p>

            </div>

            <div className='banking-right'>

              <h5>Account Type</h5>
              <h4>Savings Account</h4>
              <h6>Branch Code</h6>
              <p>470010</p>

            </div>

          </div>

        </div>

      </div>


      <div className='donation-sub'>

        <div className='donation-inner-sub'>

          <img src={img1} alt="" />
          <h2>Make a Donation</h2>
          <p>Your contribution will help us build our first tennis facility and create a vibrant tennis community</p>

        </div>

      </div>


      <div className='banking-details-container'>

        <h2>Bank details</h2>

        <div className='banking-details-inner'>

          <div className='banking-'>

            <div className='banking-left'>

              <h5>Bank Name</h5>
              <h4>First National Bank (FNB)</h4>
              <h6>Account Number</h6>
              <p>63125710368</p>

            </div>

            <div className='banking-right'>

              <h5>Account Type</h5>
              <h4>Business Account</h4>
              <h6>Branch Code</h6>
              <p>210316</p>

            </div>

          </div>

        </div>

      </div>


      <div className='donations-query'>

        <p>Have questions about donations? Feel free to reach out using the contact form below.</p>

      </div>

    </>



  )
}

export default GetInvolved
