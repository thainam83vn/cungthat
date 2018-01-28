import React from 'react';
import env from './env';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: 0
        }
    }
    adjustSize(root){
        if (this.state.imgHeight !== 0)
            return;

        let w = (root.clientWidth - 444);
        let h = root.clientHeight;
        let imgH = 100;
        let len = this.props.total;
        if (len <= 2){
            imgH = h - 200;
        } else if (len <= 4){
            imgH = h/2 - 100;
        } else if (len <= 6){
            imgH = h/3 - 50;
        } else if (len <= 8){
            imgH = h/4 - 25;            
        } else {
            imgH = 100;
        }
        this.setState({imgHeight: imgH});
        console.log("Root", w,h,imgH);        
    }
    renderImg(file){
        let url = `${env.CAUSIEU}/${this.props.date}/ManHinh${this.props.screen}/${file}`;
        return <img style={{ height: this.state.imgHeight }} src={url} />
    }
    render() {
        return (
            <div className="wrapper" ref={e=>this.adjustSize(root)}>
                <ul className="grid cards">
                    {this.props.files.map(file =>
                        <li className="card" >
                            <div>
                            {
                                this.renderImg(file)
                            }
                            </div>
                            <div>{file.replace('.jpg', '')}</div>
                        </li>
                    )}

                </ul>
            </div>
        );
    }
}