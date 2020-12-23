/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from "react"
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import { Progress } from 'react-sweet-progress';
import VizSensor from 'react-visibility-sensor';
import "react-sweet-progress/lib/style.css";

import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"

import { Skill, SkillData, SoftSkillData } from "../../../content/skill-data"
import StatCard from "./stat-card"
// @ts-ignore
import StatsMDX from "../sections/stats"

const Stats = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {

    var [statsFetched, setStatsFetched] = useState(false)
    var [pushEventsCount, setPushEventsCount] = useState(0)
    var [pushEventsCountUp, setPushEventsCountUp] = useState(0)
    var [pullEventsCount, setPullEventsCount] = useState(0)
    var [pullEventsCountUp, setPullEventsCountUp] = useState(0)

    useEffect(() => {
        // console.log('use effect')
        !statsFetched && getGithubProfile()
    })

    const getGithubProfile = () => {
        // console.log('get github profile')
        setStatsFetched(true)
        const github = require('octokat')({ token: '2bf21cc29e8bf4520a3d02d83740a0ffbc182a59' })
        
        github.fromUrl(`https://api.github.com/users/J-Krush/events`)
            .fetch()
            .then(events => {
                let all = events.fetchAll()
                .then(events => {
                    // console.log('events: ', events)
                    let pushEvents = events.filter(e => e.type === 'PushEvent')

                    let pullEvents = events.filter(e => e.type === 'PullRequestEvent' && e.payload.action === 'closed')
                    
                    let reviewEvents = events.filter(e => e.type === 'PullRequestReviewCommentEvent')

                    // console.log('review events: ', reviewEvents)

                    setPushEventsCount(pushEvents.length)
                    setPullEventsCount(pullEvents.length)
                })
                
            })
    }

    

    return (
        <div>
            <Divider
            bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
            sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
            speed={-0.2}
            offset={1.1}
            factor={factor}
            />
                <Content speed={0.4} offset={offset + 0.2} factor={factor}>
                    <div sx={{ width: '100%' }}>
                        <StatsMDX />
                        <p sx={{ marginTop: 0, paddingBottom: 25 }}>Past 90 days</p>
                    </div>
                <Inner>
                    <div
                    sx={{
                        display: `grid`,
                        gridGap: [4, 4, 4, 5],
                        gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
                        h2: { gridColumn: `-1/1`, color: `white !important` },
                    }}
                    >
                        
                        <VizSensor
                            onChange={(isVisible) => {
                                // console.log('==== VIS SENSOR CHANGE =====', isVisible)
                                isVisible && setPushEventsCountUp(pushEventsCount)
                            }}>
                            <StatCard
                                title="Commits"
                                bg="green"
                                >
                                    <h1 sx={{ fontSize: 100 }}>
                                        <CountUp
                                            end={pushEventsCountUp}
                                        />
                                    </h1>
                            </StatCard>
                        </VizSensor>
                        <VizSensor
                            onChange={(isVisible) => {
                                console.log('==== VIS SENSOR CHANGE =====', isVisible)
                                isVisible && setPullEventsCountUp(pullEventsCount)
                            }}>
                            <StatCard
                                    title="PR's Merged"
                                    bg="linear-gradient(to right, #692d8b 0%, #ec1f79 100%)"
                                    >
                                        <h1 sx={{ fontSize: 100 }}>
                                            <CountUp
                                                end={pullEventsCountUp}
                                            />
                                        </h1>
                            </StatCard>
                        </VizSensor>
                    </div>
                </Inner>
                </Content>
            


            <Divider speed={0.1} offset={offset} factor={factor}>
            <UpDown>
                <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
                <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
                <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
                <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
            </UpDown>
            <UpDownWide>
                <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
                <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
                <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
                <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
                <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
                <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
            </UpDownWide>
            <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
            <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
            <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
            <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
            <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
            <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
            </Divider>
        </div>
    )
}

export default Stats
