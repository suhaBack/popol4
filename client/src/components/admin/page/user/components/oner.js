import { useEffect, useState } from "react";
import Table from "./table";
import axios from "axios";
import { API_URL } from "../../../../config/contansts";

function Oner(){
  const [oner,setOner] = useState([]);

  const onerData = async()=>{
    await axios.get(`${API_URL}/user/oner`)
    .then((response)=>{
      setOner(response.data);
    })
  }

  useEffect(()=>{
    onerData();
  },[])

  return(
    <div className='KJH_inq_section'>
      <div className='KJH_inq_route'>
          Admin &gt; 회원 관리 &gt; 일반 회원 
          <span> 회원 수 {oner.length}명</span>
      </div>
      <div className='KJH_inq_info'>
        <Table data={oner}></Table>
      </div>
    </div>
  )
}

export default Oner;
