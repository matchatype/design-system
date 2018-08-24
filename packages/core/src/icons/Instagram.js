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
      d="M21.9,7.9c0-1.1-0.2-1.8-0.5-2.4c-0.3-0.7-0.6-1.2-1.2-1.8s-1.1-0.9-1.8-1.2c-0.6-0.2-1.4-0.4-2.4-0.5
	C15.1,2,14.7,2,12,2S8.9,2,7.9,2.1c-1.1,0-1.8,0.2-2.4,0.5C4.8,2.8,4.2,3.1,3.7,3.7S2.8,4.8,2.5,5.5C2.3,6.1,2.1,6.8,2.1,7.9
	C2,8.9,2,9.3,2,12s0,3.1,0.1,4.1c0,1.1,0.2,1.8,0.5,2.4c0.3,0.7,0.6,1.2,1.2,1.8s1.1,0.9,1.8,1.2c0.6,0.2,1.4,0.4,2.4,0.5
	C8.9,22,9.3,22,12,22s3.1,0,4.1-0.1c1.1,0,1.8-0.2,2.4-0.5c0.7-0.3,1.2-0.6,1.8-1.2s0.9-1.1,1.2-1.8c0.2-0.6,0.4-1.4,0.5-2.4
	c0-1.1,0.1-1.4,0.1-4.1S22,8.9,21.9,7.9z M20.1,16c0,1-0.2,1.5-0.3,1.9c-0.2,0.5-0.4,0.8-0.7,1.1c-0.3,0.3-0.7,0.6-1.1,0.7
	c-0.4,0.1-0.9,0.3-1.9,0.3c-1.1,0-1.4,0.1-4,0.1c-2.7,0-3,0-4-0.1c-1,0-1.5-0.2-1.9-0.3C5.6,19.6,5.3,19.4,5,19
	c-0.3-0.3-0.6-0.7-0.7-1.1C4.1,17.5,3.9,17,3.9,16c0-1.1-0.1-1.4-0.1-4s0-3,0.1-4c0-1,0.2-1.5,0.3-1.9C4.4,5.6,4.6,5.3,5,5
	c0.3-0.3,0.7-0.6,1.1-0.7C6.5,4.1,7,3.9,8,3.9c1.1,0,1.4-0.1,4-0.1s3,0,4,0.1c1,0,1.5,0.2,1.9,0.3C18.4,4.4,18.7,4.6,19,5
	c0.3,0.3,0.6,0.7,0.7,1.1C19.9,6.5,20.1,7,20.1,8c0,1.1,0.1,1.4,0.1,4S20.2,15,20.1,16z M12,6.9c-2.8,0-5.1,2.3-5.1,5.1
	s2.3,5.1,5.1,5.1s5.1-2.3,5.1-5.1S14.8,6.9,12,6.9z M12,15.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3
	S13.8,15.3,12,15.3z M18.5,6.7c0,0.7-0.5,1.2-1.2,1.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2C18,5.5,18.5,6,18.5,6.7z"
    />
  </svg>
)

const InstagramIcon = styled(Icon)([], space, color)

InstagramIcon.displayName = 'InstagramIcon'

InstagramIcon.defaultProps = {
  size: 24
}

export default InstagramIcon
