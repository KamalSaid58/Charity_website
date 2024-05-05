import React from 'react';
import { useNavigate } from 'react-router-dom';
function Donor(){
    const navigate = useNavigate();
    //return <>KamalDonor</>;
      
        return (
            <div className="container p-3 my-5">
              <div className="row justify-content-center">
                <div className="col-6">
                  <div className="mb-3">
                    
                    <button
                      type="button"
                      
                      className="btn btn-lg mb-4 text-white w-100" 
                      style={{background:"#9F8C76"}}
                      onClick={()=>navigate("/ListOfToys")}
                    >
                     View List Of Toys
                      
                    </button>
                  </div>
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-lg mb-4 text-white w-100" 
                      style={{background:"#9F8C76"}}
                      onClick={()=>navigate("/ListOfFood")}
                    >
                      View List Of Food
                    </button>
                  </div>
                  <button
                      type="button"
                      className="btn btn-lg mb-4 text-white w-100" 
                      style={{background:"#9F8C76"}}
                      onClick={()=>navigate("/ListOfMedicalSupplies")}
                    >
                      View List Of Medical Supplies
                    </button>
                </div>
              </div>
            </div>
          );
      
}

export default Donor;