import React, { Component } from 'react';
import { groupBy, getDate } from '../utils/helper';
import ForecastCard from './forecastCard';
import { connect } from 'react-redux';
import { fetchData, isloading } from '../actions/forecastActions';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.shape(PropTypes.shape({
        city: PropTypes.Object,
        list: PropTypes.arrayOf(PropTypes.shape(PropTypes.Object))
    })),
    dispatch: PropTypes.Func,
    isLoading: PropTypes.bool,
    status: PropTypes.string
};


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '', city: 'London', loader: true, error: 'false'
        };
    }

    componentDidMount = () => {
        this.props.dispatch(fetchData(this.state.city));
    }

    onChange = (e) => {
        this.setState({ city: e.target.value });
    };

    onBtnClick = () =>{
        let error;
        if (this.state.city.length > 0) {
            this.props.dispatch(isloading(true));
            this.props.dispatch(fetchData(this.state.city));
            error = false;
        } else {
            error = true;
        }
        this.setState({ error });
    };

    renderForeCast = () => {
        if (this.props.data !== null) {
            const res = groupBy(this.props.data.list, 'dt_txt');
            let response = [];
            const headerString = <h1>5 day weather forecast in {this.props.data.city.name}</h1>;
            response.push(headerString);
            Object.keys(res).forEach((key, index) => {
                response.push(<div className="forecast-box flex-flow" key={index}>
                    <div className="box forecast-header">
                        {getDate(key)}
                    </div>
                    <div className="forecast-box">
                        <ForecastCard data={res[key]}/>
                    </div>
                </div>);
            });
            return response;
        }
        return null;
    }

    render() {
        if (this.props.isLoading) {
            return <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>;
        }
        return (<div className='wrapper'>
            <div className="box header">
                <h1> Weather Forecast</h1>
            </div>
            <div className="box">
                <div className="box-item">
                    <input name='txtcity' id='txtcity' onChange={this.onChange} className='text-field'
                        value={this.state.city}/>
                </div>
                <div className="box-item">
                    <button name='btnsearch' id='btnsearch' onClick={this.onBtnClick} className='primary-button'>Search
                    </button>
                </div>
            </div>
            { (this.props.status === 'failed' || this.state.error === true) ? <span className="isa_error">Please enter valid city name!</span> : ''}
            {this.renderForeCast()}
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        data: state.foreCast.data,
        status: state.foreCast.status,
        isLoading: state.itemsIsLoading
    };
}

App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
