export default function Home() {
	return (
		<div>
			On the main page
		</div>
	)
}

export async function getServerSideProps() {
	console.log('getServerSideProps ran on /')

	return {
		props: {},
	}
}