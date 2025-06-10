import React from 'react'
import { Card } from 'antd';
import functinality1image from '../../assets/Images/functinality1image'
import functinality2image from '../../assets/Images/functinality2image'
import functinality3image from '../../assets/Images/functinality3image'
const Functionality = () => {
    return (
        <>
            <section className='functionality_section'>
                <div className='container'>
                    <div className='functinality_main'>
                       
                        <Card title="Card title" variant="borderless">
                            <img
                                src={functinality1image}
                                alt="functinality1image"
                            />
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                              <Card title="Card title" variant="borderless">
                            <img
                                src={functinality2image}
                                alt="functinality2image"
                            />
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                              <Card title="Card title" variant="borderless">
                            <img
                                src={functinality3image}
                                alt="functinality3image"
                            />
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Functionality