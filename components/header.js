import Link from 'next/link'
import styled from 'react-emotion'

const List = styled.ul({
  listStyleType: 'none',
  display: 'flex',
  'li + li': {
    marginLeft: '10px'
  }
})

const Header = () => (
  <header>
    <List>
      <li><Link href='/'><a>home</a></Link></li>
      <li><Link href='/random'><a>random</a></Link></li>
      <li><Link href='/transition'><a>transition</a></Link></li>
    </List>
  </header>
)

export default Header
