import React, { useEffect } from 'react'
import '../css/equipment.css'
import {
    Heart,
    ShieldCheck,
    Package,
    Send,
    ArrowDownToLine
} from 'lucide-react'

function Equipment() {

    useEffect(() => {

        window.scrollTo(0, 0)

    },[])

    return (
        <>

            <div className='equipment-burner-container'>


                <div className='equipment-burner-inner'>


                </div>


            </div>

            <div className='equipment-heading'>

                <h2>Donate Equipment</h2>
                <p>Help us support the next generation of tennis and soccer players</p>

            </div>


            <div className='equipment-container-'>

                <div className='equipment-box'>

                    <h3><Package style={{ color: 'blue' }} />&nbsp;What We Accept</h3>
                    <ul className='no-bullets'>

                        <li><ShieldCheck style={{ color: 'green' }} />&nbsp;&nbsp;Tennis rackets and balls</li>
                        <li><ShieldCheck style={{ color: 'green' }} />&nbsp;&nbsp;Tennis machines</li>
                        <li><ShieldCheck style={{ color: 'green' }} />&nbsp;&nbsp;Junior soccer boots and kits</li>
                        <li><ShieldCheck style={{ color: 'green' }} />&nbsp;&nbsp;Soccer balls</li>

                    </ul>

                </div>

                <div className='equipment-box'>

                    <h3><Heart style={{ color: 'red' }} />&nbsp;How Your Donation Helps</h3>
                    <ul className='no-bullets'>

                        <p>

                            <ArrowDownToLine  className='arrow' style={{ color: 'purple' }} /> <li> Your donation helps us provide tennis rackets and balls to underprivileged kids who might lose interest in the sport due to a lack of proper equipment </li>


                        </p>

                        <p>

                            <ArrowDownToLine className='arrow' style={{ color: 'purple' }} />  <li>Tennis rackets and balls are expensive, and your support makes these essentials accessible to the community </li>

                        </p>

                        <p>

                            <ArrowDownToLine className='arrow' style={{ color: 'purple' }} /> <li>We accept second hand tennis balls in good condition, ensuring more kids can stay engaged in sports</li>


                        </p>


                        <p>

                            <ArrowDownToLine className='arrow' style={{ color: 'purple' }} />   <li>Ensure youth in the community have the tools they need to stay active and pursue their passion for sports</li>


                        </p>

                    </ul>

                </div>

            </div>

        </>
    )
}

export default Equipment
