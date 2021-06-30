import React from "react";
import { Helmet } from 'react-helmet-async';

export default function head(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
