/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type StatCardProps = {
  title: string
  children: React.ReactNode
  bg: string
}

const StatCard = ({ title, children, bg }: StatCardProps) => (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div sx={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: `white`, opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
      {children}
    </div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
        color: `white`,
      }}
    >
      {title}
    </div>
  </div>
)

export default StatCard
