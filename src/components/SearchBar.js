import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: '', term: ''};
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({search: 'loading'});
        const success = await this.props.onSubmit(this.state.term);
        if (success) this.setState({search: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className={`ui ${this.state.search} search`} style={{margin: '15px', display: 'grid'}}>
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search..." value={this.state.term}
                                   onChange={e => this.setState({term: e.target.value})}/>
                            <i className="search icon"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;