import styled from 'styled-components'
import bgImg from '@/theme/images/bg.jpg'

export default styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.darkBg && `
    background-color: ${props.theme.colors.primaryBg};
    z-index: 1;
    &:before {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      content: '';
      background: url('${bgImg}') no-repeat center center transparent;
      opacity: .02;
      z-index: -1;
    }
  `}
`
