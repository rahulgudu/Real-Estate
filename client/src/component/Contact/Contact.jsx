import React from 'react'
import "./conatct.css"
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";
const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
            {/* Left Side */}
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing the best service believe a good place tp live can make your life better</span>

                <div className='flexColStart contactModes'>
                    {/* First Row */}
                    <div className='flexStart row'>
                        {/* First Mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexCenter'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>124 578 903</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Call Now</div>
                        </div>

                        {/* Second Mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexCenter'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>124 578 903</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Chat Now</div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className='flexStart row'>
                        {/* First Mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexCenter'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>124 578 903</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Video Call Now</div>
                        </div>

                        {/* Second Mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexCenter'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>124 578 903</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Message</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='c-right'>
                <div className='image-container'>
                    <img src='./contact.jpg' alt='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact