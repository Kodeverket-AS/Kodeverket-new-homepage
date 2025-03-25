export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "background",
      title: "background",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "companyName",
        maxLength: 96,
      },
    },
    {
      name: "url",
      title: "Project URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
