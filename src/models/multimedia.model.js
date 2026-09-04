import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { TopicModel } from "./topic.model.js";

const MultimediaModel = sequelize.define("multimedia", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  topic_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: "Topics",
      key: "id",
    },
  },
});

MultimediaModel.belongsTo(TopicModel, {
  foreignKey: "topic_id",
  as: "topic",
});

TopicModel.hasMany(MultimediaModel, {
  foreignKey: "topic_id",
  as: "multimedia",
});
