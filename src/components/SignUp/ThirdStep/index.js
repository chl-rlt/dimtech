import React from 'react'

const ThirdStep = () => {
  return (
    <>
      <p className="title-about-you">Help us to know more about you.</p>
            <div method="post" className="form-about-you">
              <table>
                <tbody>
                  <tr className="section">
                      <td className="section-left">
                        <p className="title-section">Education</p>
                      </td>
                      <td className="section-right">
                        <ul>
                          <li className="question">What is your level of education ?</li>
                          <li>
                            <input className="input-option" type="radio" id="secondary-school" name="education" value="secondary-school" />
                            <label className="option" forHtml="secondary-school">Secondary school</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="high-school" name="education" value="high-school" />
                            <label className="option" forHtml="high-school">High school</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="undergradutate-degree" name="education" value="undergradutate-degree" />
                            <label className="option" forHtml="undergradutate-degree">Undergradutate degree</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="postgraduate-degree" name="education" value="postgraduate-degree" />
                            <label className="option" forHtml="postgraduate-degree">Postgraduate degree</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="doctorate" name="education" value="doctorate" />
                            <label className="option" forHtml="doctorate">Doctorate</label>
                          </li>
                        </ul>
                      </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="section">
                      <td className="section-left">
                        <p className="title-section">General Knowledge and Experience</p> 
                      </td>
                      <td className="section-right">
                        <ul>
                          <li className="question">Who are you ?</li>
                          <li>
                            <input className="input-option" type="radio" id="asset-manager" name="general" value="asset-manager" />
                            <label className="option" forHtml="asset-manager">An asset manager</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="office-manager" name="general" value="office-manager" />
                            <label className="option" forHtml="office-manager">A family office manager</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="retail-investor" name="general" value="retail-investor" />
                            <label className="option" forHtml="retail-investor">A retail investor</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="other" name="general" value="other" />      
                            <label className="option" forHtml="other">Other :</label>
                            <input className="option" type="text" id="other" name="general" />      
                                                
                          </li>
                          <li className="question question-2">How long have you been trading ?</li>
                          <li>
                            <input className="input-option" type="radio" id="1-2years" name="trading" value="1-2years" />
                            <label className="option" forHtml="1-2years">1-2 years</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="2-5years" name="trading" value="2-5years" />
                            <label className="option" forHtml="2-5years">2-5 years</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="5years" name="trading" value="5years" />
                            <label className="option" forHtml="5years">5+ years</label>
                          </li>
                        </ul>
                      </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="section">
                      <td className="section-left">
                        <p className="title-section">Investment Objective</p>
                      </td>
                      <td className="section-right">
                        <ul>
                          <li className="question">What is the frequency of trading ?</li>
                          <li>
                            <input className="input-option" type="radio" id="intraday" name="frequency" value="intraday" />
                            <label className="option" forHtml="intraday">Intra day</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="day" name="frequency" value="day" />
                            <label className="option" forHtml="day">Day</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="weekly" name="frequency" value="weekly" />
                            <label className="option" forHtml="weekly">Weekly</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="monthly" name="frequency" value="monthly" />
                            <label className="option" forHtml="monthly">Monthly</label>                        
                          </li>
                          <li className="question question-2">What is your investment horizon ?</li>
                          <li>
                            <input className="input-option" type="radio" id="week" name="horizon" value="week" />
                            <label className="option" forHtml="week">A week</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="more-week" name="horizon" value="more-week" />
                            <label className="option" forHtml="more-week">More than a week</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="more-month" name="horizon" value="more-month" />
                            <label className="option" forHtml="more-month">More than a month</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="more-year" name="horizon" value="more-year" />
                            <label className="option" forHtml="more-year">More than a year</label>
                          </li>
                        </ul>
                      </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="section">
                      <td className="section-left">
                        <p className="title-section">Risks</p>
                      </td>
                      <td className="section-right">
                        <ul>
                          <li className="question">How would you describe your risk tolerance ?</li>
                          <li>
                            <input className="input-option" type="radio" id="conservative" name="tolerance" value="conservative" />
                            <label className="option" forHtml="conservative">Conservative</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="moderately" name="tolerance" value="moderately" />
                            <label className="option" forHtml="moderately">Moderately Conservative</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="moderate" name="tolerance" value="moderate" />
                            <label className="option" forHtml="moderate">Moderate</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="aggressive" name="tolerance" value="aggressive" />
                            <label className="option" forHtml="aggressive">Moderately Aggressive</label>                        
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="moderate-aggressive" name="tolerance" value="moderate-aggressive" />
                            <label className="option" forHtml="moderate-aggressive">Aggressive</label>                        
                          </li>

                          <li className="question question-2">Are you aware of the key regulations of financial markets ?</li>
                          <li>
                            <input className="input-option" type="radio" id="yes" name="horizon" value="yes" />
                            <label className="option" forHtml="yes">Yes</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="no" name="horizon" value="no" />
                            <label className="option" forHtml="no">No</label>
                          </li>
                        </ul>
                      </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="section">
                      <td className="section-left">
                        <p className="title-section">Common Question</p>
                      </td>
                      <td className="section-right">
                        <ul>
                          <li className="question">How did you encountered us ?</li>
                          <li>
                            <input className="input-option" type="radio" id="colleague" name="common" value="colleague" />
                            <label className="option" forHtml="colleague">Referred by a friend or colleague</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="website" name="common" value="website" />
                            <label className="option" forHtml="website">Website</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="media" name="common" value="media" />
                            <label className="option" forHtml="media">Media</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="search-engine" name="common" value="search-engine" />
                            <label className="option" forHtml="search-engine">Search engine</label>
                          </li>
                          <li>
                            <input className="input-option" type="radio" id="other" name="common" value="other" />      
                            <label className="option" forHtml="other">Other :</label>
                            <input className="option" type="text" id="other" name="common" />      
                                                
                          </li>
                          
                        </ul>
                      </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" className="button-send">Send</button>
            </div>
    </>
  )
}

export default ThirdStep