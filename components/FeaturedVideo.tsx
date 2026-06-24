import { ArrowIcon, YouTubeIcon } from './Icons';

const featuredVideo = {
  label: 'Featured Playlist',
  title: '007 First Light Gameplay',
  description: 'A relaxed playthrough with little robot-brained detours.',
  href: 'https://www.youtube.com/playlist?list=PLJwd3ICq2_rMZAku4QfQGIlkVhRLhY4r4',
  thumbnail: '/assets/featured-playlist.png'
};

export function FeaturedVideo() {
  return (
    <section className="featured-card" aria-labelledby="featured-title">
      <a
  className="video-thumb"
  href={featuredVideo.href}
  aria-label={`Watch ${featuredVideo.title}`}
>
  <img src={featuredVideo.thumbnail} alt="" />

  <span className="video-thumb__play" aria-hidden="true">
    <img src="/assets/icons/youtube.svg" alt="" />
  </span>
</a>
      <div className="featured-card__body">
        <p className="eyebrow">{featuredVideo.label}</p>
<h2>{featuredVideo.title}</h2>
<p>{featuredVideo.description}</p>
<a className="button-link" href={featuredVideo.href}>
  Watch Playlist
  <ArrowIcon />
</a>
      </div>
    </section>
  );
}
