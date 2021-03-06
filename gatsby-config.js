require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `VU Autonomous Golf Cart`,
    siteTitleAlt: `VU Golf Cart`,
    siteHeadline: `VU Autonomous Golf Cart Website`,
    siteUrl: `https://vugolfcart.github.io`,
    siteDescription: `A project on autonomous driving at Vanderbilt University`,
    siteLanguage: `en`,
    author: `vugolfcart`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
    externalLinks: [
      {
        name: `Github`,
        url: `https://www.github.com/vugolfcart`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/vugolfcart/`
      }
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
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
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
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
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
