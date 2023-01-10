export default function Blog() {
	return (
		<div>
			On the blog page
		</div>
	)
}

export async function getServerSideProps() {
	console.log('getServerSideProps ran on /blog')

	return {
		props: {},
	}
}