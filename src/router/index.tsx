import { FC, Suspense, useEffect, useState } from "react";
import React from "react";
import routes from './routes.json'
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lazyImport = (componentName: string) => {
    return React.lazy(() => import(`../container/${componentName}`));
};

const Router: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Routers>
            {
                loading ? (<Loading />) : (
                    <Suspense fallback={<Loading />}>
                        <Header />
                        <Routes>
                            {routes.map((route, index) => {
                                const Component = lazyImport(route.component);
                                return <Route key={index} path={route.path} element={<Component />} />;
                            })}
                        </Routes>
                        <Footer />
                    </Suspense>
                )
            }
        </Routers>
    )
}

export default Router;