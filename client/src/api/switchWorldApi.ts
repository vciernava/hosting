import axios from 'axios';

export const switchWorldApi = ({
  nodeIp,
  serverId,
  world,
}: {
  serverId: string;
  nodeIp: string;
  world: string;
}) =>
  axios
    .post(`http://${nodeIp}:3003/servers/${serverId}/worlds/${world}/switch`)
    .then((response) => response.data);
