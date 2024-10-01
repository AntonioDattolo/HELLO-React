import { CoreConcept } from "./tryingProps";

import { CourseGoal } from "./tryingProps";

import { CORE_CONCEPTS } from '../data.js';

import { exercise } from '../data.js';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>
          Core Concepts
        </h2>
        <ul>
          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          /> */}
          {/* <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}

          {/* <CourseGoal {...exercise[0]} />
          <CourseGoal {...exercise[1]} /> */}


          {/* .map questo funziona come un ciclo v-for di vue.js */}
          {CORE_CONCEPTS.map((item)=> (<CoreConcept key={item.title} {...item} /> ))}
          {exercise.map((item)=> <CourseGoal key={item.title} {...item} />)} 
          {/* ************************************ */}
            
        </ul>
      </section>
    );
}