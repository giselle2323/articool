import React from "react";
import PropTypes from "prop-types";

export default function ArticleCard({
  title,
  body,
  isLiked,
  likeCount,
  commentCount
}) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{body}</p>
            <div className="">
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{likeCount}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>{commentCount}
              </span>
            </div>
          </div>
        </div>
  );
}


ArticleCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  isLiked: PropTypes.bool,
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
  
};
