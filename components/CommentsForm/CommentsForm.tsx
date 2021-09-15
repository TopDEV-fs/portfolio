import React from 'react';
import * as Styled from './CommentsForm.styles';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormikTextField from '../Portfolio/FormikTextField/FormikTextField';
import ActionButton from '../Portfolio/ActionButton/ActionButton';
import { FiSend } from 'react-icons/fi';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const validationSchema = yup.object({
  author: yup.string().required('Please introduce Yourself'),
  comment: yup.string().required('Please leave your comment'),
});

/**
 *Renders form where user can submit a comment
 *@function CommentsForm
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CommentsForm = (): JSX.Element => {
  const { isLoading, isCommentPersisted } = useTypedSelector(
    (state) => state.comments
  );
  const { uploadNewComment } = useActions();

  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.Message>👋 Hey! I hope you liked the project 😉</Styled.Message>
        <Styled.Text>
          If you really enjoyed this experience. Consider leaving a comment!
        </Styled.Text>
        <Styled.Text>🙌 I would love to hear from you!</Styled.Text>
      </Styled.TextWrapper>

      <Formik
        initialValues={{ author: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={async (data) => {
          uploadNewComment(data);
        }}
      >
        <Form>
          <FormikTextField placeholder="name" name="author" type="text" />
          <FormikTextField placeholder="comment" name="comment" type="text" />

          <ActionButton
            buttonText={isCommentPersisted ? '🙌 Thanks 💫' : 'Shoot'}
            icon={<FiSend className={'action-icon'} />}
            isLoading={isLoading}
            type="submit"
          />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default CommentsForm;
