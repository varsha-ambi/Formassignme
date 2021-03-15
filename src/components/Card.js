import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { makeStyles } from "@material-ui/core/styles";

var FontAwesome = require("react-fontawesome");
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary
  }
}));
const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const classes = useStyles();
  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px"
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <Grid container className={classes.root}>
            <Grid item xs={8}>
              <EditIcon
                style={{
                  color: colors[index % 5].primaryColor,
                  cursor: "pointer"
                }}
                onClick={() => setModal(true)}
              ></EditIcon>

              <DeleteRoundedIcon
                style={{
                  color: colors[index % 5].primaryColor,
                  cursor: "pointer"
                }}
                onClick={handleDelete}
              />
            </Grid>
          </Grid>

          {/* <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}>Edit</i> */}
          {/* <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}>Delete</i> */}
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
