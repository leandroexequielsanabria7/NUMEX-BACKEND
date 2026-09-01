import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { TopicModel } from "./topic.model";

export const SubtopicModel = sequelize.define("subtopic", {
  titleSubtopic: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  descriptionSubtopic: {
    type: DataTypes.STRING(100),
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

SubtopicModel.belongsTo(TopicModel, {
  foreignKey: "topic_id",
  as: "topicOrigin",
});

TopicModel.hasOne(SubtopicModel, { foreignKey: "topic_id", as: "topicSon" });
