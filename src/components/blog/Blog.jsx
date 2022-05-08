import React from 'react'

const Blog = () => {
	return (
		<div>
			<h3>Difference between `javascript` and `nodejs`</h3>
			<p>
				Answer: JS is used to write scripts in a website to make it dynamic. So
				it only runs on browsers. NodeJS is a Javascript runtime environment. So
				it can run outside of a browser. JS is mostly used in the front end and
				nodeJS is mostly used on the server side.
			</p>
			<h3>When should you use `nodejs` and when should you use `mongodb`</h3>
			<p>
				Answer: Node.js is an open source JavaScript server environment that can
				be used to connect to both SQL and NoSQL databases such as MySQL and
				MongoDB. On the other hand MongoBD is a NoSQL database system. It is
				mostly used in scalable applications with evolving schemas.
			</p>
			<h3>Differences between `sql` and `nosql` databases.</h3>
			<p>
				Answer: sql is relational database. nosql is not relational but
				categorized. sql is vertically scalable. nosql is horizontally scalable.
				sql is better suitale for complex queries than nosql.
			</p>
			<h3>What is the purpose of `jwt` and how does it work</h3>
			<p>
				Answer: jwt is an open standard that is used for sharing secured
				information between two parties, generally client and server. It works
				creating data with optional signature and/or optional encryption whose
				payload holds JSON that asserts some number of claims.
			</p>
		</div>
	)
}

export default Blog
