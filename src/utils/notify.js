/** @format */
import { toast } from "react-toastify";
let config = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
const notify = (status, message) => {
  if (status) {
    toast.success(message, config);
  } else {
    toast.error(message, config);
  }
};
export default notify;
