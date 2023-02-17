import React from "react";
import { SWRConfig } from "swr";

import axios from "axios.config";

const SWR = ({
  children,
  fallback,
}: {
  children?: React.ReactNode;
  fallback: any;
}) => {
  return (
    <SWRConfig
      value={{
        fallback: fallback || {},
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
