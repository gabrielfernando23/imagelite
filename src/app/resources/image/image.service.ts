import { detectContentType } from 'next/dist/server/image-optimizer';
import { Image } from './image.resource'
import { Content } from 'next/font/google';

class ImageService {
    baseURL: string = 'http://localhost:8080/files';

    async buscar(query: string = "", extension: string = "") : Promise<Image[]> {
        const url = `${this.baseURL}?query=${query}&extension=${extension}`
        const response = await fetch(url);
        return await response.json();
    }

    async salvar (dados: FormData): Promise<string> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: dados,
        })

        return response.headers.get('location') ?? ''
    }
}

export const useImageService = () => new ImageService();