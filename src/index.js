import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplates from "./templates/HomeTemplates";
import Home from './pages/Home/Home.jsx'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UseStateDemo from "./pages/Hooks/UseStateDemo/UseStateDemo";
import UseEffectDidMouthDemo from "./pages/Hooks/UseEffectDemo/UseEffectDidMouthDemo";
import UseEffectWillUnmountDemo from "./pages/Hooks/UseEffectDemo/UseEffectWillUnmountDemo";
import UseEffectDidUpdateDemo from "./pages/Hooks/UseEffectDemo/UseEffectDidUpdateDemo";
import HookUseCallBack from "./pages/Hooks/UseCallbackDemo/HookUseCallBack";
import HookMemo from "./pages/Hooks/UseMemo/HookMemo";
import UseRefDemo from "./pages/Hooks/UseRefDemo/UseRefDemo";
import UseReduxDemo from "./pages/Hooks/UseReduxDemo/UseReduxDemo";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplates />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="usestate" element={<UseStateDemo />} />
                    <Route path="useeffect" element={<UseEffectDidMouthDemo />} />
                    <Route path="useeffectunmount" element={<UseEffectWillUnmountDemo />} />
                    <Route path="useeffectdidupdate" element={<UseEffectDidUpdateDemo />} />
                    <Route path="usecallback" element={<HookUseCallBack />} />
                    <Route path="usememo" element={<HookMemo />} />
                    <Route path="useref" element={<UseRefDemo />} />
                    <Route path="useredux" element={<UseReduxDemo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)