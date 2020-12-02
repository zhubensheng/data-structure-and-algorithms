import { TreeNode, TraverseOrder, safeHeight, TreeNodeNullable } from '../base';
import { BinaryTreeNullable, IBinaryTree } from './interface';

export default class BinaryTree<K, V> implements IBinaryTree<K, V> {
  private _node: TreeNodeNullable<K, V>;

  private _height: number = 0;

  private _size: number = 0;

  private _getHeight(
    this: BinaryTree<K, V>,
    node: TreeNodeNullable<K, V>
  ): number {
    if (!node) return -1;

    return Math.max(safeHeight(node.left), safeHeight(node.right)) + 1;
  }

  private _updateHeightAbove(
    this: BinaryTree<K, V>,
    node: TreeNodeNullable<K, V>
  ) {
    if (!node) return;

    const height = this._getHeight(node);
    if (height === node.height) return;

    node.height = height;
    node.parent && this._updateHeightAbove(node.parent);
  }

  height(): number {
    return this._height;
  }

  size(): number {
    return this._size;
  }

  traverse(
    callback: (node: TreeNode<K, V>) => void,
    order: TraverseOrder
  ): void {
    throw new Error('Method not implemented.');
  }

  root(): TreeNodeNullable<K, V> {
    return this._node;
  }

  insertAsRC(node: TreeNode<K, V>, entry: Entry<K, V>): void {
    node.insertAsRC(entry);
    this._updateHeightAbove(node);
  }
  
  insertAsLC(node: TreeNode<K, V>, entry: Entry<K, V>): void {
    node.insertAsLC(entry);
    this._updateHeightAbove(node);
  }

  deleteRC(node: TreeNode<K, V>): void {
    node.deleteRC();
    this._updateHeightAbove(node);
  }
  
  deleteLC(node: TreeNode<K, V>): void {
    node.deleteLC();
    this._updateHeightAbove(node);
  }
}
