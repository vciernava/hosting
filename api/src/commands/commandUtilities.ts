import { ServerNode } from '../models/ServerNode';

export const getAgentUrl = (node: ServerNode) => {
  return `http://${node.ip}:3003`;
};
