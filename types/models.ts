import { NextApiRequest, NextPageContext } from "next";

export interface IPost {
  id: number;
  title: string;
  body: string;
  author: string;
  isFavorites: boolean;
  isLiked: boolean;
}

export interface IPostNextPageContext extends NextPageContext {
  id: number;
}
export interface IMessageNextApiRequest extends NextApiRequest {
  message: string;
}
