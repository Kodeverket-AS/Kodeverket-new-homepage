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
      name: "companyName",
      title: "Company Name",
      type: "string",
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
