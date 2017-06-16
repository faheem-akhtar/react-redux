import styled from 'styled-components'

export default styled.button`
  border: 2px solid Red;
  padding: .5em 1em;
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondaryBg};
`
