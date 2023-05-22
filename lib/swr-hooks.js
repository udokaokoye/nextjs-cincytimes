import useSWR from 'swr'

import { useCookies } from "react-cookie";

async function fetcher(url) {
    return await fetch(url).then((res) => res.json())
  }

  export function GetUser(userId, userEmail) {
        const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_user_info.php?${userId ? 'user_id=' + userId : 'u_email=' + userEmail}`, fetcher )
        return {
        users: data,
        isLoad: !error && !data,
        isError: error,
        }

  }

  export function GetStaff(staffId) {
    const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_staff_info.php?staff_id=${staffId}`, fetcher )
    // console.log(data);
    return {
    staff: data,
    isLoad: !error && !data,
    isError: error,
    }
  
  }

  export function GetPostById (postId) {
    const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_post.php?post_id=${postId}`, fetcher )
    // console.log(data)
    return {
    post: data,
    isLoad: !error && !data,
    isError: error,
    }

}

export function GetPostBySlug(postSlug) {
    const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_post.php?slug=${postSlug}`, fetcher )
    return {
    post: data,
    isLoad: !error && !data,
    isError: error,
    }

}

export function GetAllPosts() {
  const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_all_post.php`, fetcher )
  return {
  allpost: data,
  isLoad: !error && !data,
  isError: error,
  }

} 


export function GetEditorById(editorId) {
  const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_staff_info.php?staff_id=${editorId}`, fetcher )
  // console.log(data);
  return {
  editor: data,
  isLoad: !error && !data,
  isError: error,
  }

}

export function GetCategories() {
  const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_category_names.php`, fetcher )
  return {
  categories: data,
  isLoad: !error && !data,
  isError: error,
  }

}

export function GetComments(postId, order = 'DESC') {
  const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_comments.php?post_id=${postId}&order=${encodeURI(order)}`, fetcher )
  // console.log(data);
  return {
  comments: data,
  isLoad: !error && !data,
  isError: error,
  }

}


export function GetAdminEditPosts(postid, published) {
  const { data, error } = useSWR(`https://api.thecincinnatitimes.com/GET/get_admin_post.php?${published ? `published=${published}` : ''}${postid ? `&post_id=${postid}` : ''}`, fetcher )
  // console.log(data)
  return {
  adminPosts: data,
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

  export function useIsAdminLoggedIn() {
    if (typeof window !== 'undefined') {
      if (document.cookie && document.cookie.split('; ').find(row => row.startsWith('staff'))) {
        const staffCookie = document.cookie.split('; ').find(row => row.startsWith('staff')).split('=')[1];
        if (staffCookie !== '') {
          return {
            staffLoggedIn: true,
            staffId: staffCookie
          }
       }
     } else {
      return {
        staffLoggedIn: false,
        staffId: null
      }
     }
    } else {
      return {
        staffLoggedIn: false,
        staffId: null
      }
    }
  }