import axios from 'axios'

interface Post {
  id: string,
  authorId: string,
  title: string,
  content: string
}

// axios返回Promise类型数据，函数注解中通过泛型定义promise成功返回的数据解构
export const getPosts = (): Promise<Post> => {
  return axios({
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'GET'
  }).then(res => {
    return res.data.data
  })
}

getPosts().then(data => {
  console.log(data)
})
