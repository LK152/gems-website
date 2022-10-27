import axios from 'axios';

const asyncApi = async (path: string) => {
	const apiReturn = await axios
		.get(path)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			if (err) throw err;
		});

	return apiReturn;
};

export default asyncApi;
