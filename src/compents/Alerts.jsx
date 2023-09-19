import React from 'react'

const Alerts = (props) => {
  return (
    
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
  
</div>
   
  )
}

export default Alerts
