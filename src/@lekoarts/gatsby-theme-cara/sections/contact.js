import React from "react"
import { SocialIcon } from 'react-social-icons'

const socialIconStyle = {
    marginLeft: '10px',
}

export default () => (
    <div>
        <h1 style={{ fontSize: 41 }}>Get in touch.</h1>
        <div>
            Say 👋🏼 <a href="mailto:jkreish@gmail.com?subject=Contact%20from%20JK's%20website">Hi</a>, or find me on social:
            <SocialIcon style={socialIconStyle} url="https://github.com/J-Krush/" />
            <SocialIcon style={socialIconStyle} url="https://www.linkedin.com/in/john-kreisher-792aa34b/" />
            <SocialIcon style={socialIconStyle} url="https://open.spotify.com/user/j-krush?si=PSt_ZyNdRj-1onhrKoTP7g" />
            <SocialIcon style={socialIconStyle} url="https://twitter.com/johnnykreish" />
        </div>        
    </div>
)