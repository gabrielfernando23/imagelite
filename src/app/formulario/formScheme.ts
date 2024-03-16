import * as Yup from 'yup'

export interface FormProps {
    file: any;
  }

export const formScheme: FormProps = { file: '' }

export const formValidationScheme = Yup.object().shape({
    file: Yup.mixed<Blob>()
    .required('Select an image to upload!')
    .test('size', 'File size cannot be higher than 4 MB', (file) => {
        return file.size < 4000000;
    })
    .test('type', 'Accepted formats: XML', (file) => {
        console.log(file.type)
        return file.type === 'text/xml';
    })
})