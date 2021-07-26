import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { EducationDataObject } from "../modules/UserInput/Education/types";
import getHeaders from "../utils/headers";

const patchEducation = async (
  token: string = null,
  resumeId: string,
  body: Array<EducationDataObject>
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/education/${resumeId}`,
    body,
    {
      headers: getHeaders(token),
    }
  );
  return res.data;
};

export default patchEducation;
