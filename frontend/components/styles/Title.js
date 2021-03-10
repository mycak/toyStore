import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 0.5em;
  text-align: center;
  margin-top: -2rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    -webkit-border-border-radius: 0.5rem;
    -moz-border-border-radius: 0.5rem;
    border-radius: 0.25em;
    word-break: break-word;
    background: var(--peach);
    display: inline;
    line-height: 1.3;
    font-size: 3rem;
    text-align: center;
    color: white;
    box-decoration-break: clone;
    padding: 0 0.5em;
  }
`;

export default Title;
