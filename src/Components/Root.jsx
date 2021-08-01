import React, { Component, lazy,  Suspense } from 'react';
import Fallback from './Fallback';
const Header = lazy(()=>import('./Header/Intro'));

export default class Root extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<Fallback />} >
                    <Header />
                </Suspense>
            </div>
        )
    }
}
