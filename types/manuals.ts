export type FTBCom = {
  contents: Contents[];
};

type Contents = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  titleimage: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  subtitle: string;
  comments: string;
  pdf: {
    url: string;
  };
  relation: [];
  pageImages: [
    {
      fieldId: string;
      pageImages: {
        url: string;
        height: number;
        width: number;
      };
    }
  ];
  addfiles: [];
  addlink: [];
};

export type FTBPortal = {
  contents: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      title: string;
      role: [string];
      body: string;
      addImages: [];
      addImages2: [];
      addImages3: [];
      category: [string];
      head: [string];
      connectionPosts: [];
      addlinks: [];
      addFiles: [];
      author: string | null;
      videos: [];
    }
  ];
};

export type FTBPortalSingle = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  role: [string];
  body: string;
  addImages: [];
  body2: string;
  addImages2: [];
  body3: string;
  addImages3: [];
  category: [string];
  head: [string];
  connectionPosts: [];
  addlinks: [];
  addFiles: [];
  author: string | null;
  videos: [];
  eventId: string;
};

export type FTBPortalSingle2 = {
  contents: [];
};

export type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  role: string[];
  body: string;
  addImages: AddImage[];
  addImages2: any[];
  addImages3: any[];
  category: string[];
  head: any[];
  connectionPosts: any[];
  addlinks: any[];
  addFiles: any[];
  author: null | any;
  videos: null | any;
  eventId: null | string;
};

type AddImage = {
  fieldId: string;
  addImage: {
    url: string;
    height: number;
    width: number;
  };
  addImagetitle: string;
  layout: boolean;
};

export type ArticleImageCatalogs = {
  dmImages: any;
  addImage: {
    fieldId: string;
    url: string;
    layout: boolean;
  };
};

export type CompAIC = {
  images: ArticleImageCatalogs[];
};
