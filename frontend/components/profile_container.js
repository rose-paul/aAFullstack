import { connect } from "react-redux";
import Profile from "./profile";
import { logoutUser } from "../actions/session_actions";
import { fetchAllPosts, deletePhoto } from "../actions/post_actions";

const mapStateToProps = (state) => {
    return {
    
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    errors: state.errors.posts

}};
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    fetchUserPosts: username => dispatch(fetchAllPosts(username)),
    deletePhoto: postId => dispatch(deletePhoto(postId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);