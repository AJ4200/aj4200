import React, { useEffect, useState } from'react';
import MainContact from '../components/Contact/MainContact';
import PageIndicator from '../components/Utils/PageIndicator';
import PageWithIndicator from '../components/Utils/PageWithIndicator';
import Bubbles from '../components/Utils/Bubbles';
 
const Conctact: React.FC = () => 
{

    
return (
  <>
    <PageWithIndicator route='/contact' bgcolor='bg-blue-500'>   
      <>      <Bubbles/>
      <MainContact/>   
      </>  

</PageWithIndicator>
  </>
);
}
export default Conctact;