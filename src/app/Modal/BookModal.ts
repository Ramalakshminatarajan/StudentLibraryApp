import { Genre } from "../Enum/Genres";

export interface BookData {
    id: string;
    name: string;
    genre: Genre
    author: string;
  }