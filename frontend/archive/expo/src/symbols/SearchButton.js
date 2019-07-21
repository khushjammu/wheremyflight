import React from 'react'
import Svg, { Defs, Circle, G, Use, Path, Polygon } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SearchButtonSVG = props => (
  <Svg width={51} height={51} viewBox="0 0 51 51" {...props}>
    <Defs>
      <Circle id="path-1" cx={21.5} cy={21.5} r={21.5} />
    </Defs>
    <G id="interation-4" fill="none" fillRule="evenodd">
      <G id="intro-w/-keyboard" transform="translate(-162 -221)">
        <G id="search-button" transform="translate(166 223)">
          <G id="Oval" fillRule="nonzero">
          {/* Used this to solve bug: https://github.com/react-native-community/react-native-svg/issues/500*/}
            <Use fill="#000" filter="url(#filter-2)" href="#path-1" xlinkHref="#path-1" />
            <Use fill="#FFF" href="#path-1" xlinkHref="#path-1" />
          </G>
          <G id="baseline-search-24px" transform="translate(10 10)">
            <Path
              d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z"
              id="Shape"
              fill="#000"
              fillRule="nonzero"
            />
            <Polygon id="Shape" points="0 0 24 0 24 24 0 24" />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default SearchButtonSVG
