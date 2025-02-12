/// <reference types="vite/client" />
// This provides types for the Vite-injected env variables on import.meta.env
// See https://vite.dev/guide/features.html#client-types

export type CategoryProps = {
  id: number;
  name: string;
  description: string;
};

export type LegoSetProps = {
  id: number;
  name: string;
  set_number: string;
  number_of_pieces: number;
  description: string;
  img_src: string;
  category_id: number;
};
