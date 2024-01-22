import axios from 'axios';

export const saveServerConfigurationApi = ({
  nodeIp,
  serverId,
  configuration,
}: {
  serverId: string;
  nodeIp: string;
  configuration: Record<string, string | number | boolean>;
}) =>
  axios
    .post(
      `http://${nodeIp}:3003/servers/${serverId}/configuration`,
      configuration
    )
    .then((response) => response.data);
