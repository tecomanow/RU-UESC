import React  from "react";

export default class TabelaAlmoco extends React.Component{
    render(){
        return(
            <div>
                {this.props.arrayAlmoco.map(
                    row=>
                    <div>
                        <div><h4>Proteína: </h4>{row.proteinas}</div>
                        <div><h4>Complementos: </h4>{row.complementos}</div>
                        <div><h4>Salada: </h4>{row.saladas}</div>
                        <div><h4>Sucos: </h4>{row.sucos}</div>
                    </div>
                )}
            </div>
        )
    }
}