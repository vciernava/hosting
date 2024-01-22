import axios from 'axios';

export const getServerWorldsApi = ({
  nodeIp,
  serverId,
}: {
  serverId: string;
  nodeIp: string;
}) =>
  axios
    .get(`http://${nodeIp}:3003/servers/${serverId}/worlds`)
    .then((response) => response.data);
