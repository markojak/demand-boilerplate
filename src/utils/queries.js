export const fetchNavigationsQuery = `
  allNavigations {
    edges {
      node {
        location
        body {
          ...on NavigationBodyMenu_item {
            primary {
              section_title
            }
            fields {
              
              name
              external_url
              page {
                ...on Page {
                  name
                  template
                  _meta {
                    uid
                  }
                }
              }
              scroll_path
            }
          }
        }
      }
    }
  }
`;

export const fetchSocialIconsQuery = `
  allSocial_icons {
    edges {
      node {
        type
        url
      }
    }
  }
`;

export const fetchIndexPageQuery = `
  allPages(where: {template: "index"}) {
    edges {
      node {
        name
        _meta {
          uid
        }
        template
        seo_title
        seo_description
        og_title
        og_description
        og_image
      }
    }
  }
`;
