import React from 'react'

const FormSection = () => {
    return (
        <>
            <section className='form_section'>
                <div className='container'>
                    <div className='form_main'>
                        <div className='form_title'>
                            <h6>Newsletter</h6>
                            <h2>Our Popular Courses</h2>
                            <p>Problems trying to resolve the conflict between
                                the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                         <form action="" className='contact_form'>
                            <input type="email" placeholder='Your Email' />
                            <button>Subscribe</button>
                         </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormSection