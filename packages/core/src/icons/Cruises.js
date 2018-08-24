import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Icon = ({ size, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentcolor"
  >
    <path
      d="M19.2,20.2c-1.3,0-2.5-0.5-3.6-1.2c-2.2,1.5-5,1.5-7.2,0c-1.1,0.7-2.3,1.2-3.6,1.2H3V22h1.8
	c1.3,0,2.4-0.4,3.6-0.9c2.2,1.2,5,1.2,7.2,0c1.2,0.5,2.3,0.9,3.6,0.9H21v-1.8H19.2z M4.8,18.4L4.8,18.4c1.4,0,2.7-0.8,3.6-1.8
	c0.9,1,2.2,1.8,3.6,1.8s2.7-0.8,3.6-1.8c0.9,1,2.2,1.8,3.6,1.8l0,0l1.7-6.1c0.1-0.3,0.1-0.5-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.5
	l-1.1-0.4V6.5c0-1-0.8-1.8-1.8-1.8h-2.7V2H9.3v2.7H6.6c-1,0-1.8,0.8-1.8,1.8v4.2l-1.2,0.4c-0.3,0.1-0.5,0.3-0.5,0.5
	C3,11.7,3,12.1,3,12.3L4.8,18.4z M6.6,6.5h10.8v3.6L12,8.4l-5.4,1.8V6.5z"
    />
  </svg>
)

const CruisesIcon = styled(Icon)([], space, color)

CruisesIcon.displayName = 'CruisesIcon'

CruisesIcon.defaultProps = {
  size: 24
}

export default CruisesIcon
