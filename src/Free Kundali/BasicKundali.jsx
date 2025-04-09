import React from 'react'
import userContext from '../Context/Context'
function BasicKundali() {
  const { user } = React.useContext(userContext);
  if (!user) return <div>Please login to view your Kundali</div>
  return (
    <div>BasicKundali { user.username}</div>
  )
}

export default BasicKundali