import axios from "axios";

export const api = axios.create({
	baseURL:
		process.env.API_URL ||
		"https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData",
});

export const db = axios.create({
	baseURL:
		process.env.DB_URL ||
		"https://my-json-server.typicode.com/pedrobarbosa0/kinvo-front-end-test/",
});
