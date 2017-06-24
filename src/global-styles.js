import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    min-width: 320px;
    font-size: 16px;
    line-height: 1.2;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid transparent;
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  .slideUp-enter {
    opacity: 0;
    transform: translateY(100%);
  }
  .slideUp-enter.slideUp-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms ease-in 300ms;
  }

  .slideUp-leave {
    opacity: 1;
    transform: translateY(0);
  }
  .slideUp-leave.slideUp-leave-active {
    opacity: 0;
    transform: translateY(100%);
    transition: all 300ms ease-in;
  }
`
