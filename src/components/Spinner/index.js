import { usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import "./Spinner.css";

const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="spinner">
        <ThreeDots color="#2BAD60" height="100" width="100" />
      </div>
    )
  );
};

export default Spinner;
