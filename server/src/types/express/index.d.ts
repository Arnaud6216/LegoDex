// to make the file a module and avoid the TypeScript error
export type { CategoryProps, LegosetProps };

declare global {
  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
    }
  }
}

type CategoryProps = {
  id: number;
  name: string;
  description: string;
  img_src: string;
}[];

type LegosetProps = {
  id: number;
  name: string;
  set_number: string;
  number_of_pieces: number;
  description: string;
  img_src: string;
  category_id: number;
};
