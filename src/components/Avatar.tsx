import { useMemo } from 'react'
import styled from 'styled-components/native'

import useSession from '#/hooks/useSession'

export default ({
  size = 35,
  editable = false
}: {
  size?: number
  editable?: boolean
}) => {
  const { session } = useSession()

  return <Avatar source={{ uri: session?.relativePhoto ?? '' }} size={size} />
}

const Avatar = styled.Image<{ size: number }>`
  object-fit: cover;
  border-radius: ${props => props.size / 2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #ccc;
`
