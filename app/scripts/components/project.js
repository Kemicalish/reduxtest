var React = require('react');

const ProjectDetails = React.createClass({
    render: function () {
        const { store } = this.context;

        const currentProject = store.getState().project.active;
        const visibility = currentProject.isPlaceholder ? 'hidden' : 'shown';
        const className = `project-details ${visibility}`;
        const style = {
            backgroundImage:`url(${currentProject.cover})`
        }

        return (<div  className={className} style={style}>
            PROJECT DETAILS {currentProject.cover}
        </div>
        );
    }
});
ProjectDetails.contextTypes ={
    store: React.PropTypes.object
}

export {
    ProjectDetails
} 