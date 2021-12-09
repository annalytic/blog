export default {
  name: "siteSettings",
  type: "document",
  title: "Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site Title",
    },
    {
      name: "description",
      type: "text",
      title: "Site Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description: "The URL of main site.",
    },
  ],
};
