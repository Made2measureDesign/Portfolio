require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Sanakoev Portfolio`,
    siteTitle: `Sanakoev Portfolio`,
    // Default title of the page
    siteHeadline: `Sanakoev's selected work`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://rsportfolio.co.uk/`,
    // Used for SEO
    siteDescription: `Sanakoev's selected work`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@russo`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Sanakoev Portfolio`,
        short_name: `RS P`,
        description: `Selected work`,
        location:"London",
        formatString:	"dddd",
        socialMedia: [
          { title: `PDF Design Portfolio`, href: `https://drive.google.com/file/d/1rBW4mZP-8o2zP2W_0Pfj3uQrEuBk7A_V/view?usp=sharing` },
          { title: `PDF Technical Portfolio`, href: `https://drive.google.com/file/d/1CKrLGptT2q1ZWCNAOsmEg31RKB4Jwbn4/view?usp=sharing` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sanakoev Portfolio`,
        short_name: `RS P`,
        description: `Selected work`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        location:"London",
        socialMedia: [
          { title: `PDF Design Portfolio`, href: `https://drive.google.com/file/d/1rBW4mZP-8o2zP2W_0Pfj3uQrEuBk7A_V/view?usp=sharing` },
          { title: `PDF Technical Portfolio`, href: `https://drive.google.com/file/d/1CKrLGptT2q1ZWCNAOsmEg31RKB4Jwbn4/view?usp=sharing` },
        ],
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
