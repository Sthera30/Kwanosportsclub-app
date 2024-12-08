import React, { useEffect } from 'react'
import { FileTextIcon, DownloadCloudIcon, DownloadIcon } from 'lucide-react'
import '../css/documents.css'

function Documents() {

  const email = "kwanosportsclub@gmail.com"



useEffect(() => {

  window.scrollTo(0,0)

},[])

  return (
    <>

      <div className='documents-burner-container'>

        <div className='documents-burner-inner'>

          <h2>Club Documents</h2>
          <p>Download our NPO Certificate</p>

        </div>

      </div>

      <div className='documents-container'>

        <div className='documents-inner-container'>

          <FileTextIcon style={{ color: 'blue', background: ' hsl(198, 32%, 86%)', padding: '.6rem', width: '3rem', height: '3rem' }} />

          <div className='content'>

            <h5>NPO Certificate</h5>
            <p>PDF Document</p>
            <a href='/kwanobuhle tennis certificate .pdf'><DownloadIcon />&nbsp;Download</a>

          </div>

        </div>

      </div>

      <div className='bottom-query'>

        <p>Having trouble downloading? Contact us at <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target='_blank' role='noopener noreferrer'>kwanosportsclub@gmail.com</a> or reach out using the contact form below.</p>

      </div>

    </>
  )
}

export default Documents
