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
import Terms from './terms/terms.jsx'
import ArticleInfo from './ArticleInfo/ArticleInfo.jsx'
const articlesChildren = []
posts.forEach((post)=>{
   articlesChildren.push({path : `/articles/${post.slug}`, element : <ArticleInfo post={post}/>})
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index : true,
        element : <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },{
        path: "/articles",
        element: <Articles/>,
        children : articlesChildren
      },
      {
        path : "/privacy",
        element : <Privacy/>
      },
      {
        path : "/terms",
        element : <Terms/>
      }
    ]
  },
]);
export default function App() {

  return(
    <RouterProvider router={router}/>
  )
}
