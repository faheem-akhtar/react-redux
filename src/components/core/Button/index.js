import styled from 'styled-components'

export default styled.button`
  border: none;
  padding: .7em 4em;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondaryBg};
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.11);
  border-radius: 100px;
`

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
`
