import React, { useEffect } from 'react';
import { fetchSmurfs } from '../actions/index';
import { connect } from 'react-redux';


const SmurfsList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [props]);

    return (
        <div classname = 'container'>
            <h1> Welcome to the Smurf Village</h1>
            {props.isloading ? <p>Loading Village Members...</p> : null}
            {props.error ? <p>{props.error}</p>: null}
            {props.smurfs.map((smurfs) => (
                <div>
                    <h4>{smurfs.name}</h4>
                    <p>{smurfs.age}</p>
                    <p>{smurfs.height}</p>
                    </div>
            ))};
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isloading: state.isloading,
        jokes: state.smurfsData,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchSmurfs})(SmurfsList);