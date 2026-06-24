import Image from 'next/image';
import { RobotHead } from '@/components/RobotHead';
import { LinkCard } from '@/components/LinkCard';
import { FeaturedVideo } from '@/components/FeaturedVideo';
import { BlogIcon, BlueskyIcon, InstagramIcon, YouTubeIcon } from '@/components/Icons';

const links = [
{
  title: 'YouTube',
  href: 'https://www.youtube.com/@AnotherRobotGames',
  description: 'Gameplay, games, and the industry.',
  icon: <img className="icon icon--youtube" src="/assets/icons/youtube.svg" alt="" />,
  footerIcon: <img className="icon icon--youtube" src="/assets/icons/footer/youtube.svg" alt="" />
},
{
  title: 'Bluesky',
  href: 'https://bsky.app/profile/anotherrobot.com',
  description: 'Short thoughts and links from the web.',
  icon: <img className="icon icon--bluesky" src="/assets/icons/bluesky.svg" alt="" />,
  footerIcon: <img className="icon icon--bluesky" src="/assets/icons/footer/bluesky.svg" alt="" />
},
{
  title: 'Instagram',
  href: 'https://www.instagram.com/anotherrobothq/',
  description: 'Photos, snippets, and behind-the-scenes.',
  icon: <img className="icon icon--instagram" src="/assets/icons/instagram.svg" alt="" />,
  footerIcon: <img className="icon icon--instagram" src="/assets/icons/footer/instagram.svg" alt="" />
},
{
  title: 'Threads',
  href: 'https://www.threads.com/@anotherrobothq',
  description: 'Quick posts and loose thoughts.',
  icon: <img className="icon icon--threads" src="/assets/icons/threads.svg" alt="" />,
  footerIcon: <img className="icon icon--threads" src="/assets/icons/footer/threads.svg" alt="" />
},
{
  title: 'Blog',
  href: '/blog/',
  description: 'Longer thoughts and rambles.',
  icon: <img className="icon icon--blog" src="/assets/icons/file-text.svg" alt="" />,
  footerIcon: <img className="icon icon--blog" src="/assets/icons/footer/file-text.svg" alt="" />,
  className: 'link-card--games'
}];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="brand-header" aria-label="AnotherRobot home">
        <a className="brand-lockup" href="/" aria-label="AnotherRobot home">
          <Image src="/assets/logo-horizontal.svg" alt="AnotherRobot" width={640} height={132} priority />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <h1 id="hero-title">Curious.<br />Creative.<br />Human.<br /><span>(Mostly.)</span></h1>
          <p>Games, thoughts, tech, and little adventures from a friendly robot-brained human.</p>
        </div>
        <div className="hero__art" aria-hidden="true">
          <div className="dot-field" />

	  <div className="robot-wrap">
          <img className="hero-robot" src="/assets/robot-head-orange.svg" alt="" />
          <div className="robot-shadow" />
	  </div>
        </div>
      </section>

      <section className="links-grid" aria-label="AnotherRobot links">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </section>

      <FeaturedVideo />

    <footer className="footer-band">
  <div className="footer-band__inner">
    <div className="footer-band__mark" aria-hidden="true">
      <img src="/assets/robot-head-orange.svg" alt="" />
    </div>

    <div className="footer-band__copy">
      <p className="footer-band__headline">
        Built by Jason.<br />
        Fueled by curiosity.
      </p>
      <p>
        Thanks for stopping by.<br />
        Build things. Share things. Be kind.
      </p>
    </div>

    <nav className="footer-links" aria-label="Footer links">
      {links.map((link) => (
        <a key={link.title} href={link.href} aria-label={link.title}>
          {link.footerIcon ?? link.icon}
          <span>{link.title}</span>
        </a>
      ))}
    </nav>
  </div>

  <p className="copyright copyright--footer">
    © 2026 AnotherRobot. All rights reserved.
  </p>
</footer>
   </main>
  );
}
