import { lazy, LazyExoticComponent} from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXcomponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXcomponent> | JSXcomponent;
    name: string;
    to: string;
}

const lazy1 = lazy(() => import( /* webpackChunkName: LazyPage1 */"../01-lazyload/pages/LazyPage1"));
const lazy2 = lazy(() => import( /* webpackChunkName: LazyPage2 */"../01-lazyload/pages/LazyPage2"));
const lazy3 = lazy(() => import( /* webpackChunkName: LazyPage3 */"../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
    {
        to: '/lazy-1',
        path: 'lazy-1',
        component: lazy1,
        name: 'Lazy-1',
    },
    {
        to: '/lazy-2',
        path: 'lazy-2',
        component: lazy2,
        name: 'Lazy-2',
    },
    {
        to: '/lazy-3',
        path: 'lazy-3',
        component: lazy3,
        name: 'Lazy-3',
    },
];