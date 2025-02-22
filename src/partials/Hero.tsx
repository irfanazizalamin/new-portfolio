import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Irfan Aziz Al Amin</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a{' '}
          <span className="text-cyan-400 hover:underline">
            software engineer
          </span>{' '}
          with a focus on creating exceptional user experiences. I'm proficient
          and passionate about{' '}
          <span className="text-cyan-400 hover:underline">web development</span>{' '}
          and enjoy solving real-world problems through innovative apps and
          websites. I thrive on learning new technologies and stay abreast of
          industry trends through local meetups and collaboration with peers.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/irfan-aziz-al-amin-16967b142/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/irfanazizalamin">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
