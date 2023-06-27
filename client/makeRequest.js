import axios from "axios";

const apiUrl = 'http://localhost:1338/api';
const apiToken =
  'c860f2960e582877888e62a9ae600281da0634db592aab15e379eefe1c9c4e2f4241ea597bd9ff3ea1e7e383298c29243615bb5f1e7a0060c443f9760111a39dab9ac3fd057ca968de2d7d3f518500667a214031f8f5110113ce5336acf9fff3d0af5f309e034150930307c73c497ef9ef99361a5fb8ed4c1c17eadbdcf3b511';

  export const makeRequest = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: 'bearer ' + apiToken,
    },
  });