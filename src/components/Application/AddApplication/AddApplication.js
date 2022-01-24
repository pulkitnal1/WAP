import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './AddApplication.css';

const AddApplication = (props) => {
  const [appName,setAppName] = useState('');
  const [details,setDetails] = useState('');
  const [applicationTransitionClass,setApplicationTransitionClass] = useState('stickyContainer showContainer');
  const [dependencyTransitionClass,setDependencyTransitionClass] = useState('stickyContainer hideContainer');
  const [environmentTransitionClass,setEnvironmentTransitionClass] = useState('stickyContainer hideContainer');

  const options = [
      { label: "Grapes 🍇", value: "grapes" },
      { label: "Mango 🥭", value: "mango" },
      { label: "Strawberry 🍓", value: "strawberry" }
    ];

    const [selected, setSelected] = useState([]);

  const onEditApplication =(e)=>{
    e.preventDefault();
    setApplicationTransitionClass("stickyContainer showContainer");
    setDependencyTransitionClass("stickyContainer hideContainer");
    setEnvironmentTransitionClass("stickyContainer hideContainer");
  }
  const onEditDependency =(e)=>{
    e.preventDefault();
    setDependencyTransitionClass("stickyContainer showContainer");
    setApplicationTransitionClass("stickyContainer hideContainer");
    setEnvironmentTransitionClass("stickyContainer hideContainer");
  }
  const onEditEnvironment =(e)=>{
    e.preventDefault();
    setEnvironmentTransitionClass("stickyContainer showContainer");
    setApplicationTransitionClass("stickyContainer hideContainer");
    setDependencyTransitionClass("stickyContainer hideContainer");
  }
  return (
    <div className="addApplication">
          <div className="addApplication__container">
            <div className="addApplication__leftContainer">
              <div className={applicationTransitionClass}>
                <div  className="addApplication__heading" >Add New Application
                </div>
                <form>
                    <h5 className="addApplication__label">Application Name</h5>
                    <input type="text" placeholder="Application"className="addApplication__input"/>
                    <h5 className="addApplication__label">Application Owner</h5>
                    <input type="text" placeholder="Application Owner"className="addApplication__input"/>
                    <h5 className="addApplication__label">Details</h5>
                    <textarea className="addApplication__input" placeholder="Add brief details about the app and contact details of the support team."/>
                    <div  className="addApplication__addButton" >Add
                    </div>
                </form>
              </div>
              <div className={dependencyTransitionClass}>
                <div  className="addApplication__heading" >Add/Edit Dependency
                </div>
                <form>
                    <h5 className="addApplication__label">Application Name</h5>
                      <select  value="" className="addApplication__dropdown">
                              <option value="" >Select...</option>
                              <option value="upstream">TLA</option>
                              <option value="downstream">BLAST</option>
                              <option value="both">LOLA</option>
                      </select>

                    <h5 className="addApplication__label">Stream</h5>
                    <select  value="" className="addApplication__dropdown">
                            <option value="" >Select...</option>
                            <option value="upstream">Upstream</option>
                            <option value="downstream">Downstream</option>
                            <option value="both">Both</option>
                    </select>
                    <h5 className="addApplication__label">Dependency Owner</h5>
                    <input type="text" placeholder="Application Owner"className="addApplication__input"/>
                    <h5 className="addApplication__label">Details</h5>
                    <textarea className="addApplication__input" placeholder="Add brief details about the app,conectivity mechanism,type of data exchanged and contact details of the support team."/>
                    <div  className="addApplication__addButton" >Add
                    </div>
                </form>
              </div>
              <div className={environmentTransitionClass}>
                <div  className="addApplication__heading" >Add/Edit Environment
                </div>
                <form>
                  <h5 className="addApplication__label">Application Name</h5>
                  <input type="text" placeholder="Application" className="addApplication__input" disabled/>
                  <h5 className="addApplication__label">Environment Type</h5>
                  <select  value="" className="addApplication__dropdown">
                          <option value="" >Select...</option>
                          <option value="dev">DEV</option>
                          <option value="st">ST</option>
                          <option value="sit">SIT</option>
                          <option value="uat">UAT</option>
                          <option value="SVP">SVP</option>
                          <option value="trn">TRN</option>
                          <option value="prod">PROD</option>
                          <option value="other">Other</option>
                  </select>
                  <h5 className="addApplication__label">Environment Name</h5>
                  <input type="text" placeholder="SIT1/SIT2/SITBAU/SITINT..."className="addApplication__input"/>
                  <h5 className="addApplication__label">Details</h5>
                  <textarea className="addApplication__input" placeholder="Add brief details about the app and contact details of the support team."/>
                  <div  className="addApplication__addButton" >Add
                  </div>
                </form>
              </div>
            </div>

            <div className="addApplication__rightContainer">

              <div  className="addApplication__heading" >Add New Application
              </div>
              <form>
                <fieldset>
                  <legend>Application</legend>
                <div className="addApplication__details">
                  <h5 className="addApplication__label">Name: </h5>
                  <span>LOLA</span>
                </div>
                <div className="addApplication__details">
                  <h5 className="addApplication__label">Owner:</h5>
                  <span>Henry Dang </span>
                </div>
                <div className="addApplication__details">
                  <h5 className="addApplication__label">Details: </h5>
                  <span>Developer => Pulkit Nalwaya</span>
                </div>
                <div  className="addApplication__addButton addApplication__inlineButton" onClick={onEditApplication}>Edit Application
                </div>
                </fieldset>
                <fieldset>
                  <legend>Dependecies</legend>
                  <div >No dependencies huh!!Looks like this app is a lone warrior.</div>
                  <div className="addApplication__dynamicRows">

                      <table className="addApplication__table">
                        <tr>
                           <td>TLA</td>
                           <td>Upstream</td>
                           <td>Henry Dang</td>
                            <td><input type="button" value="X" className="addApplication__icon"/></td>
                        </tr>
                        <tr>
                            <td>BLAST</td>
                            <td>Upstream</td>
                            <td>Henry Dang</td>
                             <td><input type="button" value="X" className="addApplication__icon"/></td>
                        </tr>
                      </table>

                  </div>
                  <div  className="addApplication__addButton addApplication__inlineButton" onClick={onEditDependency}>Edit Dependency
                  </div>
                </fieldset>
            <fieldset>
                <legend>Environments</legend>
                <div className="addApplication__details">
                <div>Sorry no environments!!Lets do PROD only ..</div>
                </div>
                <div className="addApplication__dynamicRows">

                    <table className="addApplication__table">
                      <tr>
                         <td>SIT</td>
                         <td>SITINT</td>

                          <td><input type="button" value="X" className="addApplication__icon"/></td>
                      </tr>
                      <tr>
                          <td>UAT</td>
                          <td>UAT 1</td>
                          
                           <td><input type="button" value="X" className="addApplication__icon"/></td>
                      </tr>
                    </table>

                </div>
                  <div  className="addApplication__addButton addApplication__inlineButton" onClick={onEditEnvironment}>Edit Environment
                  </div>
              </fieldset>
              <div  className="addApplication__addButton addApplication__createButton" >Create Application
                </div>

              </form>
            </div>
          </div>
    </div>
  )
}

export default AddApplication;
