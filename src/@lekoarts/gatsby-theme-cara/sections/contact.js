import React, { useEffect } from "react"
import { SocialIcon } from 'react-social-icons'

const socialIconStyle = {
    marginLeft: '10px',
}

export default () => {
    
    useEffect(() => {
        console.log('use effect')
        getGithubProfile()
    })

    return (
        <div>
            <h1 style={{ fontSize: 41 }}>Get in touch</h1>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div>
                    Say <span role="img" aria-label='wave'> 👋🏼 </span> <a href="mailto:jkreish@gmail.com?subject=Contact%20from%20JK's%20website"> Hi</a>, or find me on social:
                </div>
                <div style={{ display:'flex', flexDirection:'row' }}>
                    <SocialIcon style={socialIconStyle} url="https://github.com/J-Krush/" />
                    <SocialIcon style={socialIconStyle} url="https://www.linkedin.com/in/john-kreisher-792aa34b/" />
                    <SocialIcon style={socialIconStyle} url="https://open.spotify.com/user/j-krush?si=PSt_ZyNdRj-1onhrKoTP7g" />
                    <SocialIcon style={socialIconStyle} url="https://twitter.com/johnnykreish" />
                </div>
            </div>
        </div>
    )
}

function getGithubProfile() {

    fetch('https://github.com/j-krush/', {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
          },
    })
    .then(response => console.log(response))
}

function getGithubStats(html) {
    let cheerio = require('cheerio')
    let $ = cheerio.load(html)

    // For each .item, we add all the structure of a company to the companiesList array
    // Don't try to understand what follows because we will do it differently.

    let contributions = $('h2 .f4 .mb-2').text()

    console.log(contributions); // Output the data in the terminal
}