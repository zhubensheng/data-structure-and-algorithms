import { TraverseOrder, TreeNode } from './base';

export interface IBinaryTree<K, V> {
  height(): number;

  size(): number;

  traverse(order: TraverseOrder): void;

  root(): TreeNode<K, V>;
}
