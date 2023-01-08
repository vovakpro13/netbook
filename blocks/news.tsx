"use client";

import React from "react";
import { NewsArticles } from "../constants/news-articles";
import ArticlePreviewBox from "../partials/news/ArticlePreviewBox";

const News = () => {
  return (
    <div className="mt-[15px] sm:mt-[96px] py-[34px]">
      <div className="container flex items-center flex-col gap-[40px] sm:gap-[80px]">
        <div className="max-w-[440px] text-center">
          <p className="subtitle">What happened recently?</p>
          <p className="big-title mt-[9px]">Latest News</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[30px] xl:gap-[75px]">
          {NewsArticles.map((news) => (
            <ArticlePreviewBox key={news.title} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
