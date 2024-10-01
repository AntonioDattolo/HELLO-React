import TabButton from './tabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples() {
    const [tabContent, setTabContent] = useState();
    // let tabContent = 'please select a button';
    function handleSelect(selectdButton) {
        setTabContent(selectdButton)
        // console.log(selectdButton)
    }
    return (
        <Section id='examples' title='Examples'>
            <Tabs
            // NB utilizzare nomi identificatori di stringhe come --> menu,div,ul,section 
            // se invece si vuole passare direttamente un componente custom si scrive direttamente 'Section', nome della funzione del componente
                container='menu'
                buttons={
                    <>
                        <TabButton
                            isSelected={tabContent === 'components'}
                            onClick={() => handleSelect('components')}>
                            Components
                        </TabButton>

                        <TabButton
                            isSelected={tabContent === 'jsx'}
                            onClick={() => handleSelect('jsx')}>
                            JSX
                        </TabButton>

                        <TabButton
                            isSelected={tabContent === 'props'}
                            onClick={() => handleSelect('props')}>
                            Props
                        </TabButton>

                        <TabButton
                            isSelected={tabContent === 'state'}
                            onClick={() => handleSelect('state')}>
                            State
                        </TabButton>
                    </>
                }>
                    {/* contenuto delle tab(topic) */}
                {!tabContent ? <p>Select a topic</p> : (
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
                )}
            </Tabs>
        </Section>
    );
}