import './tryingProps.css'

export function CoreConcept({title, image , description}){
    return(
    <li>
      <img src={image} alt={title} />
      <h3>
        {title}
      </h3>
      <p>
        {description}
      </p>
    </li>
    );
}
  
export function CourseGoal({title, description}) {
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
}