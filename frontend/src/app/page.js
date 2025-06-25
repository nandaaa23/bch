import { client } from "@/lib/sanity";
import ClientComponent from "@/components/ClientComponent";

export default async function Home() {
  const query = `*[_type == "featuredContent"][0]{
    heading,
    subheading,
    cards[]{
      title,
      description,
      image {
        asset->{
          url
        }
      }
    }
  }`;

  const content = await client.fetch(query);

  return <ClientComponent content={content} />;
}
