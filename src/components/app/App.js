import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import ('../pages/404'));
const MainPage = lazy(() => import ('../pages/MainPage'));
const SingleComicsPage = lazy(() => import ('../pages/SingleComicsPage'));
const SingleCharacterLayout = lazy(() => import ('../pages/SingleCharacterLayout'));
const ComicsPage = lazy(() => import ('../pages/ComicsPage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                    <AppHeader/>
                <main> 
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route  path="/" element={ <MainPage/>} />
                            <Route  path="/comics" element={<ComicsPage/>} /> 
                            <Route  path="/comics/:comicId" element={<SingleComicsPage/>} /> 
                            <Route  path="/characters/:comicId" element={<SingleCharacterLayout/>} />
                            <Route  path = '*' element={<Page404/>} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
        )
}

export default App;