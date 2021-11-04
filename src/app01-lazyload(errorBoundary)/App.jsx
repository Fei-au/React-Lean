import React from 'react';
import { Suspense } from 'react/cjs/react.production.min';
import ErrorBoundary from './modules/ErrorBoundary';
import './App.css';


export default class App extends React.Component{
    
    constructor(props){
        super(props);
        this.OtherComponent = React.lazy(()=> import('./modules/OtherComponent'));
        this.AnotherComponent = React.lazy(()=> import('./modules/AnotherComponent'));
    }
    handleOnClick = ()=>{
        import("./modules/math").then(math => {
            console.log(math.add(16, 26));
          });
    }
    render(){
        return (
        <div>
            <ErrorBoundary>
                <span>app...</span>
                <br/>
                <button onClick={this.handleOnClick}>Click me</button>
                <Suspense fallback={<div>loading...</div>}>
                    <section>
                        <this.OtherComponent/>
                        <this.AnotherComponent/>
                    </section>
                </Suspense>
            </ErrorBoundary>
        </div>
        );
    }
}