import React from 'react';

const Panel = () => {
    return(
        <div className="panel">
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-open">OPEN</button> 
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-save">PUBLISH</button> 
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-meta">EDITING META</button> 
            <button className="uk-button uk-button-default uk-margin-small-right" uk-toggle="target: #modal-backup">RESTORE</button> 
            <button className="uk-button uk-button-danger" uk-toggle="target: #modal-logout">Sign out</button> 
        </div>
    )
};

export default Panel;