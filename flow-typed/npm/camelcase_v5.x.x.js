// flow-typed signature: 7b692b43c1ff429f43b5319e7ae82709
// flow-typed version: c6154227d1/camelcase_v5.x.x/flow_>=v0.104.x

declare module "camelcase" {
  declare module.exports: (
    input: string | string[],
    options?: { pascalCase?: boolean, ... }
  ) => string;
}
