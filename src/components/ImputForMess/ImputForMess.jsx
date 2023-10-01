import { Formik, Form, Field } from 'formik';

export const InputForMess = () => {
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={(values, actions) => {
        
        console.log(values.message);
        actions.setSubmitting(false); 
      }}
    >
      <Form>
        <Field type="text" name="message" placeholder="Введите сообщение" />
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};