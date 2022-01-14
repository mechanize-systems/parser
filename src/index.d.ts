declare module "estree" {
  interface BaseNode {
    start: number;
    end: number;
  }
}

import * as estree from "estree";

export type CellNode = {
  type: "Cell";
  start: number;
  end: number;
  id: estree.Identifier | null;
  body: estree.BlockStatement | estree.Expression | null;
  references: Array<estree.Identifier>;
  async: boolean;
  generator: boolean;
};

export function parseCell(src: string): CellNode;
