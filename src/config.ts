export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  titleLines: string[]
  subtitle: string
}

export interface ManifestoConfig {
  headingText: string
  bodyText: string
  videoPath: string
}

export interface ExhibitionArticleSection {
  heading: string
  body: string
}

export interface ExhibitionItem {
  slug: string
  title: string
  image: string
  year: string
  eyebrow: string
  intro: string
  sections: ExhibitionArticleSection[]
}

export interface ExhibitionsConfig {
  sectionLabel: string
  countLabel: string
  detailBackText: string
  items: ExhibitionItem[]
}

export interface PavilionVideoItem {
  src: string
  caption: string
}

export interface PavilionsConfig {
  sectionLabel: string
  videos: PavilionVideoItem[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterConfig {
  visitLabel: string
  visitLines: string[]
  connectLabel: string
  connectLinks: FooterLink[]
  brandName: string
  rightsText: string
  coordinatesText: string
}

// Site Configuration
export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Chronicles of the Living — Immersive 3D Storytelling",
  siteDescription: "Step into living worlds where every frame breathes with wonder. Explore immersive 3D narratives that blur the boundary between dream and reality.",
}

// Navigation Configuration
export const navigationConfig: NavigationConfig = {
  brandName: "Chronicles",
  links: [
    { label: "Worlds", href: "#exhibitions" },
    { label: "Vision", href: "#manifesto" },
    { label: "Pavilions", href: "#pavilions" },
    { label: "Contact", href: "#contact" },
  ],
}

// Hero Configuration
export const heroConfig: HeroConfig = {
  titleLines: ["Where Stories", "Come Alive"],
  subtitle: "Immersive 3D Narrative Experiences",
}

// Manifesto Configuration
export const manifestoConfig: ManifestoConfig = {
  headingText: "We Craft Living Worlds",
  bodyText: "Every universe begins as a whisper of imagination. We transform those whispers into fully realized 3D worlds where characters breathe, landscapes shift with emotion, and narratives unfold around you. Our stories are not watched. They are inhabited. Each creation is an invitation to step beyond the screen and lose yourself inside a realm that feels unmistakably, breathtakingly alive.",
  videoPath: "/videos/manifesto-vision.mp4",
}

// Exhibitions Configuration
export const exhibitionsConfig: ExhibitionsConfig = {
  sectionLabel: "Living Worlds",
  countLabel: "Six Realms",
  detailBackText: "Back to Worlds",
  items: [
    {
      slug: "realms-of-aether",
      title: "Realms of Aether",
      image: "/images/realms-of-aether.jpg",
      year: "2026",
      eyebrow: "Floating Kingdoms",
      intro: "Ancient civilizations never fell. They simply learned to drift. Realms of Aether takes you through floating archipelagos of stone and starlight, where gravity is a suggestion and every sunset paints the sky in impossible golds. This is a world built on wonder.",
      sections: [
        {
          heading: "The Architecture of Impossibility",
          body: "Every spire and bridge in Aether was designed with a simple premise: what if the laws of physics were merely polite suggestions? Our artists spent eighteen months studying classical architecture before unlearning every rule. The result is a world where aqueducts carry light instead of water, and towers grow like crystalline flowers toward an eternal dawn. Each structure tells the story of a civilization that chose imagination over limitation.",
        },
        {
          heading: "Characters of the Clouds",
          body: "The inhabitants of Aether are as fluid as the sky itself. Meet the Skyweavers, artisans who spin clouds into solid form, and the Windcallers who navigate between floating islands using nothing but song. Every character you encounter carries generations of oral history, and their voices were performed by a cast of thirty voice actors to create a living tapestry of dialects and personalities that make this world feel genuinely inhabited.",
        },
        {
          heading: "An Eternal Golden Hour",
          body: "Time moves differently in Aether. The sun never fully sets, caught in a perpetual state of descent that bathes the world in warm amber light. This was a deliberate narrative choice. We wanted visitors to feel the nostalgia of a perfect moment extended indefinitely, a place where the magic hour lasts forever and every shadow tells a story of light.",
        },
      ],
    },
    {
      slug: "deep-chronicles",
      title: "Deep Chronicles",
      image: "/images/deep-chronicles.jpg",
      year: "2026",
      eyebrow: "Submerged Histories",
      intro: "Beneath the surface lies a history we forgot we had. Deep Chronicles plunges you into an underwater realm where ancient civilizations never ended, they simply adapted. Coral grows through marble halls, and bioluminescent creatures light the way through forgotten temples.",
      sections: [
        {
          heading: "The Sunken Metropolis",
          body: "At the heart of Deep Chronicles lies a city that once stood at the center of the ancient world. When you enter its submerged gates, you are walking through layers of time preserved in perfect stillness. Our team collaborated with marine biologists and underwater archaeologists to create environments that feel authentically reclaimed by the ocean. Every barnacle, every shaft of light filtering through water, every swimming silhouette in the distance was placed with obsessive attention to realism.",
        },
        {
          heading: "Bioluminescent Storytelling",
          body: "Light speaks in the depths. The creatures of this world do not merely exist as background detail. They are the narrators. Schools of lantern fish guide you toward hidden chambers. Giant jellyfish pulse with rhythms that match the emotional beats of the story. We developed a proprietary lighting engine that allows organic light sources to respond to narrative pacing, creating moments where the environment itself seems to breathe with the story.",
        },
      ],
    },
    {
      slug: "silent-monoliths",
      title: "Silent Monoliths",
      image: "/images/silent-monoliths.jpg",
      year: "2025",
      eyebrow: "Desert of Giants",
      intro: "In the vast desert of Kharak, colossal stone faces watch over travelers. No one remembers who carved them. No one knows if they are statues or sleeping gods. Silent Monoliths is a meditation on scale, time, and the stories that outlive their tellers.",
      sections: [
        {
          heading: "The Watchers in Stone",
          body: "The monoliths have stood for millennia, their faces weathered by sandstorms into expressions that seem to shift with the light. Our photogrammetry team traveled to real desert landscapes to capture the precise way wind sculpts stone over centuries. Each monolith in this world is unique, modeled after real geological formations but imbued with a haunting anthropomorphic quality that makes the desert feel less empty and more attentive.",
        },
        {
          heading: "A Journey Measured in Footsteps",
          body: "The scale of Silent Monoliths is intentionally overwhelming. We use a proprietary depth system that makes every footstep feel earned. The journey between monoliths can take twenty minutes of real time, during which the landscape subtly changes. Sand dunes shift. New carvings appear on weathered stone. The desert is not static. It is patient, and it rewards those who match its pace with revelations that transform the meaning of everything that came before.",
        },
        {
          heading: "Voices on the Wind",
          body: "There is no traditional dialogue in Silent Monoliths. The story is told through ambient sound design that responds to your position in the world. Stand in the shadow of a monolith and you might hear whispers in a dead language. Climb to a high dune at dusk and the wind itself carries fragments of an epic poem, assembled differently for every traveler. We worked with linguists to construct a believable ancient language, then fragmented it into environmental audio that each visitor reassembles differently.",
        },
      ],
    },
    {
      slug: "crystal-veil",
      title: "Crystal Veil",
      image: "/images/crystal-veil.jpg",
      year: "2025",
      eyebrow: "The Glass Forest",
      intro: "Between dawn and daylight exists a forest that should not exist. Trees of translucent crystal refract the morning light into spectral patterns across mossy paths. Crystal Veil is our most intimate world, a place of quiet wonder where every surface is a lens and every shadow is a prism.",
      sections: [
        {
          heading: "Light as a Living Thing",
          body: "In most 3D environments, light is a tool. In Crystal Veil, it is a character. Our proprietary refraction engine simulates how light travels through crystalline structures in real time, splitting white sunlight into rainbows that dance across the forest floor as virtual breezes move the branches. Every visit to Crystal Veil is visually unique because the light is always changing, always finding new paths through the translucent canopy above.",
        },
        {
          heading: "The Memory of Ice",
          body: "The crystals in this forest do not merely refract light. They store it. Touch certain formations and they glow with the warmth of the last hand that touched them, hours or days before. This mechanic creates a subtle multiplayer experience where visitors leave traces of their presence for others to discover. The forest becomes a shared diary written in luminescence, a space where strangers connect through light without ever meeting.",
        },
      ],
    },
    {
      slug: "clockwork-odyssey",
      title: "Clockwork Odyssey",
      image: "/images/clockwork-odyssey.jpg",
      year: "2024",
      eyebrow: "City of Infinite Gears",
      intro: "Welcome to Cog, a city where time is not measured but manufactured. Every clock tower ticks to its own rhythm. Every street is a mechanism. In Clockwork Odyssey, you are a repair worker who discovers that the city itself is a machine designed for a purpose no one remembers.",
      sections: [
        {
          heading: "A Machine the Size of a City",
          body: "Every element of Cog moves with mechanical precision. Gears the size of buildings turn with geological slowness, while clockwork automata scurry through alleyways performing maintenance tasks passed down through generations of programming. Our engineering consultants helped design a city that could theoretically function as a machine, with steam pipes doubling as infrastructure and the rhythmic ticking of a million mechanisms creating an ambient industrial symphony that is strangely meditative.",
        },
        {
          heading: "Time is Currency",
          body: "In Cog, time is not abstract. It is literal coinage. The wealthy purchase years. The poor trade minutes. This economic system shapes every interaction in the world. We wrote over forty hours of branching dialogue exploring how a society functions when time can be spent, saved, stolen, and inherited. The result is a narrative that uses its steampunk aesthetic to explore genuinely philosophical questions about mortality and value.",
        },
        {
          heading: "The Unwinding",
          body: "Something is wrong in Cog. The great central mainspring is running down, and no one knows how to rewind it. As you progress through the story, you will notice the city subtly slowing. Animations take longer. NPCs move with increasing lethargy. The soundtrack gradually loses tempo. It is a world dying in slow motion, and the story asks whether saving it is worth the cost of what it has become.",
        },
      ],
    },
    {
      slug: "nebula-gardens",
      title: "Nebula Gardens",
      image: "/images/nebula-gardens.jpg",
      year: "2024",
      eyebrow: "Cosmic Horticulture",
      intro: "In the void between stars, someone is gardening. Floating islands of alien flora drift through clouds of interstellar gas, tended by beings who speak in photosynthesis and think in seasons that last centuries. Nebula Gardens is our most transcendent world, a meditation on growth, care, and beauty on a cosmic scale.",
      sections: [
        {
          heading: "Botany Beyond Earth",
          body: "Every plant in Nebula Gardens was designed with biological plausibility in mind. Working with astrobiologists, our artists imagined how vegetation might adapt to zero gravity, cosmic radiation, and the unique light spectrum of nebula clouds. The result is flora that feels genuinely alien yet obeys internal logic. Some plants are kilometers wide. Others exist as distributed networks spanning multiple islands. All of them respond to your presence with behaviors that suggest a kind of slow, vegetative consciousness.",
        },
        {
          heading: "Gardeners of the Cosmos",
          body: "The caretakers of these gardens are not characters in the traditional sense. They are vast, slow-moving entities that communicate through changes in the environment. When one is pleased, flowers bloom in your path. When one is curious, bioluminescent spores spell out questions in the air. Understanding their language is the central challenge of the experience, and players who learn to read the gardens find themselves engaged in conversations that unfold over hours, conducted entirely through organic metaphor.",
        },
      ],
    },
  ],
}

// Pavilions Configuration
export const pavilionsConfig: PavilionsConfig = {
  sectionLabel: "Immersive Pavilions",
  videos: [
    {
      src: "/videos/pavilion-aether.mp4",
      caption: "Aether City — Where civilization learned to fly",
    },
    {
      src: "/videos/pavilion-forest.mp4",
      caption: "The Whispering Forest — Ancient trees that remember",
    },
  ],
}

// Footer Configuration
export const footerConfig: FooterConfig = {
  visitLabel: "Experience",
  visitLines: [
    "Chronicles of the Living",
    "Immersive 3D Storytelling Studio",
    "Khardah,Kolkata,India",
    "Open by appointment",
  ],
  connectLabel: "Connect",
  connectLinks: [
    { label: "Instagram", href: "#" },
    { label: "Vimeo", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  brandName: "Chronicles",
  rightsText: "2026 Chronicles of the Living. All rights reserved.",
  coordinatesText: "34.0522 N, 118.2437 W",
}
