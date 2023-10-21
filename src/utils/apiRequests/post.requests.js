import AxiosService from "../../services/Axios.service";
import { apiResponse } from "../helper";
const axiosInstance = AxiosService.mainInstance;
const axiosProtectedInstance = AxiosService.protectedMainInstance;

export const postRequests = () => ({
  createPost: async (token, postData) => {
    try {
      let response = await axiosProtectedInstance(
        token,
        postData
      )({
        method: "POST",
        url: "/forum/posts",
        data: postData,
      });
      return apiResponse(true, "content posted successfully", response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          "Error Posting Content.",
        err
      );
    }
  },
});
