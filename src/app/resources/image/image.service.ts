import {Image} from './image.resource'
class ImageService {
    baseURL: string = 'http://ec2-18-215-160-86.compute-1.amazonaws.com:8080/v1/images';
    async buscar(): Promise<Image[]>{
        const url = `${this.baseURL}`;
        const response = await fetch(url);
        return await response.json();
    }

    async salvar(dados: FormData) : Promise<string>{
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: dados
        })
        return response.headers.get('location') ?? ''
    }
}
export const useImageService = () => new ImageService();