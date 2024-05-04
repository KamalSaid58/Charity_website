import { useNavigate } from "react-router-dom";

function Donor(){
    const handleViewRequestedItemsClick = () => {
        navigate("/ViewReqDon");
      };
    const navigate = useNavigate();
    return (
        
        <>
            <div class="row">
                <div class="col-sm-3">
                    <div class="card shadow p-3 mb-3 bg-white rounded">
                    <div class="card-body">
                        DonorDashboard
                    </div>
                    </div>
                </div>
            </div>    
        
        
        
        
        
        
        
        
        </>);
}

export default Donor;