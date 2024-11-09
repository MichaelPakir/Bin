import { type SchemaTypeDefinition } from "sanity";
import banner from "../schemas/banner";
import products from "./products";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, products, category],
};
