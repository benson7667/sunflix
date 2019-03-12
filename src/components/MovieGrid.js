import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const styles = theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  gridList: {
    width: "100%",
    height: "100%"
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  },
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  },
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  },
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  },
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  },
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  },
  {
    img:
      "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png",
    title: "Image",
    author: "James"
  }
];

function MovieGrid(props) {
  const { classes } = props;

  return (
    <GridList className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">December</ListSubheader>
      </GridListTile>
      {tileData.map(tile => (
        <GridListTile key={tile.img} style={{ width: "20%", height: 300 }}>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

MovieGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieGrid);
