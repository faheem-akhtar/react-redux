import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.4em 0.5em;
  border: 1px solid transparent;
  background: none;
  text-align: inherit;
  margin-bottom: .5em;
  font-size: ${30 / 16}em;
  width: 100%;
  color: ${props => props.theme.colors.primary()};
  ${props => props.error && `
    border-color: ${props.theme.colors.error()};
  `}
`
