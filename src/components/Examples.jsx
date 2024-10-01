import TabButton from './tabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
export default function Examples(){
    const [tabContent, setTabContent] = useState();
    // let tabContent = 'please select a button';
    function handleSelect(selectdButton) {
        setTabContent(selectdButton)
        // console.log(selectdButton)
    }
    return(
        <Section id='examples' title='Examples'>
         
          <menu>
            <TabButton 
              isSelected={tabContent === 'components' }
              onClick={() => handleSelect('components')}>
              Components
            </TabButton>

            <TabButton 
              isSelected={tabContent === 'jsx' }
              onClick={() => handleSelect('jsx')}>
              JSX
            </TabButton>

            <TabButton 
              isSelected={tabContent === 'props'}
              onClick={() => handleSelect('props')}>
              Props
            </TabButton>

            <TabButton 
              isSelected={tabContent === 'state' }
              onClick={() => handleSelect('state')}>
              State
            </TabButton>
          </menu>
          {!tabContent ? <p>Select a topic</p> :  (
            <div id="tab-content">
              <h3>
                {EXAMPLES[tabContent].title}
              </h3>
              <p>
                {EXAMPLES[tabContent].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[tabContent].code}
                </code>
              </pre>
            </div>
          ) }
        </Section>
    );
}