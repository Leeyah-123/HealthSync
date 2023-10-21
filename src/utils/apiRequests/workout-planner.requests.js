import AxiosService from '../../services/Axios.service';
import { apiResponse } from '../helper';

const axiosProtectedInstance = AxiosService.protectedMainInstance;

export const workoutPlannerRequests = () => ({
  getActiveWorkoutPlan: async () => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'GET',
        url: '/workout-plan/plan',
      });
      return apiResponse(true, 'Fetched.', response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Fetching Workout Plans.',
        err
      );
    }
  },
  getWorkoutRoutines: async () => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'GET',
        url: '/workout-plan/routine',
      });
      return apiResponse(true, 'Fetched.', response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Fetching Workout Routines.',
        err
      );
    }
  },
  getWorkoutPlanById: async (id) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'GET',
        url: `/workout-plan/plan/${id}`,
      });
      return apiResponse(true, 'Fetched.', response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Fetching Workout Plan.',
        err
      );
    }
  },
  getWorkoutRoutineById: async (id) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'GET',
        url: `/workout-plan/routine/id/${id}`,
      });
      return apiResponse(true, 'Fetched.', response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Fetching Workout Routine.',
        err
      );
    }
  },
  getRoutinesByPreferences: async (data) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'GET',
        url: `/workout-plan/routine/preferences`,
        data,
      });
      return apiResponse(true, 'Fetched.', response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Fetching Workout Routines.',
        err
      );
    }
  },
  createWorkoutPlan: async (data) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'POST',
        url: `/workout-plan/plan`,
        data,
      });
      return apiResponse(
        true,
        'Workout Plan Created Successfully.',
        response.data
      );
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Creating Workout Plan.',
        err
      );
    }
  },
  createWorkoutRoutine: async (data) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'POST',
        url: `/workout-plan/routine`,
        data,
      });
      return apiResponse(
        true,
        'Workout Routine Created Successfully.',
        response.data
      );
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Creating Workout Routine.',
        err
      );
    }
  },
  checkpointWorkoutPlan: async (id) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'PATCH',
        url: `/workout-plan/checkpoint/${id}`,
      });
      return apiResponse(
        true,
        'Workout Plan Checkpointed Successfully.',
        response.data
      );
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Checkpointing Workout Plan.',
        err
      );
    }
  },
  deleteWorkoutPlan: async (id) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'DELETE',
        url: `/workout-plan/plan/${id}`,
      });
      return apiResponse(
        true,
        'Workout Plan Deleted Successfully.',
        response.data
      );
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Deleting Workout Plan.',
        err
      );
    }
  },
  deleteWorkoutRoutine: async (id) => {
    try {
      let response = await axiosProtectedInstance()({
        method: 'DELETE',
        url: `/workout-plan/routine/${id}`,
      });
      return apiResponse(
        true,
        'Workout Routine Deleted Successfully.',
        response.data
      );
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Deleting Workout Routine.',
        err
      );
    }
  },
});
