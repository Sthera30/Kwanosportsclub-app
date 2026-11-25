import React, { useEffect } from 'react'
import img1 from '../../public/donate-to-build-tennis-facility-kwano-sports-club.png'
import img2 from '../../public/pay-for-tennis-training-using-atm-card.png'
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

          <h1>Support Our Tennis Community</h1>
          <p>Help us grow the sport we all love</p>

        </div>

      </div>

      <div className='donation-sub'>

        <div className='donation-inner-sub'>

          <img src={img2} alt="Pay for tennis lessons and training sessions using your ATM card at Kwano Sports" title='ATM Card Payment for Tennis Lessons at Kwano Sports Club' loading='lazy' width={512} height={512} />
          <h2>Private Lessons and Training Sessions</h2>
          <p>This is where you pay for private lessons and training sessions</p>

        </div>

      </div>


      <div className='banking-details-container'>

        <h2>Bank details</h2>

        <div className='banking-details-inner'>

          <h7 style={{ textAlign: 'center', fontSize: '1.2rem' }}><BookOpen style={{ color: 'blue' }} fontWeight={800} /> &nbsp;&nbsp;Lessons & Training Sessions Payment Details</h7>

          <div className='banking-'>

            <div className='banking-left'>

              <h3>Bank Name</h3>
              <h3>Capitec Bank</h3>
              &nbsp;
              <h3>Account Number</h3>
              <h3>1580873101</h3>

            </div>

            <div className='banking-right'>

              <h3>Account Type</h3>
              <h3>Savings Account</h3>
              &nbsp;
              <h3>Branch Code</h3>
              <h3>470010</h3>

            </div>

          </div>

        </div>

      </div>


      <div className='donation-sub'>

        <div className='donation-inner-sub'>

          <img src={img1} alt="Donate to Kwano Sports Club to help build our first tennis facility and support a vibrant tennis community" title='Support Kwano Sports Club by Donating Towards Our Tennis Facility' loading='lazy' width={512} height={512} />
          <h2>Make a Donation</h2>
          <p>Your contribution will help us build our first tennis facility and create a vibrant tennis community</p>

        </div>

      </div>


      <div className='banking-details-container'>

        <h2>Bank details</h2>

        <div className='banking-details-inner'>

          <div className='banking-'>

            <div className='banking-left'>

              <h3>Bank Name</h3>
              <h3>First National Bank (FNB)</h3>
              &nbsp;
              <h3>Account Number</h3>
              <h3>63125710368</h3>

            </div>

            <div className='banking-right'>

              <h3>Account Type</h3>
              <h3>Business Account</h3>
              &nbsp;
              <h3>Branch Code</h3>
              <h3>210316</h3>

            </div>

          </div>

        </div>

      </div>


      <div className='donations-query'>

        <p style={{textAlign: 'center', padding: '0rem 2%', lineHeight: '1.2'}}>Have questions about donations? Feel free to reach out using the contact form below.</p>

      </div>

    </>



  )
}

export default GetInvolved
