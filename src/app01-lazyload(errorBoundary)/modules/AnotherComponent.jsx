import react from 'react';

export default class AnotherComponent extends react.Component{
    list = '123';
    render(){
        return(
            <div>
                <h1>
                    Another Component
                </h1>
                {this.list.map((item, index)=>{
                    return <h1>item</h1>
                })}
            </div>
        );
    }
}