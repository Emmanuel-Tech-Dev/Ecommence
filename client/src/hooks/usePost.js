import { useState, useEffect } from 'react';
import { makeRequest } from '../../makeRequest';

const usePost = (url) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const postData = async (url ,createItem) => {
      try {
        setLoading(true);
        const res = await makeRequest.post(url , createItem);
        setPostData(res.data.data);
      
      } catch (err) {
        setError(true);
        console.error(err.messsage);
        console.error(err.stack);
      }

      setLoading(false);
    };

    postData();
  }, [url]);

  return { postData, loading, error };
};

export default usePost;
