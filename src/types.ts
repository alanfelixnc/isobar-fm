export type Id = string;

export type URL = string;

export interface Band {
  id: Id;
  name: string;
  image: URL;
  genre: string;
  biography: string;
  numPlays: number;
  albums: Array<Id>;
}
