var React = require('react');

const ProjectDetails = React.createClass({
    
    render: function () {
        const { store } = this.context;

        const close = () => {
            const { store } = this.context;
            store.dispatch({
                type:'CLOSE_PROJECT_DETAILS'
            })
        } 

        const currentProject = store.getState().project.active;
        const visibility = store.getState().project.visibility;
        const className = `project-details ${visibility} project-${currentProject.id}`;
        const style = {
            backgroundImage:currentProject.isPlaceholder ? 'none' : `url(${currentProject.cover})`
        }

        return (
        <div  className={className} style={style}>
            <div className="close-bt" onClick={close}/>
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