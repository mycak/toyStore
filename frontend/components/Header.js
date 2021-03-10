import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 5rem;
  position: relative;
  z-index: 2;
  background: var(--peach);
  border-radius: 0.5em;
  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1em;
  }
`;

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  .bar {
    min-width: 100%;
    border-bottom: 10px solid var(--black, black);
    display: flex;
    justify-content: space-around;
  }

  .sub-bar {
    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">ToyLand</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
