import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Martin rules</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Zanthe" timeAgo="Today at 6:00PM" comment="Nice blog post!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Hannah" timeAgo="Today at 9:00PM" comment="Woot" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Abigail" timeAgo="Today at 2:00PM" comment="UWOTM8" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
        



    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
