import React from 'react'
import Svg, { Text } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: switch */

const SingaporeSVG = props => (
  <Svg viewBox="0 0 100 125" {...props}>
    <Text
      y={115}
      fontSize={5}
      fontWeight="bold"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      {'Created by BirVa Mehta'}
    </Text>
    <Text
      y={120}
      fontSize={5}
      fontWeight="bold"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      {'from the Noun Project'}
    </Text>
  </Svg>
)

export default SingaporeSVG
