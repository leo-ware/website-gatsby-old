import type { GatsbyConfig } from "gatsby"

// const wrapESMPlugin = (name: any) =>
//     function wrapESM(opts: any) {
//         return async (...args: any) => {
//             const mod = await import(name)
//             const plugin = mod.default(opts)
//             return plugin(...args)
//         }
//     }

const config: GatsbyConfig = {
    flags: {
        DEV_SSR: true,
    },
    siteMetadata: {
        title: `Leo Ware`,
        description: "Leo Ware's personal website",
        siteUrl: `https://leo-ware.github.io/`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // file system
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "projects",
                "path": "./src/projects/"
            },
            __key: "projects"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "blog_images",
                "path": "./src/pages/blog/imgs",
            }
        },

        // image stuff
        // these are apparently super finicky, may need to be after the filesystem plugins(?)
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-remark-images",

        // styling
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                root: __dirname,
                gatsbyRemarkPlugins: [
                    // wrapESMPlugin(`remark-gfm`), // wtf @ https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions
                    "gatsby-remark-prismjs",
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 800,
                            linkImagesToOriginal: false
                        },
                    },
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                            strict: `ignore`
                        }
                    }
                ]
            }
        },

        // misc
        "gatsby-plugin-sitemap",
    ]
};

export default config;
