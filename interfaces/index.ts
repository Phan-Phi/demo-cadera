interface IPage<T extends unknown[]> {
  initData: T;
  fallback: {
    [key: string]: any;
  };
}

export type { IPage };

export * from "./responseSchema";
// export * from "./UseFetch";
