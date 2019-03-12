import React from "react";
import ContentLoader from "react-content-loader";

const MovieDetailsLoader = props => (
  <ContentLoader
    height={300}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="120.72" y="116.61" rx="0" ry="0" width="7.8" height="0" />
    <rect x="5" y="11.98" rx="0" ry="0" width="182.7" height="262.53" />
    <rect x="209.08" y="20.98" rx="0" ry="0" width="177.33" height="17" />
    <rect x="208.89" y="50.34" rx="0" ry="0" width="268.68" height="10.38" />
    <rect x="208.89" y="66.14" rx="0" ry="0" width="223" height="10.6" />
    <rect x="208.89" y="82.14" rx="0" ry="0" width="177.33" height="10.82" />
    <rect x="209.08" y="119.98" rx="0" ry="0" width="48.36" height="43.28" />
    <rect x="269.08" y="118.98" rx="0" ry="0" width="48.36" height="43.28" />
    <rect x="328.08" y="118.98" rx="0" ry="0" width="48.36" height="43.28" />
  </ContentLoader>
);

export default MovieDetailsLoader;
