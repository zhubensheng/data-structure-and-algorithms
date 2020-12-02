export function safeHeight(node: TreeNodeNullable<unknown, unknown>) {
  return node ? node.height : -1;
}

interface ITreeNode<K, V> {
  insertAsRC<K, V>(entry: Entry<K, V>): void;

  insertAsLC<K, V>(entry: Entry<K, V>): void;

  deleteRC(): void;

  deleteLC(): void;
}

export type TreeNodeNullable<K, V> = TreeNode<K, V> | null | undefined;

/**
 * Tree node
 */
export class TreeNode<K, V> implements ITreeNode<K, V> {
  /**
   * data entry
   */
  entry: Entry<K, V>;

  /**
   * left child of the node
   */
  left: TreeNodeNullable<K, V>;

  /**
   * right child of the node
   */
  right: TreeNodeNullable<K, V>;

  /**
   * parent node
   */
  parent?: TreeNodeNullable<K, V>;

  /**
   * the node's height on tree
   */
  height: number = 0;

  constructor(
    entry: Entry<K, V>,
    left?: TreeNode<K, V>,
    right?: TreeNode<K, V>
  ) {
    this.entry = entry;
    this.left = left;
    this.right = right;
  }

  insertAsRC<K, V>(this: TreeNode<K, V>, entry: Entry<K, V>): void {
    const node = new TreeNode(entry);
    node.parent = this;
    this.right = node;
  }

  insertAsLC<K, V>(this: TreeNode<K, V>, entry: Entry<K, V>): void {
    const node = new TreeNode(entry);
    node.parent = this;
    this.left = node;
  }

  deleteRC(this: TreeNode<K, V>): void {
    this.right = null;
  }

  deleteLC(): void {
    this.left = null;
  }
}

/**
 * traverse order
 */
export enum TraverseOrder {
  PreOrder,
  InOrder,
  PostOrder,
}
