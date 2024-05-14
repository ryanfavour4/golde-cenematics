import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "@layouts/loaders/Spinner";

const LandingPage = lazy(() => import("@pages/LandingPage"));

const Routers = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default Routers;
