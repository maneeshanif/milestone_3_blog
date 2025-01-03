import { atom } from 'jotai';




export interface Blog {
  _id: string;
  ImageUrl: string;
  blogTitle: string;
  blogShortParagraph: string;
  blogParagraph: string;
  blogRead: string;
  time: number;
}

// Create an atom to store the blogs data
export const blogsAtom = atom<Blog[]>([]);
