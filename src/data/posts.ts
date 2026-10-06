/** Add a real note here when there is one. Do not invent essays. */
export type PostSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  deck: string;
  author: string;
  date: string;
  sections: PostSection[];
};

export const posts: Post[] = [];

export function postBySlug(slug: string | undefined) {
  return posts.find((post) => post.slug === slug);
}
