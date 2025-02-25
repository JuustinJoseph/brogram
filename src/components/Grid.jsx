import React from "react";
import { workoutProgram as training_plan } from "../utils/index";
import WorkoutCard from "./WorkoutCard";

const Grid = () => {
  const isLocked = true;
  const selectedWorkout = 4;

  return (
    <div className="training-plan-grid">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        //type of workout
        const type =
          workoutIndex % 3 == 0
            ? "Push"
            : workoutIndex % 3 == 1
            ? "Pull"
            : "Legs";

        //getting the training plan for the current index
        const trainingPlan = training_plan[workoutIndex];

        //getting the day number
        const dayNum =
          workoutIndex / 8 <= 1 ? "0" + (workoutIndex + 1) : workoutIndex + 1;

        //getting the icon
        const icon =
          workoutIndex % 3 == 0 ? (
            <i className="fa-solid fa-dumbbell"></i>
          ) : workoutIndex % 3 == 1 ? (
            <i className="fa-solid fa-weight-hanging"></i>
          ) : (
            <i className="fa-solid fa-bolt"></i>
          );

        if (workoutIndex == selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              workoutIndex={workoutIndex}
              type={type}
              trainingPlan={trainingPlan}
              dayNum={dayNum}
              icon={icon}
            />
          );
        }

        return (
          <button
            className={"card plan-card  " + (isLocked ? "inactive" : "")}
            key={workoutIndex}
          >
            <div className="plan-card-header">
              <p>Day {dayNum}</p>
            </div>

            {
              //only show unlocked content
              isLocked ? <i className="fa-solid fa-lock"></i> : icon
            }
            {/* display type of workout */}
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Grid;
