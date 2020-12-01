/**
 * Tree node
 */
export class TreeNode<K, V> {
  /**
   * data entry
   */
  entry: Entry<K, V>;

  /**
   * left child of the node
   */
  left?: TreeNode<K, V> | null;

  /**
   * right child of the node
   */
  right?: TreeNode<K, V> | null;

  constructor(
    entry: Entry<K, V>,
    left?: TreeNode<K, V>,
    right?: TreeNode<K, V>
  ) {
    this.entry = entry;
    this.left = left;
    this.right = right;
  }
}

/**
 * tree traverse order
 */
export enum TraverseOrder {
  PreOrder,
  InOrder,
  PostOrder,
}