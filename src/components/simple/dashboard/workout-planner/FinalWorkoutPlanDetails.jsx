import { Spinner } from '@chakra-ui/react';

const FinalWorkoutPlanDetails = ({
  details,
  setDetails,
  handleSubmit,
  loading,
}) => {
  return (
    <form className="w-full mt-6 flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-lg">
          Workout Plan Name
        </label>
        <input
          type="text"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          id="name"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="desc" className="font-medium text-lg">
          Workout Plan Description
        </label>
        <input
          type="text"
          value={details.description}
          onChange={(e) =>
            setDetails({ ...details, description: e.target.value })
          }
          id="desc"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="trainingDays" className="font-medium text-lg">
          Training Days
        </label>
        <select
          value={details.trainingDays}
          onChange={(e) =>
            setDetails({ ...details, trainingDays: e.target.value })
          }
          id="trainingDays"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
          multiple
        >
          <option value="Mon">Monday</option>
          <option value="Tue">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thur">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
          <option value="Sun">Sunday</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="startDate" className="font-medium text-lg">
          Start Date
        </label>
        <input
          type="date"
          value={details.startDate}
          onChange={(e) =>
            setDetails({ ...details, startDate: e.target.value })
          }
          id="startDate"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="endDate" className="font-medium text-lg">
          End Date
        </label>
        <input
          type="date"
          value={details.endDate}
          onChange={(e) => setDetails({ ...details, endDate: e.target.value })}
          id="endDate"
          className="pl-2 pr-5 rounded-md py-2 border border-slate-400"
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-[#CDFB47] py-2 rounded-md disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <Spinner mt={1} /> : 'Continue'}
      </button>
    </form>
  );
};

export default FinalWorkoutPlanDetails;
