import useSWR from 'swr'

import { useCookies } from "react-cookie";

async function fetcher(url) {
    return await fetch(url).then((res) => res.json())
  }

  export function GetUser(userId, userEmail) {
        const { data, error } = useSWR(`http://192.168.1.158/cincinnatitimes/get/get_user_info.php?${userId ? 'user_id=' + userId : 'u_email=' + userEmail}`, fetcher )
        return {
        users: data,
        isLoad: !error && !data,
        isError: error,
        }

  }

  export function GetPostById (postId) {
    const { data, error } = useSWR(`http://192.168.1.158/cincinnatitimes/get/get_post.php?post_id=${postId}`, fetcher )
    // console.log(data)
    return {
    post: data,
    isLoad: !error && !data,
    isError: error,
    }

}

export function GetPostBySlug(postSlug) {
    const { data, error } = useSWR(`http://192.168.1.158/cincinnatitimes/get/get_post.php?slug=${postSlug}`, fetcher )
    return {
    post: data,
    isLoad: !error && !data,
    isError: error,
    }

}


export function GetEditorById(editorId) {
  const { data, error } = useSWR(`http://192.168.1.158/cincinnatitimes/get/get_staff_info.php?staff_id=${editorId}`, fetcher )
  // console.log(data);
  return {
  editor: data,
  isLoad: !error && !data,
  isError: error,
  }

}

export function GetComments(postId) {
  const { data, error } = useSWR(`http://192.168.1.158/cincinnatitimes/get/get_comments.php?post_id=${postId}`, fetcher )
  // console.log(data);
  return {
  comments: data,
  isLoad: !error && !data,
  isError: error,
  }

}


  export function useIsLoggedIn() {
    if (typeof window !== 'undefined') {
      if (document.cookie && document.cookie.split('; ').find(row => row.startsWith('user'))) {
        const UserCookie = document.cookie.split('; ').find(row => row.startsWith('user')).split('=')[1];
        if (UserCookie !== '') {
          return {
            loggedin: true,
            userId: UserCookie
          }
       }
     } else {
      return {
        loggedin: false,
        userId: null
      }
     }
    } else {
      return {
        loggedin: false,
        userId: null
      }
    }
  }