import React from "react";
import { SWRConfig } from "swr";

import axios from "axios.config";

const SWR = ({ children }: { children?: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000,
        revalidateOnMount: true,
        fetcher: async (resource) => {
          return axios
            .get(resource)
            .then(async (res) => {
              return res.data;
            })
            .catch(async (err) => {
              throw err;
            });
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWR;
