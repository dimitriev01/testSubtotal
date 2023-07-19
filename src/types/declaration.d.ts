declare module "*.scss";

declare module "node" {
  export * from "node";
}

declare module "*.svg" {
  const content: string;
  export default content;
}
