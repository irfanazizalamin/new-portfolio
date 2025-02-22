import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Walter Jogja"
        description="Company Profile of Walter Coffee & Eatery."
        link="https://walterjogja.com/"
        img={{
          src: '/assets/images/project-walter.png',
          alt: 'Walter Coffee & Eatery',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Wordpress</Tags>
            <Tags color={ColorTags.INDIGO}>PHP</Tags>
            <Tags color={ColorTags.ROSE}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Boyolali DEV"
        description="Landing page of Boyolali DEV."
        link="https://boyolali.dev"
        img={{
          src: '/assets/images/project-boyolali-dev.png',
          alt: 'Project Boyolali DEV',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React js</Tags>
            <Tags color={ColorTags.ROSE}>Next js</Tags>
            <Tags color={ColorTags.LIME}>Tailwind</Tags>
          </>
        }
      />
      <Project
        name="Simple Store"
        description="Project for exploring Nuxt 3 SSR/SSG"
        link="https://simple-store-zeta.vercel.app/"
        img={{
          src: 'https://res.cloudinary.com/dfzftvkli/image/upload/8dc47589-0090-44c8-a4c5-79e6696ec7c6',
          alt: 'Project Simple Store',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
            <Tags color={ColorTags.LIME}>Javascript</Tags>
            <Tags color={ColorTags.FUCHSIA}>Vue 3</Tags>
            <Tags color={ColorTags.ROSE}>Nuxt3</Tags>
            <Tags color={ColorTags.LIME}>Tailwind</Tags>
          </>
        }
      />
      <Project
        name="Mamikos Agen"
        description="Dashboard page of Mamikos Agen."
        link="https://mamikos.com/agen"
        img={{
          src: '/assets/images/project-mamikos-agen.png',
          alt: 'Project Mamikos Agen',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Vue 2</Tags>
            <Tags color={ColorTags.ROSE}>HTML</Tags>
            <Tags color={ColorTags.LIME}>CSS</Tags>
            <Tags color={ColorTags.SKY}>Javascript</Tags>
            <Tags color={ColorTags.ROSE}>Tailwind</Tags>
          </>
        }
      />
      <Project
        name="Pertamina Hulu Rokan"
        description="Redesigning Pertamina Hulu Rokan website (still in staging site)."
        link="https://anyar-wheat.vercel.app/"
        img={{
          src: '/assets/images/project-pertamina.png',
          alt: 'Project PHR',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>HTML</Tags>
            <Tags color={ColorTags.LIME}>CSS</Tags>
            <Tags color={ColorTags.SKY}>Javascript</Tags>
            <Tags color={ColorTags.ROSE}>Bootstrap</Tags>
            <Tags color={ColorTags.VIOLET}>Vercel</Tags>
          </>
        }
      />
      <Project
        name="Aerputh"
        description="Aerputh is a company profile project website."
        link="https://aerputh.id/"
        img={{
          src: '/assets/images/project-aerputh.png',
          alt: 'Project Aerputh',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Nuxt 3</Tags>
            <Tags color={ColorTags.EMERALD}>Tailwind</Tags>
            <Tags color={ColorTags.YELLOW}>Leaflet</Tags>
          </>
        }
      />
      <Project
        name="Program Rumah Siap Kerja"
        description="Landing page project of Program Rumah Siap Kerja to show Class of Program Kartu Prakerja"
        link="https://program.rumahsiapkerja.com/prakerja"
        img={{
          src: '/assets/images/project-program-rsk.png',
          alt: 'Project Program RSK',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Wordpress</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Go PTN"
        description="Learning Management System project presented by Jagotes"
        link="https://rasionalisasi.goptn.id"
        img={{
          src: '/assets/images/project-goptn.png',
          alt: 'Project GoPTN',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Nuxt 3</Tags>
            <Tags color={ColorTags.EMERALD}>Tailwind</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
