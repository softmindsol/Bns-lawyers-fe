import { Link } from "react-router-dom";
import shuttle from "../../assets/shuttle.png";

const UpgradePlan = ({ setShowFeedback }) => {
  return (
    <div className="fixed bottom-0 left-0 mx-2 my-4 w-full max-w-64 rounded-[6px] border-t bg-[#F4F4F9] px-4 py-2">
      <Link
        to="/pricing-plan"
        className={`flex items-center space-x-3 rounded-lg ${
          location.pathname === "Upgrade Plan"
            ? "bg-[#0057FF] text-white"
            : "text-[#0A2540] hover:bg-gray-100"
        }`}
        onClick={setShowFeedback}
      >
        <div>
          <img src={shuttle} alt="Shuttle" />
        </div>
        <div>
          <h5 className="text-base font-medium text-[#0A2540]">Upgrade Plan</h5>
          <small className="text-[10px] font-normal text-textgray">
            More access to the best plans
          </small>
        </div>
      </Link>
    </div>
  );
};

export default UpgradePlan;
