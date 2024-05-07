import { useNavigate } from "react-router-dom";

function Donor() {
  const navigate = useNavigate();
  return (
    <>
      <div class="row">
        <div class="col-sm-3">
          <div class="card shadow p-3 mb-3 bg-white rounded">
            <div class="card-body">
              <h5>DonorDashboard</h5>
              <div class="card-body col-sm-6">
                <button
                  type="button"
                  className="btn btn-lg mb-4 text-white"
                  style={{ background: "#9F8C76", marginRight: "10px" }}
                  onClick={() => navigate("/LoginTrial")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donor;
