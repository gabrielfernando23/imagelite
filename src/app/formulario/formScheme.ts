import * as Yup from 'yup'

export interface FormProps {
    file: any;
    name: string;
    tags: string;
  }

export const formScheme: FormProps = { file: '', name: '', tags: '' }

export const formValidationScheme = Yup.object().shape({
    file: Yup.mixed<Blob>()
    .required('Select an image to upload!')
    .test('size', 'File size cannot be higher than 20 MB', (file) => {
        return file.size < 20000000;
    })
})