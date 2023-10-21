const PrimaryGoalsForm = ({ setActiveStep, preferences, setPreferences }) => {
  return (
    <div className="w-full mt-6 flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="primaryGoal" className="font-medium text-lg">
          My goal is to...
        </label>
        <select
          value={preferences.PRIMARY_GOAL}
          onChange={(e) =>
            setPreferences({ ...preferences, PRIMARY_GOAL: e.target.value })
          }
          id="primaryGoal"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        >
          <option value="LOSE_FAT">Lose Fat</option>
          <option value="MAINTAIN_TONE">Maintain Tone</option>
          <option value="BUILD_MUSCLE">Build Muscle</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="workoutType" className="font-medium text-lg">
          Workout Type
        </label>
        <select
          value={preferences.WORKOUT_TYPE}
          onChange={(e) =>
            setPreferences({ ...preferences, WORKOUT_TYPE: e.target.value })
          }
          id="workoutType"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        >
          <option value="WEIGHTED">Weighted</option>
          <option value="BODY_WEIGHT">Body Weight</option>
          <option value="NO_EQUIPMENT">No Equipment</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="routineFocus" className="font-medium text-lg">
          Routine Focus
        </label>
        <select
          value={preferences.ROUTINE_FOCUS}
          onChange={(e) =>
            setPreferences({ ...preferences, ROUTINE_FOCUS: e.target.value })
          }
          id="routineFocus"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        >
          <option value="AESTHETICS">Aestethics</option>
          <option value="STRENGTH">Strength</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="strengthLevel" className="font-medium text-lg">
          Strength Level
        </label>
        <select
          value={preferences.STRENGTH_LEVEL}
          onChange={(e) =>
            setPreferences({ ...preferences, STRENGTH_LEVEL: e.target.value })
          }
          id="strengthLevel"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        >
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-2 bg-[#CDFB47] py-2 rounded-md disabled:opacity-50"
        onClick={() => setActiveStep(2)}
      >
        Continue
      </button>
    </div>
  );
};

export default PrimaryGoalsForm;
