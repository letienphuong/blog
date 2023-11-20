import React, { Fragment, useEffect } from 'react'
import PostItem from '../PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { deletePost, getPostList, startEditingPost } from 'pages/blog/blog.slice'
import http from 'utils/http'
import SkeletonPost from '../SkeletonPost'

//Goi API trong useEffect()
//Neu goi thanh cong thi dispatch action type: "blog/getPostListSuccess"
//Neu goi that bai thif dispatch action type: "blog/getPostListFailed"

//xxxx: Dispatch action type "blog/getPostList" => Khong duoc dung

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const loading = useSelector((state: RootState) => state.blog.loading)
  const dispatch = useAppDispatch() //O typescript thi moi can config useDispatch o store.s, con Reactjs thi su dung truc tiep useDispatch()

  useEffect(() => {
    // const controller = new AbortController()

    // http
    //   .get('/posts', {
    //     signal: controller.signal
    //   })
    //   .then(function (res) {
    //     console.log(res.data)
    //     const postsListResult = res.data
    //     dispatch({
    //       type: 'blog/getPostListSuccess',
    //       payload: postsListResult
    //     })
    //   })
    //   .catch((error) => {
    //     if (!(error.code === 'ERR_CANCELED')) {
    //       dispatch({
    //         type: 'blog/getPostListFailed',
    //         payload: error
    //       })
    //     }
    //   })
    // return () => {
    //   controller.abort()
    // }
    const promise = dispatch(getPostList())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  const handleDelete = (postId: string) => {
    dispatch(deletePost(postId))
  }

  const handleStartEditing = (postId: string) => {
    dispatch(startEditingPost(postId))
  }

  // console.log(postList)
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {loading && (
            <Fragment>
              <SkeletonPost />
              <SkeletonPost />
            </Fragment>
          )}
          {!loading &&
            postList.map((post) => (
              <PostItem post={post} key={post.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing} />
            ))}
        </div>
      </div>
    </div>
  )
}
