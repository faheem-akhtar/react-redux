import styled from 'styled-components'

export default styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  ${props => props.center && `
    text-align: center;
  `}
  ${props => props.small && `
    max-width: 420px;
  `}
`
