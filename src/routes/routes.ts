import { lazy, LazyExoticComponent} from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXcomponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXcomponent> | JSXcomponent;
    name: string;
    to: string;
}

const LazyLayout = lazy(() => import( /* webpackChunkName: LazyLayout1 */"../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        component: LazyLayout,
        name: 'Lazy - DASHBOARD',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'no-lazy',
    },
];