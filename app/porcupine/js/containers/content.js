import { connect } from "react-redux";

import Content from "../components/content";
import {
  toggleSidebar,
  setUser,
  setRepository,
  setBranch,
  setCommit,
  updateAuth
} from "../actions";
import { nodesWithParameters, linksWithPorts } from "../selectors/selectors";

const mapStateToProps = state => ({
  showSidebar: state.ui.showSidebar,
  user: state.user,
  modals: state.modals
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
  setUser: user => dispatch(setUser(user)),
  setRepository: repository => dispatch(setRepository(repository)),
  setBranch: branch => dispatch(setBranch(branch)),
  setCommit: commit => dispatch(setCommit(commit)),
  updateAuth: user => dispatch(updateAuth(user))
});

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
