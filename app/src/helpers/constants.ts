export const enum Colors{
    BLACK="#151515",
    TURQOISE="rgb(78,225,160)",
    DARK_GRAY="#242424",
    LIGHT_GRAY="#D9D9D9",
    WHITE="#FFFFFF",
    PINK="#CAA8F5",
    BLUE="#3F88C5"
}

export const gitLogoOriginal = 'ghLogo';
export const fmLogoOriginal = 'fmLogo';
export const linkedInLogoOriginal = 'linkedInLogo';
export const twitterLogoOriginal = 'twitterLogo';

export const introduction = {
    header: "Nice to meet you! ",
    greetings: "Adam Keyes.",
    description:
      "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
    image: `${process.env.PUBLIC_URL}/assets/images/image-profile-desktop.webp`,
    username: "adamkeyes",
    cta:"I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible."
  };

export const Fonts = {
    Large:{
        fontFamily:"Space Grotesk",
        fontSize:'2vw',
        lineHeight:"2.5vw",
        fontWeight:600
    },
    Medium:{
        fontFamily:"Space Grotesk Light",
        fontSize:'1.1vw',
        lineHeight:"2.5vh",
        fontWeight:600
    },
    ExtraMedium:{
        fontFamily:"Space Grotesk Light",
        fontSize:'1.75rem',
        lineHeight:"2.5vh",
        fontWeight:600
    },
    ExtraLarge:{
        fontFamily:"Space Grotesk Medium",
        fontSize:'5.25vw',
        fontWeight:700
    }
}

export const projects = [
    {
      image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-1-large.webp`,
      header: "DESIGN PORTFOLIO",
      technology: ["HTML", "CSS"],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-2-large.webp`,
      header: "E-LEARNING LANDING PAGE",
      technology: ["HTML", "CSS"],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-3-large.webp`,
      header: "TODO WEB APP",
      technology: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-4-large.webp`,
      header: "ENTERTAINMENT WEB APP",
      technology: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-5-large.webp`,
      header: "MEMORY GAME",
      technology: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-6-large.webp`,
      header: "ART GALLERY SHOWCASE",
      technology: ["HTML", "CSS", "JAVASCRIPT"],
    },
  ];

  