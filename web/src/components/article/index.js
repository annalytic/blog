import * as React from "react"
import PortableText from "@sanity/block-content-to-react";

import "./style.css";

const Article = ({ post, serializers }) => (
	<article key={post.node.id}>
		<div className="circle-group"><span/><span/><span/></div>
		<span style={{ display: 'inline-block', marginBottom: '10px', marginTop: '10px' }}>{post.node._createdAt}</span>
		<h2>{ `> ${ post.node.title }` }</h2>
		<PortableText blocks={ post.node._rawBody } serializers={ serializers } />
	</article>
);

export default Article;
