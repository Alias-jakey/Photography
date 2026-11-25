import './App.css'
import Articles from './Articles/Articles.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import './index.css'
import Layout from './layout.jsx'
import {posts} from "./posts.json"
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router";
import Privacy from './privacy/privacy.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'
import Terms from './terms/terms.jsx'
import ArticleInfo from './ArticleInfo/ArticleInfo.jsx'
const articlesChildren = []
posts.forEach((post)=>{
   articlesChildren.push({path : `/photography/articles/${post.slug}`, element : <ArticleInfo post={post}/>})
})
const router = createBrowserRouter([
  {
    path: "/photography",
    element: <Layout/>,
    children: [
      {
        index : true,
        element : <Home/>
      },
      {
        path: "/photography/about",
        element: <About/>
      },{
        path: "/photography/articles",
        element: <Articles/>,
        children : articlesChildren
      },
      {
        path : "/photography/privacy",
        element : <Privacy/>
      },
      {
        path : "/photography/terms",
        element : <Terms/>
      },
      {
        path : "*",
        element : <ErrorPage/>
      }
    ]
  },
]);
export default function App() {

  return(
    <RouterProvider router={router}/>
  )
}
