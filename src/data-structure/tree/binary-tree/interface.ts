import { TraverseOrder, TreeNode, TreeNodeNullable } from '../base';
import BinaryTree from './index';

type TraversalCallback<K, V> = (node: TreeNode<K, V>) => void;

export type BinaryTreeNullable<K, V> = BinaryTree<K, V> | null | undefined;

/**
 * Binary tree interface
 */
export interface IBinaryTree<K, V> {
  /**
   * get height of the tree
   */
  height(): number;

  /**
   * get size of the tree
   */
  size(): number;

  /**
   * traversing order
   * @param callback traverse callback
   * @param order traverse order
   */
  traverse(callback: TraversalCallback<K, V>, order: TraverseOrder): void;

  /**
   * get a node of the root
   */
  root(): TreeNodeNullable<K, V>;

  /**
   * insert as a child of the right
   * @param node to mount node
   * @param entry insertion entry
   */
  insertAsRC(node: TreeNode<K, V>, entry: Entry<K, V>): void;

  /**
   * insert as a child of the left
   * @param node to mount node
   * @param entry insertion entry
   */
  insertAsLC(node: TreeNode<K, V>, entry: Entry<K, V>): void;

  /**
   * delete a child of the right
   * @param node to delete node
   */
  deleteRC(node: TreeNode<K, V>): void;

  /**
   * delete a child of the left
   * @param node to delete node
   */
  deleteLC(node: TreeNode<K, V>): void;
}
