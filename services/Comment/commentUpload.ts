import instance from 'services/axios';

const commentUpload = (data: {
  user_id: string;
  quote_id: string;
  comment: string;
  movie_id?: string;
}) => {
  return instance.post('/api/auth/comment-upload', data);
};

export default commentUpload;
