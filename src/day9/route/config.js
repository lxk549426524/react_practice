import Video from '../containers/video/video'
import Home from '../containers/video/home'
import Menu from '../containers/video/menu'
import Mine from '../containers/video/mine'
import Details from '../containers/video/details'
import Content from '../containers/children/content'
import About from '../containers/children/about'

const routes=[
    {
        path:'/video',
        component:Video,
        children:[
            {
                path:'/video/home',
                component:Home,
                children:[
                    {
                        path:'/video/home/content',
                        component:Content
                    },
                    {
                        path:'/video/home/about',
                        component:About
                    }
                ]
            },
            {
                path:'/video/menu',
                component:Menu
            },
            {
                path:'/video/mine',
                component:Mine
            }
        ]
    },
    {
        path:'/details',
        component:Details
    }
]
export default routes