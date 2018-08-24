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
      d="M8.3,19.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2-2.1c-0.7,0.3-1.5,0.5-2.4,0.6
	c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.3-1.4-3.3-1.7-4.9-0.8s-2.5,2.7-2.1,4.5C8.5,8.4,5.5,6.8,3.4,4.2
	C2.3,6.1,2.9,8.5,4.7,9.7C4,9.7,3.4,9.5,2.8,9.2c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.8,2.8
	C6.6,17.3,4.8,18,3,18c-0.3,0-0.7,0-1-0.1C3.9,19.1,6.1,19.8,8.3,19.8"
    />
  </svg>
)

const TwitterIcon = styled(Icon)([], space, color)

TwitterIcon.displayName = 'TwitterIcon'

TwitterIcon.defaultProps = {
  size: 24
}

export default TwitterIcon
