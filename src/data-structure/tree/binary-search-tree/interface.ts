import { TreeNode } from '../base';
import { IBinaryTree } from '../interface';

export default interface IBinarySearchTree<K, V> extends IBinaryTree<K, V> {
  search(key: K): TreeNode<K, V>;

  insert(key: K): void;

  delete(key: K): void;

  validate(): boolean;
}
