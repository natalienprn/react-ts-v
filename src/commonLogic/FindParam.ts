// FindPath.ts

export interface PathParams {
    id?: string;
    keywordURL?: string;
  }
  
  export const extractParamsFromUrl = (): PathParams => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const keywordURL = urlParams.get('keyword');
  
    return { id: id || undefined, keywordURL : keywordURL || undefined };
  };
  