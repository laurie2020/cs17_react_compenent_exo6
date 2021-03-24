import React from 'react';


export default class Header extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            clicks1: 0,
            clicks2: 0,
            clicks3: 0
        }
    }

    IncrementClicks = () => {
        this.setState({clicks: this.state.clicks + 1});
    }

    render() {
        let self = this;
        return(

            <header>
                <nav>
                    <button 
                        ref={
                            function(el){
                                self._button1 = el;
                            }
                        }

                        onClick={() => {
                            this.setState({clicks1: this.state.clicks1 + 1});
                            console.log(self._button1);
                        }}>
                        J'ai été cliqué {this.state.clicks1} fois
                    </button>
                    <button
                        ref={
                            function(el){
                                self._button2 = el;
                            }
                        }

                        onClick={() => {
                            this.setState({clicks2: this.state.clicks2 + 1});
                            console.log(self._button2);
                        }}>
                        J'ai été cliqué {this.state.clicks2} fois
                    </button>
                    <button
                        ref={
                            function(el){
                                self._button3 = el;
                            }
                        }

                        onClick={() => {
                            this.setState({clicks3: this.state.clicks3 + 1});
                            console.log(self._button3);
                        }}>
                        J'ai été cliqué {this.state.clicks3} fois
                    </button>
                </nav>
            </header>
        )
    }
}