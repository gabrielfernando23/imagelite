import { detectContentType } from 'next/dist/server/image-optimizer';
import { Image } from './image.resource'
import { Content } from 'next/font/google';

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar() : Promise<Image[]> {
        const url = `${this.baseURL}`;
        
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
