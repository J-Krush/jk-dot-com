/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type SkillCardProps = {
  title: string
  children: React.ReactNode
  bg: string
}

const SkillCard = ({ title, children, bg }: SkillCardProps) => (
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
    <div sx={{ color: `black`, opacity: 1.0 }}>
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
        color: `black`,
      }}
    >
      {title}
    </div>
  </div>
)

export default SkillCard
