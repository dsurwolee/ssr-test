export default function BlogPost() {
	return (
		<div>
			On the blog post page
		</div>
	)
}

export async function getServerSideProps() {
	console.log('getServerSideProps ran on /blog/[slug]')

	return {
		props: {},
	}
}