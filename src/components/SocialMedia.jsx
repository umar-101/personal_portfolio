import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';




const SocialMedia = () => {
    return (
        <div className='app__social'>


            <a href="https://www.linkedin.com/in/umar-m-61b642178/">
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a href="https://github.com/umar-101">
                <div>
                    <BsGithub />
                </div>
            </a>
            <a href="https://twitter.com/apnatime_ayega_">
                <div>
                    <BsTwitter />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia