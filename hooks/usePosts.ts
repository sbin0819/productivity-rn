import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../slices/posts';

export default function usePosts({enabled = true}: {enabled: boolean}) {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  return {
    ...posts,
    refetch: fetchData,
  };
}
