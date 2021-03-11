import Link from "next/link"
import { useRouter } from "next/router";

import { Container, LogoContainer, Menu } from "./styles";

// Assets
import HomeIcon from '../../../../pages/_assets/home/homeMenu.svg';
import LeaderIcon from '../../../../pages/_assets/home/leaderboardMenu.svg';

export const Header = () => {
  const router = useRouter();

  const links = [
    {
      href: '/dashboard',
      children: <HomeIcon />,
    },
    {
      href: '/dashboard/leaderboard',
      children: <LeaderIcon />,
    }
  ];

  console.log(router.pathname)

  return (
    <Container>
      <LogoContainer>
        <Link href="/dashboard">
          <a>
            <img
              src="/icons/logo.svg"
              width={48}
              height={42}
              alt="Move.it"
            />
          </a>
        </Link>
      </LogoContainer>
      <Menu>
        <ul>
          {links.map((link) => (
            <li key={router.pathname} className={link.href === router.pathname ? 'active' : ''}>
              <Link href={link.href}>
                <a>{link.children}</a>
              </Link>
            </li>
            ))}
        </ul>
      </Menu>
    </Container>
  )
}