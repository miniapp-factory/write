"use client";

import { FC } from "react";
import Purchase from "./purchase";

interface ArticleProps {
  title: string;
  content: string;
  writerAddress: string;
}

const Article: FC<ArticleProps> = ({ title, content, writerAddress }) => {
  return (
    <div className="w-full max-w-2xl bg-background rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Written by: {writerAddress}
      </p>
      <p className="mb-4">{content}</p>
      <Purchase writerAddress={writerAddress} articleTitle={title} />
    </div>
  );
};

export default Article;
