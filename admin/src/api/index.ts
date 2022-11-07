import axios from 'axios';
import { folderIds } from '../types/global';

export const fetchImage = async (imageId: string) => {
	const res = await fetch(`http://localhost:8000/images/${imageId}`);

	return res.json();
};

export const fetchFolder = async (folderId: folderIds) => {
	const res = await fetch(`http://localhost:8000/images/folder/${folderId}`);

	return res.json();
};

export const postImages = async (data: any, folderId: folderIds) => {
	const res = await axios.post(
		`http://localhost:8000/images/${folderId}`,
		data,
		{
			headers: { 'Content-Type': 'multipart/form-data' },
		}
	);

	return res;
};

export const deleteImage = async (imageId: string) => {
	const res = await axios.delete(`http://localhost:8000/images/${imageId}`);

	return res;
};

export const deleteFolder = async (folderId: folderIds) => {
	const res = await axios.delete(
		`http://localhost:8000/images/folder/${folderId}`
	);

	return res;
};
