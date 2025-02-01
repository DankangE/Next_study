"use client";

import CustomEditor from "./ClientPostEditor";
import ClientPostHeader from "./ClientPostHeader";


const ClientPost: React.FC = () => {
  return (
    <>  
      <ClientPostHeader />
      <CustomEditor />
    </>
  );
};

export default ClientPost;
