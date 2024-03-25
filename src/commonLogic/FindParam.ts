export interface PathParams {
  id?: string;
  keywordURL?: string;
}

export const extractParamsFromUrl = (): any => {
  const [hash, query] = window.location.href.split("#")[1].split("?");
  const params = Object.fromEntries(new URLSearchParams(query));

  console.log("params: ", params);
  console.log("hash: ", hash);
  // return params
  // const { keywordURL } = params;
  // console.log('keywordURL: ', {keywordURL});
  return params;
};
