import { detectContentType } from 'next/dist/server/image-optimizer';
import { Image } from './image.resource'
import { Content } from 'next/font/google';

class ImageService {
    baseURL: string = 'http://172.19.0.2:8081/v1/images';

    async buscar(query: string = "", extension: string = "") : Promise<Image[]> {
        const url = `${this.baseURL}?query=${query}&extension=${extension}`;
        
        console.log('Fazendo requisição GET para:', url);

        try {
            const response = await fetch(url);
            console.log(response)
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar imagens:', error);
            throw error;
        }
    }

    async salvar (dados: FormData): Promise<string> {
        console.log('Enviando imagem para:', this.baseURL);

        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                body: dados,
            });
            
            return response.headers.get('location') ?? '';
        } catch (error) {
            console.error('Erro ao salvar imagem:', error);
            throw error;
        }
    }
}

export const useImageService = () => new ImageService();
