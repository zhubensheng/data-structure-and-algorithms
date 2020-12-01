import { TreeNode, TraverseOrder } from "../base";
import { IBinaryTree } from "./interface";

export default class BinaryTree<K, V> implements IBinaryTree<K, V> {
  height(): number {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  traverse(callback: (node: TreeNode<K, V>) => void, order: TraverseOrder): void {
    throw new Error("Method not implemented.");
  }
  root(): TreeNode<K, V> {
    throw new Error("Method not implemented.");
  }
  insertAsRC(node: TreeNode<K, V>, entry: Entry<K, V>): void {
    throw new Error("Method not implemented.");
  }
  insertAsLC(node: TreeNode<K, V>, entry: Entry<K, V>): void {
    throw new Error("Method not implemented.");
  }
  deleteRC(node: TreeNode<K, V>): void {
    throw new Error("Method not implemented.");
  }
  deleteLC(node: TreeNode<K, V>): void {
    throw new Error("Method not implemented.");
  }

}