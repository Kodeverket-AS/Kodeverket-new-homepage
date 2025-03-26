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
      validation: Rule => Rule.required().error('logo is required'),
    },
    {
      name: "background",
      title: "background",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required().error('background is required'),
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: Rule => Rule.required().error('company name is required'),
    },
    
    {
      name: "url",
      title: "Project URL",
      type: "url",
      validation: Rule => Rule.required().error('url to project'),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.max(400).warning('Description must be less then 500 characters'),
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
