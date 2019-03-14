import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const styles = {
  checkpointWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  iconWrapper: {
    marginRight: "1rem",
    color: "green"
  }
};

class ProjectCheckpointModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <Modal
        size="lg"
        isOpen={isModalOpen}
        toggle={this.toggleModal}
        // className={this.props.className}
        backdrop="static"
      >
        <ModalHeader toggle={this.toggle}>
          Assignment Scope Checkpoint
        </ModalHeader>

        <ModalBody>
          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Browse trending and popular movies
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Search all movies by title
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            View relevant details of a particular movie
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            View details of specific actor or actress including in the movie
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Ensure proper navigation between screens
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Use CSS frameworks bootstrap (rectstrap)
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Use client-side state management libraries - Redux
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Modularized code structure
          </div>

          <div style={styles.checkpointWrapper}>
            <i style={styles.iconWrapper} className="fa fa-check" />
            Use git source control system and make nice commits with proper
            commit messages
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={this.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ProjectCheckpointModal;
