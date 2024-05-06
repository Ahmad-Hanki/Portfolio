import { client } from "@/lib/sanity";

export default async function GetProjects () {
  const query = `*[_type =='project'] {
    title,
      _id,
      link,
      description,
      tags,
      "imageUrl":image.asset->url
  }`;

  const data = await client.fetch(query);

  return data
}
