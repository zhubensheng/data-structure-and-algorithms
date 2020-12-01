import { TraverseOrder, TreeNode } from '../base';
import IBinarySearchTree from './interface';

/**
 * Binary Search Tree
 */
export default class BST<K, V> implements IBinarySearchTree<K, V> {
  search(key: K): TreeNode<K, V> {
    throw new Error('Method not implemented.');
  }
  insert(key: K): void {
    throw new Error('Method not implemented.');
  }
  delete(key: K): void {
    throw new Error('Method not implemented.');
  }
  validate(): boolean {
    throw new Error('Method not implemented.');
  }
  height(): number {
    throw new Error('Method not implemented.');
  }
  size(): number {
    throw new Error('Method not implemented.');
  }
  traverse(order: TraverseOrder): void {
    throw new Error('Method not implemented.');
  }
  root(): TreeNode<K, V> {
    throw new Error('Method not implemented.');
  }
}
