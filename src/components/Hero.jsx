import React from "react";

const Hero = () => {
  return (
    <>
      <h5 className="benefits-list">
        Complete this training program if you want to ...
      </h5>
      <ol>
        <li>Follow a simple program with guaranteed results</li>
        <li>Get fit, healthy, strong and shredded</li>
        <li>Learn more about gym, training and technique</li>
        <li>Become a lifetime gym bro 💪 </li>
      </ol>
      <h3>The Rules</h3>
      <p>
        To complete this program, you <b>MUST</b> follow these 3 simple
        programs:
      </p>
      <ul className="rules-list">
        <div className="rule-item">
          <p>
            <b>REST</b>
          </p>
          <p>Ensure that you are taking rest days where necessary.</p>
        </div>
        <div className="rule-item">
          <p>
            <b>REPS</b>
          </p>
          <p>
            Every rep is a paused rep following a{" "}
            <abbr title="2 seconds down - 2 seconnds pause - 2 seconds up">
              2 - 2 - 2 tempo.{" "}
            </abbr>
          </p>
        </div>
        <div className="rule-item">
          <p>
            <b>WEIGHT*</b>
          </p>
          <p>
            Select the maximum weight that allows you to complete the set with
            good form.
          </p>
        </div>
      </ul>
      <small>
        *The first and second set should be at 75% and 85% of your working
        weight used for the last two sets.
      </small>
      <h3>The Training Plan</h3>
      <p>This trainig plan uses the following rotation. ⬇️</p>
      <p>
        <b>
          <i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i>
        </b>
      </p>
      <p>
        Complete all of the workouts below and track your progress along the way
        ✅
      </p>
    </>
  );
};

export default Hero;
